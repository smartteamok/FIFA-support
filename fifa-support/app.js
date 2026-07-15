"use strict";

const SUPPORT_FORM_ENDPOINT = "REPLACE_WITH_FINAL_ENDPOINT";
const RESOURCES_URL = "";
const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;
const KIT_ID_PATTERN = /^(SR|SP)-\d{4}-[A-Z]-\d{6}$/;
const DEFAULT_LANGUAGE = "en";

const KIT_TYPES = {
  SR: "Robotics Kit",
  SP: "Physical Computing Kit",
};

const COMPONENTS_BY_KIT_TYPE = {
  "Robotics Kit": [
    "Continuous Rotation Servo",
    "Caster Wheel",
    "Color Sensor Module",
    "DC Encoder Motor",
    "Joystick Module",
    "LCD Module",
    "Line Tracking Sensor",
    "Mechanical Chassis Kit",
    "Tool",
    "Potentiometer Module",
    "Power Adapter / Charger",
    "Soil Moisture Sensor",
    "Ultrasonic Distance Sensor",
    "Wheel",
    "Accessory & Screw Set",
    "Jumper Wires (Female-to-Female)",
    "Micro:bit Expansion Shield",
    "Storage Box",
    "Other",
  ],
  "Physical Computing Kit": [
    "180° Servomotor",
    "RGB LED Strip",
    "Plastic Ball",
    "Alligator Clip Wires",
    "Jumper Wires (Male-to-Male)",
    "Jumper Wires (Male-to-Female)",
    "micro:bit",
    "Micro USB Cable",
    "Batteries",
    "Battery Holder",
    "Wearable",
    "Storage Box",
    "Other",
  ],
  fallback: [
    "Smart Hub",
    "Controller Board",
    "Sensor",
    "Actuator",
    "Cable",
    "Power Supply",
    "Storage Box",
    "Other",
  ],
};

const state = {
  kitId: "",
  kitType: "",
  kitIsValid: false,
  isSubmitting: false,
  language: DEFAULT_LANGUAGE,
};

const elements = {};

