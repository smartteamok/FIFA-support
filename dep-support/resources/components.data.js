"use strict";

/**
 * The 29 kit components, shared by the listing and the module detail page.
 *
 * formName is the English label the support form uses to identify a component,
 * so a guide can deep-link to the form with the component preselected.
 * Thirteen components have a full guide in modules.data.js; the rest are
 * identification cards with a replacement request, which is what the source
 * material actually supports.
 */

/**
 * Public base path of the deployment. The printed kit QR codes point here, so
 * URLs are built from this constant instead of relative paths: the listing and
 * the detail page sit at different depths and share the same data.
 */
const SITE_BASE = "/dep-support/";

const COMPONENTS = [
  { key: "microbitExpansionShield", kit: "robotics", image: "microbit-expansion-shield.png", role: "controller", formName: "Micro:bit Expansion Shield" },
  { key: "potentiometerModule", kit: "robotics", image: "potentiometer.png", role: "control", formName: "Potentiometer Module" },
  { key: "colorSensorModule", kit: "robotics", image: "color-sensor.png", role: "sensor", formName: "Color Sensor Module" },
  { key: "soilMoistureSensor", kit: "robotics", image: "soil-moisture-sensor.png", role: "sensor", formName: "Soil Moisture Sensor" },
  { key: "continuousRotationServo", kit: "robotics", image: "continuous-rotation-servo.png", role: "actuator", formName: "Continuous Rotation Servo" },
  { key: "lcdModule", kit: "robotics", image: "lcd-module.png", role: "display", formName: "LCD Module" },
  { key: "joystickModule", kit: "robotics", image: "joystick-module.png", role: "control", formName: "Joystick Module" },
  { key: "ultrasonicDistanceSensor", kit: "robotics", image: "ultrasonic-distance-sensor.png", role: "sensor", formName: "Ultrasonic Distance Sensor" },
  { key: "dcEncoderMotors", kit: "robotics", image: "dc-encoder-motor.png", role: "motor", formName: "DC Encoder Motor" },
  { key: "lineTrackingSensor", kit: "robotics", image: "line-tracking-sensor.png", role: "sensor", formName: "Line Tracking Sensor" },
  { key: "powerAdapterCharger", kit: "robotics", image: "power-adapter.png", role: "power", formName: "Power Adapter / Charger" },
  { key: "mechanicalChassisKit", kit: "robotics", image: "mechanical-chassis-kit.png", role: "mechanical", formName: "Mechanical Chassis Kit" },
  { key: "wheels", kit: "robotics", image: "wheel.png", role: "mechanical", formName: "Wheels" },
  { key: "casterWheel", kit: "robotics", image: "caster-wheel.png", role: "mechanical", formName: "Caster Wheel" },
  { key: "tool", kit: "robotics", image: "tool.png", role: "accessory", formName: "Tool" },
  { key: "screw", kit: "robotics", image: "screw.png", role: "accessory", formName: "Screw" },
  { key: "accessoryScrewSet", kit: "robotics", image: "accessory-screw-set.png", role: "accessory", formName: "Accessory & Screw Set" },
  { key: "jumperWiresFemaleFemale", kit: "robotics", image: "jumper-female-female.png", role: "connection", formName: "Jumper Wires (Female-to-Female)" },
  { key: "servomotor180", kit: "physical", image: "180-servomotor.png", role: "actuator", formName: "180° Servomotor" },
  { key: "rgbLedStrip", kit: "physical", image: "rgb-led-strip.png", role: "display", formName: "RGB LED Strip" },
  { key: "microbit", kit: "physical", image: "microbit.png", role: "controller", formName: "Micro:bit" },
  { key: "plasticBall", kit: "physical", image: "plastic-ball.png", role: "activity", formName: "Plastic Ball" },
  { key: "microUsbCable", kit: "physical", image: "micro-usb-cable.png", role: "connection", formName: "Micro USB Cable" },
  { key: "batteries", kit: "physical", image: "batteries.png", role: "power", formName: "Batteries" },
  { key: "batteryHolder", kit: "physical", image: "battery-holder.png", role: "power", formName: "Battery Holder" },
  { key: "wearable", kit: "physical", image: "wearable.png", role: "mechanical", formName: "Wearable" },
  { key: "alligatorClipWires", kit: "physical", image: "alligator-clip-wires.png", role: "connection", formName: "Alligator Clip Wires" },
  { key: "jumperWiresMaleMale", kit: "physical", image: "jumper-male-male.png", role: "connection", formName: "Jumper Wires (Male-to-Male)" },
  { key: "jumperWiresMaleFemale", kit: "physical", image: "jumper-male-female.png", role: "connection", formName: "Jumper Wires (Male-to-Female)" },
];

