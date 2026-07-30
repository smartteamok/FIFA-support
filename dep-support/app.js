"use strict";

const SUPPORT_FORM_ENDPOINT = "https://formspree.io/f/xeeydyyl";
const RESOURCES_URL = "";
const KIT_ID_PATTERN = /^(SR|SP)-\d{4}-[A-Z]-\d{6}$/;
const DEFAULT_LANGUAGE = "en";

const KIT_TYPES = {
  SR: "Robotics Kit",
  SP: "Physical Computing Kit",
};

const COMPONENT_IMAGE_BASE = "assets/components/";

const COMPONENT_IMAGES = {
  "Continuous Rotation Servo": "continuous-rotation-servo.png",
  "Caster Wheel": "caster-wheel.png",
  "Color Sensor Module": "color-sensor.png",
  "DC Encoder Motor": "dc-encoder-motor.png",
  "Joystick Module": "joystick-module.png",
  "LCD Module": "lcd-module.png",
  "Line Tracking Sensor": "line-tracking-sensor.png",
  "Mechanical Chassis Kit": "mechanical-chassis-kit.png",
  Tool: "tool.png",
  "Potentiometer Module": "potentiometer.png",
  "Power Adapter / Charger": "power-adapter.png",
  "Soil Moisture Sensor": "soil-moisture-sensor.png",
  "Ultrasonic Distance Sensor": "ultrasonic-distance-sensor.png",
  Wheels: "wheel.png",
  "Accessory & Screw Set": "accessory-screw-set.png",
  "Jumper Wires (Female-to-Female)": "jumper-female-female.png",
  "Micro:bit Expansion Shield": "microbit-expansion-shield.png",
  Screw: "screw.png",
  "180° Servomotor": "180-servomotor.png",
  "RGB LED Strip": "rgb-led-strip.png",
  "Micro:bit": "microbit.png",
  "Plastic Ball": "plastic-ball.png",
  "Micro USB Cable": "micro-usb-cable.png",
  Batteries: "batteries.png",
  "Battery Holder": "battery-holder.png",
  Wearable: "wearable.png",
  "Alligator Clip Wires": "alligator-clip-wires.png",
  "Jumper Wires (Male-to-Male)": "jumper-male-male.png",
  "Jumper Wires (Male-to-Female)": "jumper-male-female.png",
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
    "Wheels",
    "Screw",
    "Accessory & Screw Set",
    "Jumper Wires (Female-to-Female)",
    "Micro:bit Expansion Shield",
    "Other",
  ],
  "Physical Computing Kit": [
    "180° Servomotor",
    "RGB LED Strip",
    "Micro:bit",
    "Plastic Ball",
    "Micro USB Cable",
    "Batteries",
    "Battery Holder",
    "Wearable",
    "Alligator Clip Wires",
    "Jumper Wires (Male-to-Male)",
    "Jumper Wires (Male-to-Female)",
    "Other",
  ],
  fallback: [
    "Smart Hub",
    "Controller Board",
    "Sensor",
    "Actuator",
    "Cable",
    "Power Supply",
    "Other",
  ],
};

const ISSUE_CATEGORIES = [
  "Missing component",
  "Damaged component",
  "Component not working",
  "Connection problem",
  "Programming or firmware issue",
  "Power problem",
  "Incorrect component",
  "Documentation question",
  "Other",
];