const TRANSLATIONS = {
  en: {
    skipLink: "Skip to support form",
    projectLabel: "Programme support",
    languageLabel: "Language",
    heroTitle: "Digital Education Programme support",
    heroIntro: "Use this page to report a problem with your kit or request technical assistance.",
    currentKit: "Current kit",
    kitIdentified: "Kit identified",
    kitRequired: "Kit identification required",
    kitDetected: "Your Kit ID has been detected and will be included automatically.",
    kitMissing: "We could not identify your kit automatically. Please enter the Kit ID printed next to the QR code.",
    kitId: "Kit ID",
    kitType: "Kit Type",
    notDetected: "Not detected",
    pendingIdentification: "Pending identification",
    manualKitLabel: "Kit ID printed next to the QR code",
    useKitId: "Use Kit ID",
    reportIssue: "Report a Kit Issue",
    reportIssueHint: "Send a support request with the Kit ID included automatically.",
    resources: "Access Guides and Resources",
    resourcesHint: "Learning materials link coming soon.",
    supportRequest: "Support request",
    formIntro: "Please complete the form below. Your Kit ID is included automatically so our support team can identify the product and its production record.",
    contactInfo: "Contact information",
    institution: "School or Institution",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone or WhatsApp",
    optional: "optional",
    country: "Country",
    cityDistrict: "City or District",
    issueDetails: "Issue details",
    component: "Affected Component",
    selectComponent: "Select the affected component",
    otherComponent: "If Other, which component?",
    issueCategory: "Issue Category",
    description: "Problem Description",
    descriptionHelp: "Please describe what happened, what you expected, and any troubleshooting steps already attempted.",
    troubleshooting: "Previous Troubleshooting",
    evidence: "Attach photos or a short video",
    evidenceHelp: "Please avoid including personal information about students. Maximum file size: 15 MB.",
    consent: "I confirm that the information provided is accurate and may be used to process this support request.",
    submit: "Submit Support Request",
    requestSubmitted: "Request submitted",
    successTitle: "Thank you. Your support request has been submitted successfully.",
    successHint: "Please keep this reference for future communication with support.",
    submitAnother: "Submit another report",
    invalidUrl: "The Kit ID in the URL is invalid. Please check the code printed next to the QR label.",
    enterValidKit: "Please enter a valid Kit ID before submitting a support request.",
    validKitRequired: "A valid Kit ID is required before submitting the report.",
    spamError: "We could not submit your request. Please try again.",
    requiredFields: "Please complete all required fields before submitting.",
    invalidEmail: "Please enter a valid email address.",
    shortDescription: "Please add a little more detail to the problem description.",
    fileTooLarge: "The attached file is too large. Please upload a file smaller than 15 MB.",
    endpointMissing: "The support form endpoint has not been configured yet. Update SUPPORT_FORM_ENDPOINT in app.js before publishing.",
    submitting: "Submitting your support request...",
    submitError: "We could not submit your request. Please check your connection and try again.",
    successStatus: "Thank you. Your support request has been submitted successfully.",
    kitIdPrefix: "Kit ID:",
    ticketPrefix: "Support Request:",
    submittingButton: "Submitting...",
  },
  fr: {
    languageLabel: "Langue",
    heroTitle: "Assistance au Programme d'education numerique",
    heroIntro: "Utilisez cette page pour signaler un probleme avec votre kit ou demander une assistance technique.",
    currentKit: "Kit actuel",
    kitIdentified: "Kit identifie",
    kitRequired: "Identification du kit requise",
    kitDetected: "Votre Kit ID a ete detecte et sera inclus automatiquement.",
    kitMissing: "Nous n'avons pas pu identifier votre kit automatiquement. Saisissez le Kit ID imprime pres du QR code.",
    reportIssue: "Signaler un probleme de kit",
    resources: "Guides et ressources",
    resourcesHint: "Lien vers les ressources bientot disponible.",
    formIntro: "Completez le formulaire ci-dessous. Votre Kit ID est inclus automatiquement pour aider l'equipe support.",
    contactInfo: "Coordonnees",
    institution: "Ecole ou institution",
    fullName: "Nom complet",
    email: "Adresse e-mail",
    phone: "Telephone ou WhatsApp",
    optional: "facultatif",
    country: "Pays",
    cityDistrict: "Ville ou district",
    issueDetails: "Details du probleme",
    component: "Composant concerne",
    selectComponent: "Selectionnez le composant concerne",
    otherComponent: "Si Autre, quel composant ?",
    issueCategory: "Categorie du probleme",
    description: "Description du probleme",
    troubleshooting: "Depannage deja essaye",
    submit: "Envoyer la demande",
    successTitle: "Merci. Votre demande d'assistance a ete envoyee avec succes.",
  },
  es: {
    languageLabel: "Idioma",
    heroTitle: "Soporte del Programa de Educacion Digital",
    heroIntro: "Use esta pagina para reportar un problema con su kit o solicitar asistencia tecnica.",
    currentKit: "Kit actual",
    kitIdentified: "Kit identificado",
    kitRequired: "Se requiere identificar el kit",
    kitDetected: "Su Kit ID fue detectado y se incluira automaticamente.",
    kitMissing: "No pudimos identificar el kit automaticamente. Ingrese el Kit ID impreso junto al codigo QR.",
    reportIssue: "Reportar un problema del kit",
    resources: "Guias y recursos",
    resourcesHint: "El enlace a materiales estara disponible pronto.",
    formIntro: "Complete el formulario. El Kit ID se incluye automaticamente para que soporte identifique el producto.",
    contactInfo: "Datos de contacto",
    institution: "Escuela o institucion",
    fullName: "Nombre completo",
    email: "Correo electronico",
    phone: "Telefono o WhatsApp",
    optional: "opcional",
    country: "Pais",
    cityDistrict: "Ciudad o distrito",
    issueDetails: "Detalle del problema",
    component: "Componente afectado",
    selectComponent: "Seleccione el componente afectado",
    otherComponent: "Si es Otro, cual?",
    issueCategory: "Categoria del problema",
    description: "Descripcion del problema",
    troubleshooting: "Pruebas realizadas",
    submit: "Enviar solicitud",
    successTitle: "Gracias. Su solicitud de soporte fue enviada correctamente.",
  },
  pt: {
    languageLabel: "Idioma",
    heroTitle: "Suporte do Programa de Educacao Digital",
    heroIntro: "Use esta pagina para relatar um problema com seu kit ou solicitar assistencia tecnica.",
    currentKit: "Kit atual",
    kitIdentified: "Kit identificado",
    kitRequired: "Identificacao do kit obrigatoria",
    kitDetected: "Seu Kit ID foi detectado e sera incluido automaticamente.",
    kitMissing: "Nao foi possivel identificar o kit automaticamente. Digite o Kit ID impresso ao lado do QR code.",
    reportIssue: "Relatar problema do kit",
    resources: "Guias e recursos",
    resourcesHint: "Link dos materiais em breve.",
    formIntro: "Preencha o formulario. O Kit ID sera incluido automaticamente para ajudar o suporte.",
    contactInfo: "Informacoes de contato",
    institution: "Escola ou instituicao",
    fullName: "Nome completo",
    email: "E-mail",
    phone: "Telefone ou WhatsApp",
    optional: "opcional",
    country: "Pais",
    cityDistrict: "Cidade ou distrito",
    issueDetails: "Detalhes do problema",
    component: "Componente afetado",
    selectComponent: "Selecione o componente afetado",
    otherComponent: "Se Outro, qual componente?",
    issueCategory: "Categoria do problema",
    description: "Descricao do problema",
    troubleshooting: "Testes realizados",
    submit: "Enviar solicitacao",
    successTitle: "Obrigado. Sua solicitacao de suporte foi enviada com sucesso.",
  },
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();

  configureResourcesAction();
  elements.pageUrlInput.value = window.location.href;
  configureLanguage();

  const params = new URLSearchParams(window.location.search);
  const kitId = params.get("id");
  applyKitId(kitId, { source: "url" });

  elements.applyKitIdButton.addEventListener("click", () => {
    applyKitId(elements.manualKitInput.value, { source: "manual" });
  });

  elements.manualKitInput.addEventListener("input", () => {
    const normalized = normalizeKitId(elements.manualKitInput.value);
    elements.manualKitInput.value = normalized;
    applyKitId(normalized, { source: "manual", quiet: true });
  });

  elements.componentSelect.addEventListener("change", handleComponentChange);
  elements.form.addEventListener("submit", handleSubmit);
  elements.submitAnotherButton.addEventListener("click", resetForAnotherReport);

  elements.form.addEventListener("input", () => {
    clearStatus();
    updateSubmitAvailability();
  });
}