const COMPONENT_NAMES = {
  en: {
    microbitExpansionShield: "Micro:bit Expansion Shield",
    potentiometerModule: "Potentiometer Module",
    colorSensorModule: "Color Sensor Module",
    soilMoistureSensor: "Soil Moisture Sensor",
    continuousRotationServo: "Continuous Rotation Servo",
    lcdModule: "LCD Module",
    joystickModule: "Joystick Module",
    ultrasonicDistanceSensor: "Ultrasonic Distance Sensor",
    dcEncoderMotors: "DC Encoder Motor",
    lineTrackingSensor: "Line Tracking Sensor",
    powerAdapterCharger: "Power Adapter / Charger",
    mechanicalChassisKit: "Mechanical Chassis Kit",
    wheels: "Wheels",
    casterWheel: "Caster Wheel",
    tool: "Tool",
    screw: "Screw",
    accessoryScrewSet: "Accessory & Screw Set",
    jumperWiresFemaleFemale: "Jumper Wires (Female-to-Female)",
    servomotor180: "180° Servomotor",
    rgbLedStrip: "RGB LED Strip",
    microbit: "Micro:bit V2",
    plasticBall: "Plastic Ball",
    microUsbCable: "Micro USB Cable",
    batteries: "Batteries",
    batteryHolder: "Battery Holder",
    wearable: "Wearable",
    alligatorClipWires: "Alligator Clip Wires",
    jumperWiresMaleMale: "Jumper Wires (Male-to-Male)",
    jumperWiresMaleFemale: "Jumper Wires (Male-to-Female)",
  },
  es: {
    microbitExpansionShield: "Placa de expansión micro:bit",
    potentiometerModule: "Módulo potenciómetro",
    colorSensorModule: "Módulo sensor de color",
    soilMoistureSensor: "Sensor de humedad del suelo",
    continuousRotationServo: "Servo de rotación continua",
    lcdModule: "Módulo LCD",
    joystickModule: "Módulo joystick",
    ultrasonicDistanceSensor: "Sensor ultrasónico de distancia",
    dcEncoderMotors: "Motor DC con encoder",
    lineTrackingSensor: "Sensor seguidor de línea",
    powerAdapterCharger: "Adaptador / cargador",
    mechanicalChassisKit: "Kit de chasis mecánico",
    wheels: "Ruedas",
    casterWheel: "Rueda loca",
    tool: "Herramienta",
    screw: "Tornillos",
    accessoryScrewSet: "Set de accesorios y tornillos",
    jumperWiresFemaleFemale: "Cables jumper hembra-hembra",
    servomotor180: "Servomotor 180°",
    rgbLedStrip: "Tira LED RGB",
    microbit: "Micro:bit V2",
    plasticBall: "Pelota plástica",
    microUsbCable: "Cable Micro USB",
    batteries: "Baterías",
    batteryHolder: "Portabaterías",
    wearable: "Soporte wearable",
    alligatorClipWires: "Cables cocodrilo",
    jumperWiresMaleMale: "Cables jumper macho-macho",
    jumperWiresMaleFemale: "Cables jumper macho-hembra",
  },
  fr: {
    microbitExpansionShield: "Carte d'extension micro:bit",
    potentiometerModule: "Module potentiomètre",
    colorSensorModule: "Module capteur de couleur",
    soilMoistureSensor: "Capteur d'humidité du sol",
    continuousRotationServo: "Servomoteur à rotation continue",
    lcdModule: "Module LCD",
    joystickModule: "Module joystick",
    ultrasonicDistanceSensor: "Capteur de distance ultrasonique",
    dcEncoderMotors: "Moteur CC avec encodeur",
    lineTrackingSensor: "Capteur suiveur de ligne",
    powerAdapterCharger: "Adaptateur secteur / chargeur",
    mechanicalChassisKit: "Kit châssis mécanique",
    wheels: "Roues",
    casterWheel: "Roue folle",
    tool: "Outil",
    screw: "Vis",
    accessoryScrewSet: "Jeu d'accessoires et de vis",
    jumperWiresFemaleFemale: "Fils jumper femelle-femelle",
    servomotor180: "Servomoteur 180°",
    rgbLedStrip: "Ruban LED RVB",
    microbit: "Micro:bit V2",
    plasticBall: "Ballon en plastique",
    microUsbCable: "Câble Micro USB",
    batteries: "Piles",
    batteryHolder: "Support de piles",
    wearable: "Support portable",
    alligatorClipWires: "Câbles à pinces crocodile",
    jumperWiresMaleMale: "Fils jumper mâle-mâle",
    jumperWiresMaleFemale: "Fils jumper mâle-femelle",
  },
  pt: {
    microbitExpansionShield: "Placa de expansão micro:bit",
    potentiometerModule: "Módulo potenciômetro",
    colorSensorModule: "Módulo sensor de cor",
    soilMoistureSensor: "Sensor de umidade do solo",
    continuousRotationServo: "Servo de rotação contínua",
    lcdModule: "Módulo LCD",
    joystickModule: "Módulo joystick",
    ultrasonicDistanceSensor: "Sensor ultrassônico de distância",
    dcEncoderMotors: "Motor DC com encoder",
    lineTrackingSensor: "Sensor seguidor de linha",
    powerAdapterCharger: "Adaptador / carregador",
    mechanicalChassisKit: "Kit de chassi mecânico",
    wheels: "Rodas",
    casterWheel: "Roda boba",
    tool: "Ferramenta",
    screw: "Parafusos",
    accessoryScrewSet: "Conjunto de acessórios e parafusos",
    jumperWiresFemaleFemale: "Cabos jumper fêmea-fêmea",
    servomotor180: "Servomotor 180°",
    rgbLedStrip: "Fita LED RGB",
    microbit: "Micro:bit V2",
    plasticBall: "Bola plástica",
    microUsbCable: "Cabo Micro USB",
    batteries: "Baterias",
    batteryHolder: "Suporte de baterias",
    wearable: "Suporte vestível",
    alligatorClipWires: "Cabos jacaré",
    jumperWiresMaleMale: "Cabos jumper macho-macho",
    jumperWiresMaleFemale: "Cabos jumper macho-fêmea",
  },
};