const COMPONENT_LABELS = {
  en: {},
  fr: {
    "Continuous Rotation Servo": "Servomoteur a rotation continue",
    "Caster Wheel": "Roue folle",
    "Color Sensor Module": "Module capteur de couleur",
    "DC Encoder Motor": "Moteur CC avec encodeur",
    "Joystick Module": "Module joystick",
    "LCD Module": "Module LCD",
    "Line Tracking Sensor": "Capteur suiveur de ligne",
    "Mechanical Chassis Kit": "Kit chassis mecanique",
    Tool: "Outil",
    "Potentiometer Module": "Module potentiometre",
    "Power Adapter / Charger": "Adaptateur secteur / chargeur",
    "Soil Moisture Sensor": "Capteur d'humidite du sol",
    "Ultrasonic Distance Sensor": "Capteur de distance ultrasonique",
    Wheels: "Roues",
    Screw: "Vis",
    "Accessory & Screw Set": "Jeu d'accessoires et de vis",
    "Jumper Wires (Female-to-Female)": "Fils jumper femelle-femelle",
    "Micro:bit Expansion Shield": "Carte d'extension micro:bit",
    "180° Servomotor": "Servomoteur 180°",
    "RGB LED Strip": "Ruban LED RVB",
    "Micro:bit": "Micro:bit",
    "Plastic Ball": "Ballon en plastique",
    "Micro USB Cable": "Cable Micro USB",
    Batteries: "Piles",
    "Battery Holder": "Support de piles",
    Wearable: "Support portable",
    "Alligator Clip Wires": "Cables a pinces crocodile",
    "Jumper Wires (Male-to-Male)": "Fils jumper male-male",
    "Jumper Wires (Male-to-Female)": "Fils jumper male-femelle",
    Other: "Autre",
  },
  es: {
    "Continuous Rotation Servo": "Servo de rotacion continua",
    "Caster Wheel": "Rueda loca",
    "Color Sensor Module": "Modulo sensor de color",
    "DC Encoder Motor": "Motor DC con encoder",
    "Joystick Module": "Modulo joystick",
    "LCD Module": "Modulo LCD",
    "Line Tracking Sensor": "Sensor seguidor de linea",
    "Mechanical Chassis Kit": "Kit de chasis mecanico",
    Tool: "Herramienta",
    "Potentiometer Module": "Modulo potenciometro",
    "Power Adapter / Charger": "Adaptador / cargador",
    "Soil Moisture Sensor": "Sensor de humedad del suelo",
    "Ultrasonic Distance Sensor": "Sensor ultrasonico de distancia",
    Wheels: "Ruedas",
    Screw: "Tornillos",
    "Accessory & Screw Set": "Set de accesorios y tornillos",
    "Jumper Wires (Female-to-Female)": "Cables jumper hembra-hembra",
    "Micro:bit Expansion Shield": "Shield de expansion micro:bit",
    "180° Servomotor": "Servomotor 180°",
    "RGB LED Strip": "Tira LED RGB",
    "Micro:bit": "Micro:bit",
    "Plastic Ball": "Pelota plastica",
    "Micro USB Cable": "Cable Micro USB",
    Batteries: "Baterias",
    "Battery Holder": "Portabaterias",
    Wearable: "Soporte wearable",
    "Alligator Clip Wires": "Cables cocodrilo",
    "Jumper Wires (Male-to-Male)": "Cables jumper macho-macho",
    "Jumper Wires (Male-to-Female)": "Cables jumper macho-hembra",
    Other: "Otro",
  },
  pt: {
    "Continuous Rotation Servo": "Servo de rotacao continua",
    "Caster Wheel": "Roda boba",
    "Color Sensor Module": "Modulo sensor de cor",
    "DC Encoder Motor": "Motor DC com encoder",
    "Joystick Module": "Modulo joystick",
    "LCD Module": "Modulo LCD",
    "Line Tracking Sensor": "Sensor seguidor de linha",
    "Mechanical Chassis Kit": "Kit de chassi mecanico",
    Tool: "Ferramenta",
    "Potentiometer Module": "Modulo potenciometro",
    "Power Adapter / Charger": "Adaptador / carregador",
    "Soil Moisture Sensor": "Sensor de umidade do solo",
    "Ultrasonic Distance Sensor": "Sensor ultrassonico de distancia",
    Wheels: "Rodas",
    Screw: "Parafusos",
    "Accessory & Screw Set": "Conjunto de acessorios e parafusos",
    "Jumper Wires (Female-to-Female)": "Cabos jumper femea-femea",
    "Micro:bit Expansion Shield": "Shield de expansao micro:bit",
    "180° Servomotor": "Servomotor 180°",
    "RGB LED Strip": "Fita LED RGB",
    "Micro:bit": "Micro:bit",
    "Plastic Ball": "Bola plastica",
    "Micro USB Cable": "Cabo Micro USB",
    Batteries: "Baterias",
    "Battery Holder": "Suporte de baterias",
    Wearable: "Suporte vestivel",
    "Alligator Clip Wires": "Cabos jacare",
    "Jumper Wires (Male-to-Male)": "Cabos jumper macho-macho",
    "Jumper Wires (Male-to-Female)": "Cabos jumper macho-femea",
    Other: "Outro",
  },
};