function cacheElements() {
  elements.kitSummaryTitle = document.getElementById("kit-summary-title");
  elements.kitStatusMessage = document.getElementById("kit-status-message");
  elements.kitIdDisplay = document.getElementById("kit-id-display");
  elements.kitTypeDisplay = document.getElementById("kit-type-display");
  elements.manualKitEntry = document.getElementById("manual-kit-entry");
  elements.manualKitInput = document.getElementById("manual-kit-id");
  elements.applyKitIdButton = document.getElementById("apply-kit-id");
  elements.resourcesLink = document.getElementById("resources-link");
  elements.languageSelect = document.getElementById("language-select");
  elements.formStatus = document.getElementById("form-status");
  elements.form = document.getElementById("support-form");
  elements.kitIdInput = document.getElementById("kit-id-input");
  elements.kitTypeInput = document.getElementById("kit-type-input");
  elements.pageUrlInput = document.getElementById("page-url-input");
  elements.submittedAtInput = document.getElementById("submitted-at-input");
  elements.websiteInput = document.getElementById("website");
  elements.institutionInput = document.getElementById("institution");
  elements.fullNameInput = document.getElementById("full-name");
  elements.emailInput = document.getElementById("email");
  elements.phoneInput = document.getElementById("phone");
  elements.countryInput = document.getElementById("country");
  elements.cityDistrictInput = document.getElementById("city-district");
  elements.componentSelect = document.getElementById("component");
  elements.issueCategorySelect = document.getElementById("issue-category");
  elements.descriptionInput = document.getElementById("description");
  elements.troubleshootingInput = document.getElementById("troubleshooting");
  elements.otherComponentField = document.getElementById("other-component-field");
  elements.otherComponentInput = document.getElementById("other-component");
  elements.evidenceInput = document.getElementById("evidence");
  elements.submitButton = document.getElementById("submit-button");
  elements.successState = document.getElementById("success-state");
  elements.successKitId = document.getElementById("success-kit-id");
  elements.ticketReference = document.getElementById("ticket-reference");
  elements.submitAnotherButton = document.getElementById("submit-another");
}

function configureResourcesAction() {
  if (!RESOURCES_URL) {
    elements.resourcesLink.disabled = true;
    return;
  }

  elements.resourcesLink.disabled = false;
  elements.resourcesLink.addEventListener("click", () => {
    window.open(RESOURCES_URL, "_blank", "noopener");
  });
}

