"use strict";

const COPY = {
  en: {
    title: "Request submitted",
    pageTitle: "Request submitted | FIFA Foundation",
    lead: "Your support request was sent successfully.",
    kitId: "Kit ID",
    kitType: "Kit type",
    reference: "Reference",
    note: "The support team will review the report and contact the email address provided in the form.",
    back: "Back to support",
    pendingTitle: "Submitting request",
    pendingLead: "Please wait while the support request is completed.",
  },
  fr: {
    title: "Demande envoyee",
    pageTitle: "Demande envoyee | FIFA Foundation",
    lead: "Votre demande de support a ete envoyee avec succes.",
    kitId: "Kit ID",
    kitType: "Type de kit",
    reference: "Reference",
    note: "L'equipe support examinera le rapport et contactera l'adresse e-mail fournie dans le formulaire.",
    back: "Retour au support",
    pendingTitle: "Envoi de la demande",
    pendingLead: "Veuillez patienter pendant la finalisation de la demande.",
  },
  es: {
    title: "Solicitud enviada",
    pageTitle: "Solicitud enviada | FIFA Foundation",
    lead: "Su solicitud de soporte fue enviada correctamente.",
    kitId: "Kit ID",
    kitType: "Tipo de kit",
    reference: "Referencia",
    note: "El equipo de soporte revisara el reporte y contactara al correo indicado en el formulario.",
    back: "Volver a soporte",
    pendingTitle: "Enviando solicitud",
    pendingLead: "Espere mientras se completa la solicitud de soporte.",
  },
  pt: {
    title: "Solicitacao enviada",
    pageTitle: "Solicitacao enviada | FIFA Foundation",
    lead: "Sua solicitacao de suporte foi enviada com sucesso.",
    kitId: "Kit ID",
    kitType: "Tipo de kit",
    reference: "Referencia",
    note: "A equipe de suporte revisara o relatorio e entrara em contato pelo e-mail informado no formulario.",
    back: "Voltar ao suporte",
    pendingTitle: "Enviando solicitacao",
    pendingLead: "Aguarde enquanto a solicitacao de suporte e concluida.",
  },
};

const KIT_TYPES = {
  en: { "Robotics Kit": "Robotics Kit", "Physical Computing Kit": "Physical Computing Kit" },
  fr: { "Robotics Kit": "Kit robotique", "Physical Computing Kit": "Kit informatique physique" },
  es: { "Robotics Kit": "Kit de Robotica", "Physical Computing Kit": "Kit de Computacion Fisica" },
  pt: { "Robotics Kit": "Kit de Robotica", "Physical Computing Kit": "Kit de Computacao Fisica" },
};

const params = new URLSearchParams(window.location.search);
const storedLanguage = window.localStorage.getItem("supportLanguage");
const requestedLanguage = params.get("lang") || storedLanguage || (navigator.language || "").slice(0, 2).toLowerCase();
const language = COPY[requestedLanguage] ? requestedLanguage : "en";
const t = (key) => COPY[language][key] || COPY.en[key] || key;

document.documentElement.lang = language;
document.title = t("pageTitle");
document.querySelectorAll("[data-i18n]").forEach((node) => {
  node.textContent = t(node.dataset.i18n);
});

if (params.get("pending") === "1") {
  document.getElementById("confirmation-title").textContent = t("pendingTitle");
  document.querySelector(".lead").textContent = t("pendingLead");
}

const kitId = params.get("id") || "-";
const kitType = params.get("type") || "-";
const reference = params.get("ref") || "";

document.getElementById("kit-id").textContent = kitId;
document.getElementById("kit-type").textContent = KIT_TYPES[language]?.[kitType] || kitType;

if (reference) {
  document.getElementById("reference-row").hidden = false;
  document.getElementById("reference").textContent = reference;
}