const ISSUE_CATEGORY_LABELS = {
  en: {},
  fr: {
    "Missing component": "Composant manquant",
    "Damaged component": "Composant endommage",
    "Component not working": "Composant ne fonctionne pas",
    "Connection problem": "Probleme de connexion",
    "Programming or firmware issue": "Probleme de programmation ou firmware",
    "Power problem": "Probleme d'alimentation",
    "Incorrect component": "Composant incorrect",
    "Documentation question": "Question sur la documentation",
    Other: "Autre",
  },
  es: {
    "Missing component": "Componente faltante",
    "Damaged component": "Componente danado",
    "Component not working": "Componente no funciona",
    "Connection problem": "Problema de conexion",
    "Programming or firmware issue": "Problema de programacion o firmware",
    "Power problem": "Problema de energia",
    "Incorrect component": "Componente incorrecto",
    "Documentation question": "Consulta sobre documentacion",
    Other: "Otro",
  },
  pt: {
    "Missing component": "Componente faltando",
    "Damaged component": "Componente danificado",
    "Component not working": "Componente nao funciona",
    "Connection problem": "Problema de conexao",
    "Programming or firmware issue": "Problema de programacao ou firmware",
    "Power problem": "Problema de energia",
    "Incorrect component": "Componente incorreto",
    "Documentation question": "Pergunta sobre documentacao",
    Other: "Outro",
  },
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
    pageTitle: "Digital Education Programme support",
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
    manualKitHelp: "Format: SR-YYMM-A-000001 for Robotics or SP-YYMM-A-000001 for Physical Computing.",
    useKitId: "Use Kit ID",
    reportIssue: "Report a Kit Issue",
    reportIssueHint: "Send a support request with the Kit ID included automatically.",
    resources: "Access Guides and Resources",
    resourcesHint: "Explore module guides, connections and first checks.",
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
    componentHelp: "Tap the component that has the problem.",
    otherComponent: "If Other, which component?",
    issueCategory: "Issue Category",
    selectIssueCategory: "Select an issue category",
    description: "Problem Description",
    descriptionHelp: "Optional. Add any details that may help support understand the issue.",
    troubleshooting: "Previous Troubleshooting",
    troubleshootingPlaceholder: "For example: checked the cables, restarted the board, tried another port, or tested the component in another kit.",
    attachmentNote: "If possible, describe the issue. Photos may be requested by support later.",
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
    endpointMissing: "The Formspree endpoint has not been configured yet. Update SUPPORT_FORM_ENDPOINT in app.js before publishing.",
    submitting: "Submitting your support request...",
    submitError: "We could not submit your request. Please check your connection and try again.",
    successStatus: "Thank you. Your support request has been submitted successfully.",
    confirmationOpened: "Your request was submitted. The confirmation opened in a new window.",
    confirmationBlocked: "Your request was submitted. Open the confirmation window.",
    kitIdPrefix: "Kit ID:",
    ticketPrefix: "Support Request:",
    submittingButton: "Submitting...",
    footerService: "FIFA Foundation & Raco Systems Corp. support service.",
    contact: "Contact",
    privacy: "Privacy",
  },
  fr: {
    skipLink: "Aller au formulaire de support",
    pageTitle: "Support du Programme d'education numerique",
    projectLabel: "Support du programme",
    languageLabel: "Langue",
    heroTitle: "Assistance au Programme d'education numerique",
    heroIntro: "Utilisez cette page pour signaler un probleme avec votre kit ou demander une assistance technique.",
    currentKit: "Kit actuel",
    kitIdentified: "Kit identifie",
    kitRequired: "Identification du kit requise",
    kitDetected: "Votre Kit ID a ete detecte et sera inclus automatiquement.",
    kitMissing: "Nous n'avons pas pu identifier votre kit automatiquement. Saisissez le Kit ID imprime pres du QR code.",
    kitId: "Kit ID",
    kitType: "Type de kit",
    notDetected: "Non detecte",
    pendingIdentification: "Identification en attente",
    manualKitLabel: "Kit ID imprime pres du QR code",
    manualKitHelp: "Format : SR-YYMM-A-000001 pour Robotique ou SP-YYMM-A-000001 pour Informatique physique.",
    useKitId: "Utiliser le Kit ID",
    reportIssue: "Signaler un probleme de kit",
    reportIssueHint: "Envoyez une demande avec le Kit ID inclus automatiquement.",
    resources: "Guides et ressources",
    resourcesHint: "Explorez les guides des modules et les premiers controles.",
    supportRequest: "Demande de support",
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
    componentHelp: "Touchez le composant qui pose probleme.",
    otherComponent: "Si Autre, quel composant ?",
    issueCategory: "Categorie du probleme",
    selectIssueCategory: "Selectionnez une categorie",
    description: "Description du probleme",
    descriptionHelp: "Facultatif. Ajoutez les details utiles pour aider le support a comprendre le probleme.",
    troubleshooting: "Depannage deja essaye",
    troubleshootingPlaceholder: "Par exemple : cables verifies, carte redemarree, autre port essaye ou composant teste dans un autre kit.",
    attachmentNote: "Si possible, decrivez le probleme. Des photos pourront etre demandees plus tard par le support.",
    evidence: "Joindre des photos ou une courte video",
    evidenceHelp: "Evitez les informations personnelles sur les eleves. Taille maximale : 15 MB.",
    consent: "Je confirme que les informations fournies sont exactes et peuvent etre utilisees pour traiter cette demande.",
    submit: "Envoyer la demande",
    requestSubmitted: "Demande envoyee",
    successTitle: "Merci. Votre demande d'assistance a ete envoyee avec succes.",
    successHint: "Conservez cette reference pour toute communication avec le support.",
    submitAnother: "Envoyer un autre rapport",
    invalidUrl: "Le Kit ID dans l'URL est invalide. Verifiez le code imprime pres du QR.",
    enterValidKit: "Saisissez un Kit ID valide avant d'envoyer la demande.",
    validKitRequired: "Un Kit ID valide est requis avant l'envoi.",
    spamError: "Nous n'avons pas pu envoyer la demande. Reessayez.",
    requiredFields: "Completez tous les champs obligatoires avant l'envoi.",
    invalidEmail: "Saisissez une adresse e-mail valide.",
    endpointMissing: "L'endpoint Formspree n'est pas encore configure.",
    submitting: "Envoi de votre demande...",
    submitError: "Nous n'avons pas pu envoyer la demande. Verifiez la connexion et reessayez.",
    successStatus: "Merci. Votre demande d'assistance a ete envoyee avec succes.",
    confirmationOpened: "Votre demande a ete envoyee. La confirmation s'est ouverte dans une nouvelle fenetre.",
    confirmationBlocked: "Votre demande a ete envoyee. Ouvrir la fenetre de confirmation.",
    kitIdPrefix: "Kit ID :",
    ticketPrefix: "Demande de support :",
    submittingButton: "Envoi...",
    footerService: "Service de support FIFA Foundation & Raco Systems Corp.",
    contact: "Contact",
    privacy: "Confidentialite",
  },
  es: {
    skipLink: "Saltar al formulario de soporte",
    pageTitle: "Soporte del Programa de Educacion Digital",
    projectLabel: "Soporte del programa",
    languageLabel: "Idioma",
    heroTitle: "Soporte del Programa de Educacion Digital",
    heroIntro: "Use esta pagina para reportar un problema con su kit o solicitar asistencia tecnica.",
    currentKit: "Kit actual",
    kitIdentified: "Kit identificado",
    kitRequired: "Se requiere identificar el kit",
    kitDetected: "Su Kit ID fue detectado y se incluira automaticamente.",
    kitMissing: "No pudimos identificar el kit automaticamente. Ingrese el Kit ID impreso junto al codigo QR.",
    kitId: "Kit ID",
    kitType: "Tipo de kit",
    notDetected: "No detectado",
    pendingIdentification: "Identificacion pendiente",
    manualKitLabel: "Kit ID impreso junto al codigo QR",
    manualKitHelp: "Formato: SR-YYMM-A-000001 para Robotica o SP-YYMM-A-000001 para Computacion Fisica.",
    useKitId: "Usar Kit ID",
    reportIssue: "Reportar un problema del kit",
    reportIssueHint: "Enviar una solicitud con el Kit ID incluido automaticamente.",
    resources: "Guias y recursos",
    resourcesHint: "Explore las guias de modulos y las primeras verificaciones.",
    supportRequest: "Solicitud de soporte",
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
    componentHelp: "Toque el componente que tiene el problema.",
    otherComponent: "Si es Otro, cual?",
    issueCategory: "Categoria del problema",
    selectIssueCategory: "Seleccione una categoria",
    description: "Descripcion del problema",
    descriptionHelp: "Opcional. Agregue cualquier detalle que ayude a soporte a entender el problema.",
    troubleshooting: "Pruebas realizadas",
    troubleshootingPlaceholder: "Por ejemplo: revise cables, reinicie la placa, probe otro puerto o testee el componente en otro kit.",
    attachmentNote: "Si es posible, describa el problema. Soporte podra solicitar fotos mas adelante.",
    evidence: "Adjuntar fotos o video corto",
    evidenceHelp: "Evite incluir informacion personal de estudiantes. Tamano maximo: 15 MB.",
    consent: "Confirmo que la informacion enviada es correcta y puede usarse para procesar esta solicitud.",
    submit: "Enviar solicitud",
    requestSubmitted: "Solicitud enviada",
    successTitle: "Gracias. Su solicitud de soporte fue enviada correctamente.",
    successHint: "Conserve esta referencia para futuras comunicaciones con soporte.",
    submitAnother: "Enviar otro reporte",
    invalidUrl: "El Kit ID de la URL no es valido. Revise el codigo impreso junto al QR.",
    enterValidKit: "Ingrese un Kit ID valido antes de enviar la solicitud.",
    validKitRequired: "Se requiere un Kit ID valido antes de enviar el reporte.",
    spamError: "No pudimos enviar la solicitud. Intente nuevamente.",
    requiredFields: "Complete todos los campos obligatorios antes de enviar.",
    invalidEmail: "Ingrese un correo electronico valido.",
    endpointMissing: "El endpoint de Formspree todavia no esta configurado.",
    submitting: "Enviando la solicitud...",
    submitError: "No pudimos enviar la solicitud. Revise la conexion e intente nuevamente.",
    successStatus: "Gracias. Su solicitud de soporte fue enviada correctamente.",
    confirmationOpened: "La solicitud fue enviada. La confirmacion se abrio en una nueva ventana.",
    confirmationBlocked: "La solicitud fue enviada. Abra la ventana de confirmacion.",
    kitIdPrefix: "Kit ID:",
    ticketPrefix: "Solicitud de soporte:",
    submittingButton: "Enviando...",
    footerService: "Servicio de soporte de FIFA Foundation & Raco Systems Corp.",
    contact: "Contacto",
    privacy: "Privacidad",
  },
  pt: {
    skipLink: "Ir para o formulario de suporte",
    pageTitle: "Suporte do Programa de Educacao Digital",
    projectLabel: "Suporte do programa",
    languageLabel: "Idioma",
    heroTitle: "Suporte do Programa de Educacao Digital",
    heroIntro: "Use esta pagina para relatar um problema com seu kit ou solicitar assistencia tecnica.",
    currentKit: "Kit atual",
    kitIdentified: "Kit identificado",
    kitRequired: "Identificacao do kit obrigatoria",
    kitDetected: "Seu Kit ID foi detectado e sera incluido automaticamente.",
    kitMissing: "Nao foi possivel identificar o kit automaticamente. Digite o Kit ID impresso ao lado do QR code.",
    kitId: "Kit ID",
    kitType: "Tipo de kit",
    notDetected: "Nao detectado",
    pendingIdentification: "Identificacao pendente",
    manualKitLabel: "Kit ID impresso ao lado do QR code",
    manualKitHelp: "Formato: SR-YYMM-A-000001 para Robotica ou SP-YYMM-A-000001 para Computacao Fisica.",
    useKitId: "Usar Kit ID",
    reportIssue: "Relatar problema do kit",
    reportIssueHint: "Enviar uma solicitacao com o Kit ID incluido automaticamente.",
    resources: "Guias e recursos",
    resourcesHint: "Explore os guias dos modulos e as primeiras verificacoes.",
    supportRequest: "Solicitacao de suporte",
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
    componentHelp: "Toque o componente com o problema.",
    otherComponent: "Se Outro, qual componente?",
    issueCategory: "Categoria do problema",
    selectIssueCategory: "Selecione uma categoria",
    description: "Descricao do problema",
    descriptionHelp: "Opcional. Adicione detalhes que ajudem o suporte a entender o problema.",
    troubleshooting: "Testes realizados",
    troubleshootingPlaceholder: "Por exemplo: verificou cabos, reiniciou a placa, testou outra porta ou testou o componente em outro kit.",
    attachmentNote: "Se possivel, descreva o problema. Fotos poderao ser solicitadas pelo suporte mais tarde.",
    evidence: "Anexar fotos ou video curto",
    evidenceHelp: "Evite incluir informacoes pessoais de estudantes. Tamanho maximo: 15 MB.",
    consent: "Confirmo que as informacoes enviadas sao corretas e podem ser usadas para processar esta solicitacao.",
    submit: "Enviar solicitacao",
    requestSubmitted: "Solicitacao enviada",
    successTitle: "Obrigado. Sua solicitacao de suporte foi enviada com sucesso.",
    successHint: "Guarde esta referencia para comunicacoes futuras com o suporte.",
    submitAnother: "Enviar outro relatorio",
    invalidUrl: "O Kit ID na URL e invalido. Verifique o codigo impresso ao lado do QR.",
    enterValidKit: "Digite um Kit ID valido antes de enviar a solicitacao.",
    validKitRequired: "Um Kit ID valido e obrigatorio antes do envio.",
    spamError: "Nao foi possivel enviar a solicitacao. Tente novamente.",
    requiredFields: "Preencha todos os campos obrigatorios antes de enviar.",
    invalidEmail: "Digite um e-mail valido.",
    endpointMissing: "O endpoint do Formspree ainda nao foi configurado.",
    submitting: "Enviando sua solicitacao...",
    submitError: "Nao foi possivel enviar a solicitacao. Verifique a conexao e tente novamente.",
    successStatus: "Obrigado. Sua solicitacao de suporte foi enviada com sucesso.",
    confirmationOpened: "A solicitacao foi enviada. A confirmacao abriu em uma nova janela.",
    confirmationBlocked: "A solicitacao foi enviada. Abra a janela de confirmacao.",
    kitIdPrefix: "Kit ID:",
    ticketPrefix: "Solicitacao de suporte:",
    submittingButton: "Enviando...",
    footerService: "Servico de suporte FIFA Foundation & Raco Systems Corp.",
    contact: "Contato",
    privacy: "Privacidade",
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
  elements.componentPicker = document.getElementById("component-picker");
  elements.issueCategorySelect = document.getElementById("issue-category");
  elements.descriptionInput = document.getElementById("description");
  elements.troubleshootingInput = document.getElementById("troubleshooting");
  elements.otherComponentField = document.getElementById("other-component-field");
  elements.otherComponentInput = document.getElementById("other-component");
  elements.submitButton = document.getElementById("submit-button");
}

