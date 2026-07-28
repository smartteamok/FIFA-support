const fs = require("node:fs/promises");
const { formidable } = require("formidable");

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;
const KIT_ID_PATTERN = /^(SR|SP)-\d{4}-[A-Z]-\d{6}$/;
const ALLOWED_EXTENSIONS = new Set(["jpg", "jpeg", "png", "pdf", "mp4", "mov"]);

module.exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    assertEnvironment();

    const { fields, files } = await parseMultipartForm(req);
    const data = normalizeFields(fields);

    validateSubmission(data, files);

    const reference = createReference(data.kit_id);
    const attachment = await buildAttachment(files.evidence);
    const emailPayload = buildEmailPayload(data, reference, attachment);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Resend error", result);
      return res.status(502).json({ error: "Email delivery failed" });
    }

    return res.status(200).json({
      ok: true,
      reference,
      resend_id: result.id,
    });
  } catch (error) {
    console.error("Support request error", error);
    const status = error.statusCode || 500;
    return res.status(status).json({
      error: status === 500 ? "Submission failed" : error.message,
    });
  }
};

function assertEnvironment() {
  const required = ["RESEND_API_KEY", "SUPPORT_EMAIL_FROM", "SUPPORT_EMAIL_TO"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length) {
    const error = new Error(`Missing environment variables: ${missing.join(", ")}`);
    error.statusCode = 500;
    throw error;
  }
}

function parseMultipartForm(req) {
  const form = formidable({
    multiples: false,
    maxFileSize: MAX_FILE_SIZE_BYTES,
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (error, fields, files) => {
      if (error) {
        error.statusCode = error.httpCode || 400;
        reject(error);
        return;
      }

      resolve({ fields, files });
    });
  });
}

function normalizeFields(fields) {
  return Object.fromEntries(
    Object.entries(fields).map(([key, value]) => {
      const normalized = Array.isArray(value) ? value[0] : value;
      return [key, String(normalized || "").trim()];
    }),
  );
}

function validateSubmission(data, files) {
  if (data.website) {
    const error = new Error("Invalid submission");
    error.statusCode = 400;
    throw error;
  }

  if (!KIT_ID_PATTERN.test(data.kit_id || "")) {
    const error = new Error("Invalid Kit ID");
    error.statusCode = 400;
    throw error;
  }

  const required = [
    "kit_type",
    "institution",
    "full_name",
    "email",
    "country",
    "city_district",
    "component",
    "issue_category",
    "description",
    "page_url",
    "submitted_at",
  ];

  const missing = required.filter((field) => !data[field]);
  if (missing.length) {
    const error = new Error(`Missing required fields: ${missing.join(", ")}`);
    error.statusCode = 400;
    throw error;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    const error = new Error("Invalid email");
    error.statusCode = 400;
    throw error;
  }

  if (data.description.length < 20) {
    const error = new Error("Description is too short");
    error.statusCode = 400;
    throw error;
  }

  const evidence = getSingleFile(files.evidence);
  if (!evidence) return;

  const filename = evidence.originalFilename || evidence.newFilename || "";
  const extension = filename.split(".").pop().toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    const error = new Error("Unsupported file type");
    error.statusCode = 400;
    throw error;
  }

  if (evidence.size > MAX_FILE_SIZE_BYTES) {
    const error = new Error("File is too large");
    error.statusCode = 400;
    throw error;
  }
}

async function buildAttachment(fileValue) {
  const file = getSingleFile(fileValue);
  if (!file || !file.filepath) return null;

  const content = await fs.readFile(file.filepath);
  return {
    filename: file.originalFilename || "evidence",
    content: content.toString("base64"),
  };
}

function getSingleFile(fileValue) {
  if (!fileValue) return null;
  return Array.isArray(fileValue) ? fileValue[0] : fileValue;
}

function createReference(kitId) {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const suffix = kitId.split("-").pop();
  return `DEP-${timestamp}-${suffix}`;
}

function buildEmailPayload(data, reference, attachment) {
  const html = renderEmailHtml(data, reference);
  const text = renderEmailText(data, reference);
  const payload = {
    from: process.env.SUPPORT_EMAIL_FROM,
    to: splitEmailList(process.env.SUPPORT_EMAIL_TO),
    subject: `[${reference}] ${data.kit_id} - ${data.issue_category}`,
    html,
    text,
    reply_to: data.email,
    tags: [
      { name: "source", value: "dep_support" },
      { name: "kit_type", value: data.kit_type.replace(/\s+/g, "_").toLowerCase() },
    ],
  };

  if (process.env.SUPPORT_EMAIL_CC) {
    payload.cc = splitEmailList(process.env.SUPPORT_EMAIL_CC);
  }

  if (attachment) {
    payload.attachments = [attachment];
  }

  return payload;
}

function splitEmailList(value) {
  return String(value || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function renderEmailHtml(data, reference) {
  const rows = [
    ["Reference", reference],
    ["Kit ID", data.kit_id],
    ["Kit Type", data.kit_type],
    ["Institution", data.institution],
    ["Full Name", data.full_name],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone || "-"],
    ["Country", data.country],
    ["City / District", data.city_district],
    ["Component", data.component],
    ["Issue Category", data.issue_category],
    ["Previous Troubleshooting", data.troubleshooting || "-"],
    ["Page URL", data.page_url],
    ["Submitted At", data.submitted_at],
    ["Language", data.language || "-"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px;border-bottom:1px solid #dbe5ed;color:#05345f;">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #dbe5ed;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#172231;line-height:1.45;">
      <h1 style="color:#05345f;">Digital Education Programme support request</h1>
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:760px;">${tableRows}</table>
      <h2 style="color:#05345f;">Problem Description</h2>
      <p style="white-space:pre-wrap;">${escapeHtml(data.description)}</p>
    </div>
  `;
}

function renderEmailText(data, reference) {
  return [
    "Digital Education Programme support request",
    "",
    `Reference: ${reference}`,
    `Kit ID: ${data.kit_id}`,
    `Kit Type: ${data.kit_type}`,
    `Institution: ${data.institution}`,
    `Full Name: ${data.full_name}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone || "-"}`,
    `Country: ${data.country}`,
    `City / District: ${data.city_district}`,
    `Component: ${data.component}`,
    `Issue Category: ${data.issue_category}`,
    `Previous Troubleshooting: ${data.troubleshooting || "-"}`,
    `Page URL: ${data.page_url}`,
    `Submitted At: ${data.submitted_at}`,
    `Language: ${data.language || "-"}`,
    "",
    "Problem Description:",
    data.description,
  ].join("\n");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