/**
 * One line per component without a full guide: what the part is and what it is
 * for. Deliberately short — these components have no tutorial in the source
 * material, so the card identifies the part and offers a replacement request.
 */
const COMPONENT_SUMMARY = {
  en: {
    mechanicalChassisKit: "Metal and plastic structure that carries the board, motors and wheels of the robot.",
    wheels: "Drive wheels that mount on the encoder motor shafts.",
    casterWheel: "Free-turning support wheel that keeps the chassis balanced.",
    tool: "Screwdriver for assembling and opening the chassis.",
    screw: "Spare screws for the chassis assembly.",
    accessoryScrewSet: "Screws, nuts and spacers for mounting modules on the chassis.",
    jumperWiresFemaleFemale: "Wires with a socket at both ends, for connecting modules to the expansion board.",
    microbit: "The programmable board that runs the program and reads the modules.",
    plasticBall: "Ball used in movement and interaction activities with the robot.",
    microUsbCable: "Cable for connecting the micro:bit to a computer and downloading programs.",
    batteries: "Batteries that power the micro:bit in the physical computing activities.",
    batteryHolder: "Holder that connects the batteries to the micro:bit.",
    wearable: "Support for wearing the micro:bit during body movement activities.",
    alligatorClipWires: "Wires with clips at both ends, for connecting to the micro:bit edge pins.",
    jumperWiresMaleMale: "Wires with a pin at both ends, for breadboard and module connections.",
    jumperWiresMaleFemale: "Wires with a pin at one end and a socket at the other, to adapt between connector types.",
  },
  es: {
    mechanicalChassisKit: "Estructura de metal y plástico que sostiene la placa, los motores y las ruedas del robot.",
    wheels: "Ruedas de tracción que se montan en los ejes de los motores con encoder.",
    casterWheel: "Rueda de apoyo que gira libre y mantiene el chasis equilibrado.",
    tool: "Destornillador para armar y abrir el chasis.",
    screw: "Tornillos de repuesto para el armado del chasis.",
    accessoryScrewSet: "Tornillos, tuercas y separadores para montar los módulos en el chasis.",
    jumperWiresFemaleFemale: "Cables con conector hembra en los dos extremos, para conectar módulos a la placa de expansión.",
    microbit: "La placa programable que ejecuta el programa y lee los módulos.",
    plasticBall: "Pelota que se usa en las actividades de movimiento e interacción con el robot.",
    microUsbCable: "Cable para conectar la micro:bit a la computadora y descargar programas.",
    batteries: "Baterías que alimentan la micro:bit en las actividades de computación física.",
    batteryHolder: "Portabaterías que conecta las baterías a la micro:bit.",
    wearable: "Soporte para llevar la micro:bit puesta en las actividades de movimiento corporal.",
    alligatorClipWires: "Cables con pinzas en los dos extremos, para conectar a los pines del borde de la micro:bit.",
    jumperWiresMaleMale: "Cables con pin en los dos extremos, para conexiones en protoboard y módulos.",
    jumperWiresMaleFemale: "Cables con pin en un extremo y conector hembra en el otro, para adaptar entre tipos de conector.",
  },
  fr: {
    mechanicalChassisKit: "Structure en métal et plastique qui porte la carte, les moteurs et les roues du robot.",
    wheels: "Roues motrices qui se montent sur les axes des moteurs à encodeur.",
    casterWheel: "Roue d'appui libre qui maintient l'équilibre du châssis.",
    tool: "Tournevis pour assembler et ouvrir le châssis.",
    screw: "Vis de rechange pour l'assemblage du châssis.",
    accessoryScrewSet: "Vis, écrous et entretoises pour fixer les modules sur le châssis.",
    jumperWiresFemaleFemale: "Fils avec un connecteur femelle aux deux extrémités, pour relier les modules à la carte d'extension.",
    microbit: "La carte programmable qui exécute le programme et lit les modules.",
    plasticBall: "Ballon utilisé dans les activités de mouvement et d'interaction avec le robot.",
    microUsbCable: "Câble pour relier la micro:bit à l'ordinateur et télécharger les programmes.",
    batteries: "Piles qui alimentent la micro:bit dans les activités d'informatique physique.",
    batteryHolder: "Support qui relie les piles à la micro:bit.",
    wearable: "Support pour porter la micro:bit lors des activités de mouvement corporel.",
    alligatorClipWires: "Fils avec des pinces aux deux extrémités, pour se connecter aux broches du bord de la micro:bit.",
    jumperWiresMaleMale: "Fils avec une broche aux deux extrémités, pour les connexions sur plaque d'essai et modules.",
    jumperWiresMaleFemale: "Fils avec une broche d'un côté et un connecteur femelle de l'autre, pour adapter les types de connecteur.",
  },
  pt: {
    mechanicalChassisKit: "Estrutura de metal e plástico que sustenta a placa, os motores e as rodas do robô.",
    wheels: "Rodas de tração que se montam nos eixos dos motores com encoder.",
    casterWheel: "Roda de apoio que gira livre e mantém o chassi equilibrado.",
    tool: "Chave de fenda para montar e abrir o chassi.",
    screw: "Parafusos de reposição para a montagem do chassi.",
    accessoryScrewSet: "Parafusos, porcas e espaçadores para fixar os módulos no chassi.",
    jumperWiresFemaleFemale: "Cabos com conector fêmea nas duas pontas, para ligar módulos à placa de expansão.",
    microbit: "A placa programável que executa o programa e lê os módulos.",
    plasticBall: "Bola usada nas atividades de movimento e interação com o robô.",
    microUsbCable: "Cabo para conectar a micro:bit ao computador e baixar programas.",
    batteries: "Baterias que alimentam a micro:bit nas atividades de computação física.",
    batteryHolder: "Suporte que conecta as baterias à micro:bit.",
    wearable: "Suporte para usar a micro:bit no corpo durante atividades de movimento.",
    alligatorClipWires: "Cabos com garras nas duas pontas, para conectar aos pinos da borda da micro:bit.",
    jumperWiresMaleMale: "Cabos com pino nas duas pontas, para conexões em protoboard e módulos.",
    jumperWiresMaleFemale: "Cabos com pino em uma ponta e conector fêmea na outra, para adaptar tipos de conector.",
  },
};