function configureResourcesAction() {
  if (!RESOURCES_URL) return;

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
  document.title = t("pageTitle");
  window.localStorage.setItem("supportLanguage", state.language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  populateIssueCategories();
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
  options.forEach((component) => appendOption(elements.componentSelect, component, labelComponent(component)));

  const selectedValue = options.includes(currentValue) ? currentValue : "";
  elements.componentSelect.value = selectedValue;
  renderComponentPicker(options, selectedValue);
  handleComponentChange();
}

function renderComponentPicker(options, selectedValue) {
  elements.componentPicker.textContent = "";

  options.forEach((component) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "component-option";
    button.dataset.value = component;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", component === selectedValue ? "true" : "false");
    if (component === selectedValue) {
      button.classList.add("is-selected");
    }

    const imageFile = COMPONENT_IMAGES[component];
    if (imageFile) {
      const image = document.createElement("img");
      image.src = `${COMPONENT_IMAGE_BASE}${imageFile}`;
      image.alt = "";
      image.loading = "lazy";
      button.appendChild(image);
    } else {
      const placeholder = document.createElement("span");
      placeholder.className = "component-option-placeholder";
      if (component === "Other") {
        placeholder.classList.add("is-other");
      }
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.textContent = component === "Other" ? "?" : labelComponent(component).slice(0, 1).toUpperCase();
      button.appendChild(placeholder);
    }

    const label = document.createElement("span");
    label.className = "component-option-label";
    label.textContent = labelComponent(component);
    button.appendChild(label);

    button.addEventListener("click", () => selectComponent(component));
    elements.componentPicker.appendChild(button);
  });
}