function configureLanguage() {
  const storedLanguage = window.localStorage.getItem("supportLanguage");
  const browserLanguage = (navigator.language || "").slice(0, 2).toLowerCase();
  const language = TRANSLATIONS[storedLanguage]
    ? storedLanguage
    : TRANSLATIONS[browserLanguage]
      ? browserLanguage
      : DEFAULT_LANGUAGE;

  setLanguage(language);
  elements.languageSelect.addEventListener("change", () => setLanguage(elements.languageSelect.value));
}

function setLanguage(language) {
  state.language = TRANSLATIONS[language] ? language : DEFAULT_LANGUAGE;
  elements.languageSelect.value = state.language;
  document.documentElement.lang = state.language;
  window.localStorage.setItem("supportLanguage", state.language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  populateComponents(state.kitType || "fallback");
  refreshKitCopy();
  updateSubmitText();
}

function t(key) {
  return TRANSLATIONS[state.language][key] || TRANSLATIONS.en[key] || key;
}

function applyKitId(value, options = {}) {
  const normalized = normalizeKitId(value);
  const isValid = KIT_ID_PATTERN.test(normalized);

  state.kitId = isValid ? normalized : "";
  state.kitType = isValid ? getKitType(normalized) : "";
  state.kitIsValid = isValid;

  elements.kitIdInput.value = state.kitId;
  elements.kitTypeInput.value = state.kitType;
  elements.kitIdDisplay.textContent = state.kitId || t("notDetected");
  elements.kitTypeDisplay.textContent = state.kitType || t("pendingIdentification");

  if (isValid) {
    elements.kitSummaryTitle.textContent = t("kitIdentified");
    elements.kitStatusMessage.textContent = t("kitDetected");
    elements.manualKitEntry.hidden = true;
    elements.manualKitInput.setAttribute("aria-invalid", "false");
    populateComponents(state.kitType);
  } else {
    elements.kitSummaryTitle.textContent = t("kitRequired");
    elements.kitStatusMessage.textContent = t("kitMissing");
    elements.manualKitEntry.hidden = false;
    populateComponents("fallback");

    if (options.source === "url" && value) {
      setStatus(t("invalidUrl"), "error");
    } else if (!options.quiet && !value) {
      setStatus(t("enterValidKit"), "error");
    }
  }

  updateSubmitAvailability();
}

function normalizeKitId(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

function getKitType(kitId) {
  return KIT_TYPES[kitId.slice(0, 2)] || "";
}

function populateComponents(kitType) {
  const currentValue = elements.componentSelect.value;
  const options = COMPONENTS_BY_KIT_TYPE[kitType] || COMPONENTS_BY_KIT_TYPE.fallback;

  elements.componentSelect.textContent = "";
  appendOption(elements.componentSelect, "", t("selectComponent"));
  options.forEach((component) => appendOption(elements.componentSelect, component, component));

  if (options.includes(currentValue)) {
    elements.componentSelect.value = currentValue;
  }

  handleComponentChange();
}

function refreshKitCopy() {
  elements.kitIdDisplay.textContent = state.kitId || t("notDetected");
  elements.kitTypeDisplay.textContent = state.kitType || t("pendingIdentification");
  elements.kitSummaryTitle.textContent = state.kitIsValid ? t("kitIdentified") : t("kitRequired");
  elements.kitStatusMessage.textContent = state.kitIsValid ? t("kitDetected") : t("kitMissing");
}

function appendOption(select, value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  select.appendChild(option);
}

function handleComponentChange() {
  const requiresOther = elements.componentSelect.value === "Other";
  elements.otherComponentField.hidden = !requiresOther;
  elements.otherComponentInput.required = requiresOther;
  if (!requiresOther) {
    elements.otherComponentInput.value = "";
    elements.otherComponentInput.removeAttribute("aria-invalid");
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  if (state.isSubmitting) return;

  trimTextInputs();
  elements.submittedAtInput.value = new Date().toISOString();

  const validationMessage = validateForm();
  if (validationMessage) {
    setStatus(validationMessage, "error");
    updateSubmitAvailability();
    return;
  }

  if (SUPPORT_FORM_ENDPOINT === "REPLACE_WITH_FINAL_ENDPOINT") {
    setStatus(t("endpointMissing"), "error");
    return;
  }

  state.isSubmitting = true;
  elements.submitButton.disabled = true;
  elements.submitButton.textContent = t("submittingButton");
  setStatus(t("submitting"), "info");

  try {
    const payload = createPayload();
    const response = await fetch(SUPPORT_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await parseJsonSafely(response);
    showSuccess(result);
  } catch (error) {
    setStatus(t("submitError"), "error");
    state.isSubmitting = false;
    elements.submitButton.textContent = t("submit");
    updateSubmitAvailability();
  }
}

function validateForm() {
  clearInvalidStates();

  if (!state.kitIsValid) {
    markInvalid(elements.manualKitInput);
    return t("validKitRequired");
  }

  if (elements.websiteInput.value.trim()) {
    return t("spamError");
  }

  const requiredFields = Array.from(elements.form.querySelectorAll("[required]"));
  const missingField = requiredFields.find((field) => {
    if (field.type === "checkbox") return !field.checked;
    return !field.value.trim();
  });

  if (missingField) {
    markInvalid(missingField);
    return t("requiredFields");
  }

  if (!elements.emailInput.validity.valid) {
    markInvalid(elements.emailInput);
    return t("invalidEmail");
  }

  if (elements.descriptionInput.value.trim().length < 20) {
    markInvalid(elements.descriptionInput);
    return t("shortDescription");
  }

  const file = elements.evidenceInput.files[0];
  if (file && file.size > MAX_FILE_SIZE_BYTES) {
    markInvalid(elements.evidenceInput);
    return t("fileTooLarge");
  }

  return "";
}

function createPayload() {
  return {
    kit_id: state.kitId,
    kit_type: state.kitType,
    institution: elements.institutionInput.value,
    full_name: elements.fullNameInput.value,
    email: elements.emailInput.value,
    phone: elements.phoneInput.value,
    country: elements.countryInput.value,
    city_district: elements.cityDistrictInput.value,
    component:
      elements.componentSelect.value === "Other"
        ? `Other: ${elements.otherComponentInput.value}`
        : elements.componentSelect.value,
    issue_category: elements.issueCategorySelect.value,
    description: elements.descriptionInput.value,
    troubleshooting: elements.troubleshootingInput.value,
    page_url: window.location.href,
    submitted_at: elements.submittedAtInput.value,
  };
}

function trimTextInputs() {
  const fields = elements.form.querySelectorAll("input[type='text'], input[type='email'], textarea");
  fields.forEach((field) => {
    field.value = field.value.trim();
  });
}

function clearInvalidStates() {
  elements.form.querySelectorAll("[aria-invalid='true']").forEach((field) => {
    field.removeAttribute("aria-invalid");
  });
}

function markInvalid(field) {
  field.setAttribute("aria-invalid", "true");
  field.focus({ preventScroll: false });
}

function updateSubmitAvailability() {
  elements.submitButton.disabled = state.isSubmitting || !state.kitIsValid;
}

function setStatus(message, type = "info") {
  elements.formStatus.textContent = message;
  elements.formStatus.className = "status-message";
  if (type === "error") elements.formStatus.classList.add("is-error");
  if (type === "success") elements.formStatus.classList.add("is-success");
}

function clearStatus() {
  elements.formStatus.textContent = "";
  elements.formStatus.className = "status-message";
}

async function parseJsonSafely(response) {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return {};
  return response.json();
}

function showSuccess(result = {}) {
  state.isSubmitting = false;
  elements.form.hidden = true;
  elements.successState.hidden = false;
  elements.successKitId.textContent = `${t("kitIdPrefix")} ${state.kitId}`;

  const ticketNumber = result.ticket_number || result.ticketNumber || result.reference;
  if (ticketNumber) {
    elements.ticketReference.hidden = false;
    elements.ticketReference.textContent = `${t("ticketPrefix")} ${ticketNumber}`;
  } else {
    elements.ticketReference.hidden = true;
    elements.ticketReference.textContent = "";
  }

  setStatus(t("successStatus"), "success");
}

function resetForAnotherReport() {
  elements.form.reset();
  elements.form.hidden = false;
  elements.successState.hidden = true;
  elements.ticketReference.hidden = true;
  elements.pageUrlInput.value = window.location.href;
  elements.countryInput.value = "Bhutan";
  updateSubmitText();
  handleComponentChange();
  clearStatus();
  updateSubmitAvailability();
}

function updateSubmitText() {
  if (!state.isSubmitting) {
    elements.submitButton.textContent = t("submit");
  }
}

async function loadKitRecord(kitId) {
  // Future API lookup: kit type, production batch, warranty status, or authorized public data.
  // Do not expose carton, school assignment, shipment, or private logistics data in the browser.
  return { kitId };
}