const KIT_LABELS = {
  en: { robotics: "Robotics Kit", physical: "Physical Computing Kit" },
  es: { robotics: "Kit de Robótica", physical: "Kit de Computación Física" },
  fr: { robotics: "Kit robotique", physical: "Kit informatique physique" },
  pt: { robotics: "Kit de Robótica", physical: "Kit de Computação Física" },
};

const ROLE_LABELS = {
  en: { controller: "Controller", sensor: "Sensor", actuator: "Actuator", display: "Display", control: "Control input", motor: "Motor", mechanical: "Mechanical part", power: "Power", accessory: "Accessory", connection: "Connection", activity: "Activity prop" },
  es: { controller: "Controlador", sensor: "Sensor", actuator: "Actuador", display: "Visualización", control: "Entrada de control", motor: "Motor", mechanical: "Pieza mecánica", power: "Alimentación", accessory: "Accesorio", connection: "Conexión", activity: "Elemento de actividad" },
  fr: { controller: "Contrôleur", sensor: "Capteur", actuator: "Actionneur", display: "Affichage", control: "Entrée de commande", motor: "Moteur", mechanical: "Pièce mécanique", power: "Alimentation", accessory: "Accessoire", connection: "Connexion", activity: "Accessoire d'activité" },
  pt: { controller: "Controlador", sensor: "Sensor", actuator: "Atuador", display: "Visualização", control: "Entrada de controle", motor: "Motor", mechanical: "Peça mecânica", power: "Alimentação", accessory: "Acessório", connection: "Conexão", activity: "Elemento de atividade" },
};