function selectComponent(component) {
  elements.componentSelect.value = component;
  elements.componentSelect.removeAttribute("aria-invalid");
  elements.componentPicker.classList.remove("is-invalid");

  elements.componentPicker.querySelectorAll(".component-option").forEach((option) => {
    const isSelected = option.dataset.value === component;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", isSelected ? "true" : "false");
  });

  handleComponentChange();
  clearStatus();
  updateSubmitAvailability();
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

function populateIssueCategories() {
  const currentValue = elements.issueCategorySelect.value;
  elements.issueCategorySelect.textContent = "";
  appendOption(elements.issueCategorySelect, "", t("selectIssueCategory"));
  ISSUE_CATEGORIES.forEach((category) => {
    appendOption(elements.issueCategorySelect, category, labelIssueCategory(category));
  });
  elements.issueCategorySelect.value = ISSUE_CATEGORIES.includes(currentValue) ? currentValue : "";
}

function labelComponent(component) {
  return COMPONENT_LABELS[state.language]?.[component] || component;
}

function labelIssueCategory(category) {
  return ISSUE_CATEGORY_LABELS[state.language]?.[category] || category;
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

  if (SUPPORT_FORM_ENDPOINT === "REPLACE_WITH_FORMSPREE_ENDPOINT") {
    setStatus(t("endpointMissing"), "error");
    return;
  }

  state.isSubmitting = true;
  elements.submitButton.disabled = true;
  elements.submitButton.textContent = t("submittingButton");
  setStatus(t("submitting"), "info");
  const confirmationWindow = window.open("success/?pending=1", "_blank");

  try {
    const payload = createSubmissionFormData();
    const response = await fetch(SUPPORT_FORM_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: payload,
    });

    if (!response.ok) {
      const errorMessage = await parseFormspreeError(response);
      throw new Error(errorMessage || `Request failed with status ${response.status}`);
    }

    const result = await parseJsonSafely(response);
    showSuccess(result, confirmationWindow);
  } catch (error) {
    if (confirmationWindow && !confirmationWindow.closed) {
      confirmationWindow.close();
    }
    setStatus(error.message || t("submitError"), "error");
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

  if (!elements.componentSelect.value) {
    elements.componentPicker.classList.add("is-invalid");
    const firstOption = elements.componentPicker.querySelector(".component-option");
    if (firstOption) firstOption.focus();
    return t("requiredFields");
  }

  const requiredFields = Array.from(elements.form.querySelectorAll("[required]")).filter(
    (field) => field !== elements.componentSelect
  );
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

  return "";
}

function createSubmissionFormData() {
  const payload = {
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
    language: state.language,
    user_agent: window.navigator.userAgent,
    website: elements.websiteInput.value,
  };

  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, String(value ?? ""));
  });

  return formData;
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
  elements.componentPicker.classList.remove("is-invalid");
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