/** Copy shared by both pages. */
const SHARED_COPY = {
  en: {
    languageLabel: "Language",
    footerService: "FIFA Foundation & Raco Systems Corp. support service.",
    support: "Support",
    contact: "Contact",
    requestReplacement: "Request a replacement",
    includedInKit: "Included in the kit",
    translationDraft: "This translation is pending review. The English version is the reference text.",
  },
  es: {
    languageLabel: "Idioma",
    footerService: "Servicio de soporte de FIFA Foundation & Raco Systems Corp.",
    support: "Soporte",
    contact: "Contacto",
    requestReplacement: "Pedir un repuesto",
    includedInKit: "Incluido en el kit",
    translationDraft: "Esta traducción está pendiente de revisión. La versión en inglés es el texto de referencia.",
  },
  fr: {
    languageLabel: "Langue",
    footerService: "Service de support FIFA Foundation & Raco Systems Corp.",
    support: "Support",
    contact: "Contact",
    requestReplacement: "Demander un remplacement",
    includedInKit: "Inclus dans le kit",
    translationDraft: "Cette traduction est en attente de relecture. La version anglaise est le texte de référence.",
  },
  pt: {
    languageLabel: "Idioma",
    footerService: "Serviço de suporte FIFA Foundation & Raco Systems Corp.",
    support: "Suporte",
    contact: "Contato",
    requestReplacement: "Solicitar uma reposição",
    includedInKit: "Incluído no kit",
    translationDraft: "Esta tradução está pendente de revisão. A versão em inglês é o texto de referência.",
  },
};

const SUPPORTED_LANGUAGES = ["en", "fr", "es", "pt"];

/** Languages whose copy is translated but not yet signed off. */
const REVIEW_PENDING_LANGUAGES = ["fr", "pt"];

/** Shows or hides the "translation pending review" banner for the current language. */
function applyTranslationNotice(language) {
  const notice = document.getElementById("translation-notice");
  if (!notice) return;
  const pending = REVIEW_PENDING_LANGUAGES.includes(language);
  notice.hidden = !pending;
  notice.textContent = pending ? SHARED_COPY[language].translationDraft : "";
}

/** Reads ?lang=, then the stored language, falling back to the browser and then English. */
function resolveLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LANGUAGES.includes(requested)) return requested;
  const stored = window.localStorage.getItem("supportLanguage");
  if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(browser) ? browser : "en";
}

const assetUrl = (path) => `${SITE_BASE}assets/${path}`;
const guidesUrl = () => `${SITE_BASE}resources/`;
const moduleUrl = (slug) => `${SITE_BASE}resources/module/?m=${encodeURIComponent(slug)}`;

/** Photo of a component, from the shared COMPONENTS table. */
function componentImageUrl(componentKey) {
  const component = COMPONENTS.find((entry) => entry.key === componentKey);
  return component ? assetUrl(`components/${component.image}`) : "";
}

/**
 * Link to the support form with the component preselected, carrying the kit id
 * through when the current page already has one.
 */
function supportRequestUrl(formName) {
  const params = new URLSearchParams();
  const kitId = new URLSearchParams(window.location.search).get("id");
  if (kitId) params.set("id", kitId);
  if (formName) params.set("component", formName);
  const query = params.toString();
  return query ? `${SITE_BASE}?${query}` : SITE_BASE;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}