async function parseFormspreeError(response) {
  const result = await parseJsonSafely(response);
  if (!Array.isArray(result.errors) || !result.errors.length) return t("submitError");

  return result.errors
    .map((error) => error.message || error.code)
    .filter(Boolean)
    .join(" ");
}

function showSuccess(result = {}, confirmationWindow = null) {
  state.isSubmitting = false;
  const ticketNumber = result.ticket_number || result.ticketNumber || result.reference;
  const confirmationUrl = buildSuccessUrl(ticketNumber);

  if (confirmationWindow && !confirmationWindow.closed) {
    confirmationWindow.location.replace(confirmationUrl);
    setStatus(t("confirmationOpened"), "success");
  } else {
    setConfirmationFallback(confirmationUrl);
  }

  elements.submitButton.textContent = t("submit");
  elements.submitButton.disabled = true;
}

function buildSuccessUrl(ticketNumber = "") {
  const params = new URLSearchParams({
    id: state.kitId,
    type: state.kitType,
    lang: state.language,
  });
  if (ticketNumber) params.set("ref", ticketNumber);
  return `success/?${params.toString()}`;
}

function setConfirmationFallback(url) {
  elements.formStatus.textContent = "";
  elements.formStatus.className = "status-message is-success";

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = t("confirmationBlocked");
  elements.formStatus.appendChild(link);
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
