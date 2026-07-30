const MODULES = [
  ["180° Metal Gear 9g Servo Motor", "robotics", "180-servomotor.png", "A position servo moves to a commanded angle for small mechanisms and moving parts.", ["micro:bit V2", "USB cable", "3 alligator clip cables", "3 male-to-male jumper wires", "180° servo motor"], "Press A for 0° and B for 90°.", "Connect the servo through the jumper and alligator clip cables before powering the activity.", ["Confirm the connector orientation.", "Check power and signal connections.", "Test one angle at a time."]],
  ["RGB LED Flexible Strip", "robotics", "rgb-led-strip.png", "An addressable LED strip uses a data signal to create coloured light for indicators and creative projects.", ["micro:bit V2", "USB cable", "3 alligator clip cables", "3 male-to-male jumper wires", "RGB LED strip"], "Press A for red and B for green.", "Connect the strip input to the correct signal direction and keep the input marking visible.", ["Use the input, not the output, for the first connection.", "Check ground and power before sending data.", "Start with a short, low-brightness test."]],
  ["Micro:bit Expansion Board", "robotics", "microbit-expansion-shield.png", "Connect sensors, servos and motors while learning the role of the battery, GPIO, charging and expansion ports.", ["micro:bit V2", "USB cable", "Micro:bit Expansion Board"], "Display a heart pattern, then power the board from its battery.", "Seat the micro:bit firmly in the socket. Remove the battery tab and switch on only after loading the program.", ["Align the micro:bit pins with the socket.", "Keep the power switch off while connecting parts.", "Red means charging; green indicates a full charge."]],
  ["Power Adapter", "robotics", "power-adapter.png", "Understand the adapter's role in charging the expansion board battery and its connector specifications.", ["Power adapter", "Micro:bit Expansion Board"], "Observe red while charging and green when fully charged.", "Use only the supplied adapter and insert the DC connector fully into the charging port.", ["Do not force the connector.", "Report damaged equipment.", "Keep charging equipment dry and supervised."]],
  ["Potentiometer Module", "physical", "potentiometer.png", "A potentiometer provides a variable analog value, making a physical control visible in a program.", ["micro:bit V2", "USB cable", "Expansion Board", "3 female-to-female jumper wires", "Potentiometer Module"], "Display the potentiometer reading on the LED matrix.", "Connect the module with three jumper wires and match the power, ground and signal labels.", ["Confirm power and ground.", "Turn the knob slowly through its range.", "If the value is fixed, recheck the signal wire and pin."]],
  ["Color Sensor Module", "physical", "color-sensor.png", "The sensor reads reflected light to distinguish colours for sorting, signals and interactive activities.", ["micro:bit V2", "USB cable", "Expansion Board", "3 female-to-female jumper wires", "Color Sensor Module"], "Display R for red, G for green and B for blue.", "Connect the sensor and hold it approximately 1 cm above the surface being tested.", ["Reduce strong ambient light.", "Keep a consistent height of about 1 cm.", "Test clear, solid colour surfaces first."]],
  ["Soil Moisture Sensor Module", "physical", "soil-moisture-sensor.png", "Measure the electrical response of soil to compare dry and wet conditions.", ["micro:bit V2", "USB cable", "Expansion Board", "3 female-to-female jumper wires", "Soil Moisture Sensor"], "Display the moisture reading on the LED matrix.", "Connect the sensor, then place both probe contacts into soil for a stable reading.", ["Use the same depth for comparisons.", "Compare dry and wet soil.", "Clean and dry the probe after use."]],
  ["360° Metal Gear Servo Motor", "physical", "continuous-rotation-servo.png", "A continuous-rotation servo uses the control signal to set direction and speed rather than a fixed angle.", ["micro:bit V2", "USB cable", "Expansion Board", "3 female-to-female jumper wires", "360° servo motor"], "Press A for forward at speed 50 and B for reverse at speed 100, for one second.", "Connect the servo and keep moving parts clear before powering the activity.", ["Secure the servo before testing.", "Check signal, power and ground order.", "Stop if the motor stalls or becomes hot."]],
  ["LCD Display Module", "physical", "lcd-module.png", "Send simple text and characters from a micro:bit program to an external display.", ["micro:bit V2", "USB cable", "Expansion Board", "4 female-to-female jumper wires", "LCD Display Module"], "Press A to show A and B to show B.", "Connect all four wires according to the module labels before testing the buttons.", ["Check the four connections one by one.", "Adjust contrast if the backlight is on but text is not visible.", "Restart after changing wiring or code."]],
  ["Joystick Module", "physical", "joystick-module.png", "A joystick turns movement into analog values. This activity focuses on reading the horizontal X-axis.", ["micro:bit V2", "USB cable", "Expansion Board", "4 female-to-female jumper wires", "Joystick Module"], "Display the joystick's X-axis value on the LED matrix.", "Connect the module with four jumper wires and move the stick gently after the program starts.", ["Set the stick at centre for a baseline.", "Check the X signal and analog pin.", "Do not force the joystick beyond its range."]],
  ["Ultrasonic Distance Module", "physical", "ultrasonic-distance-sensor.png", "Measure distance by sending an ultrasonic pulse and timing its echo.", ["micro:bit V2", "USB cable", "Expansion Board", "4 female-to-female jumper wires", "Ultrasonic Distance Module"], "Display the measured distance on the LED matrix.", "Face the sensor toward an unobstructed, still target during the first test.", ["Keep both sensor openings clear.", "Use a flat target facing the sensor.", "Avoid very close or sharply angled targets."]],
  ["Line Tracking Sensor Module", "physical", "line-tracking-sensor.png", "A three-channel sensor detects contrast between a dark line and a lighter surface.", ["micro:bit V2", "USB cable", "Expansion Board", "5 female-to-female jumper wires", "3-channel line tracking sensor"], "Display 1 for a black line and 0 when the centre probe does not detect one.", "Connect all five wires and keep the centre probe at a consistent height above the line.", ["Use strong contrast.", "Align the centre probe with the line.", "Check each channel if readings do not change."]],
  ["DC Encoder Motor", "robotics", "dc-encoder-motor.png", "The encoder motor combines rotation with feedback for exploring direction, speed and turns.", ["micro:bit V2", "USB cable", "Expansion Board", "PH2.0-6P terminal cable", "DC Encoder Motor"], "Press A for one forward turn at speed 100 and B for one reverse turn at speed 50.", "Connect the PH2.0-6P cable fully and keep the motor shaft clear before switching on.", ["Match the terminal cable orientation.", "Secure the motor so it cannot pull the cable.", "Stop if the shaft is blocked or the cable warms up."]]
];

const COPY = {
  en: { title: "Guides and Resources", intro: "Practical module guides for the Digital Education Programme kit. Choose a component to review its setup, activity and first checks.", modules: "module guides", platform: "learning platform", browseEyebrow: "Browse the kit", browseTitle: "Find a module guide", searchPlaceholder: "Search modules", allKits: "All kit modules", roboticsKit: "Robotics Kit", physicalKit: "Physical Computing Kit", noResults: "No modules match your search. Try another term.", noteTitle: "About these resources", noteText: "Video demonstrations, wiring diagrams and source files will be added as they are approved. The first checks below are practical guidance for review and should not replace the final safety instructions supplied with the kit.", parts: "Parts used", activity: "Learning activity", setup: "Setup focus", checks: "First checks", comingSoon: "Video and diagrams coming soon", results: "module guides shown", viewGuide: "View guide" },
  fr: { title: "Guides et ressources", intro: "Guides pratiques pour les modules du kit du Programme d'education numerique. Choisissez un composant pour consulter son installation et ses premiers controles.", modules: "guides de modules", platform: "plateforme d'apprentissage", browseEyebrow: "Parcourir le kit", browseTitle: "Trouver un guide", searchPlaceholder: "Rechercher des modules", allKits: "Tous les modules", roboticsKit: "Kit robotique", physicalKit: "Kit informatique physique", noResults: "Aucun module ne correspond a votre recherche.", noteTitle: "A propos de ces ressources", noteText: "Les videos, schemas de connexion et fichiers source seront ajoutes apres validation. Ces premiers controles sont des indications pratiques et ne remplacent pas les consignes finales de securite.", parts: "Pieces utilisees", activity: "Activite", setup: "Installation", checks: "Premiers controles", comingSoon: "Videos et schemas a venir", results: "guides affiches", viewGuide: "Voir le guide" },
  es: { title: "Guias y recursos", intro: "Guias practicas para los modulos del kit del Programa de Educacion Digital. Elija un componente para revisar su conexion, actividad y primeras verificaciones.", modules: "guias de modulos", platform: "plataforma de aprendizaje", browseEyebrow: "Explorar el kit", browseTitle: "Buscar una guia", searchPlaceholder: "Buscar modulos", allKits: "Todos los modulos", roboticsKit: "Kit de Robotica", physicalKit: "Kit de Computacion Fisica", noResults: "No hay modulos que coincidan con la busqueda.", noteTitle: "Sobre estos recursos", noteText: "Los videos, diagramas de conexion y archivos fuente se agregaran cuando sean aprobados. Estas primeras verificaciones son una guia practica y no reemplazan las instrucciones finales de seguridad del kit.", parts: "Piezas utilizadas", activity: "Actividad", setup: "Enfoque de conexion", checks: "Primeras verificaciones", comingSoon: "Videos y diagramas proximamente", results: "guias mostradas", viewGuide: "Ver guia" },
  pt: { title: "Guias e recursos", intro: "Guias praticos para os modulos do kit do Programa de Educacao Digital. Escolha um componente para rever a montagem, a atividade e as primeiras verificacoes.", modules: "guias de modulos", platform: "plataforma de aprendizagem", browseEyebrow: "Explorar o kit", browseTitle: "Encontrar um guia", searchPlaceholder: "Pesquisar modulos", allKits: "Todos os modulos", roboticsKit: "Kit de Robotica", physicalKit: "Kit de Computacao Fisica", noResults: "Nenhum modulo corresponde a sua pesquisa.", noteTitle: "Sobre estes recursos", noteText: "Videos, diagramas de ligacao e ficheiros fonte serao adicionados apos aprovacao. Estas primeiras verificacoes sao orientacoes praticas e nao substituem as instrucoes finais de seguranca do kit.", parts: "Pecas utilizadas", activity: "Atividade", setup: "Foco da montagem", checks: "Primeiras verificacoes", comingSoon: "Videos e diagramas em breve", results: "guias exibidos", viewGuide: "Ver guia" }
};

const state = { language: "en", query: "", kit: "all" };
const list = document.getElementById("module-list");
const count = document.getElementById("results-count");
const empty = document.getElementById("empty-state");
const languageSelect = document.getElementById("language-select");
const search = document.getElementById("module-search");
const kitFilter = document.getElementById("kit-filter");
const t = (key) => COPY[state.language][key] || COPY.en[key];

function renderModules() {
  const query = state.query.trim().toLowerCase();
  const filtered = MODULES.filter((module) => {
    const matchesKit = state.kit === "all" || module[1] === state.kit;
    const matchesQuery = !query || `${module[0]} ${module[3]}`.toLowerCase().includes(query);
    return matchesKit && matchesQuery;
  });
  list.innerHTML = filtered.map((module) => `
    <article class="module-card">
      <div class="module-top">
        <div class="module-image"><img src="../assets/components/${module[2]}" alt="${module[0]}" loading="lazy"></div>
        <div class="module-summary"><p class="module-kicker">${module[1] === "robotics" ? t("roboticsKit") : t("physicalKit")}</p><h3>${module[0]}</h3><p>${module[3]}</p></div>
      </div>
      <div class="module-body"><details><summary>${t("viewGuide")}</summary><div class="guide-grid">
        <div class="guide-block"><h4>${t("parts")}</h4><ul>${module[4].map((item) => `<li>${item}</li>`).join("")}</ul></div>
        <div class="guide-block"><h4>${t("activity")}</h4><p>${module[5]}</p></div>
        <div class="guide-block"><h4>${t("setup")}</h4><p>${module[6]}</p></div>
        <div class="guide-block"><h4>${t("checks")}</h4><ul>${module[7].map((item) => `<li>${item}</li>`).join("")}</ul></div>
      </div><p class="resource-status">${t("comingSoon")}</p></details></div>
    </article>
  `).join("");
  empty.hidden = filtered.length > 0;
  count.textContent = `${filtered.length} ${t("results")}`;
}

function applyLanguage(language) {
  state.language = COPY[language] ? language : "en";
  languageSelect.value = state.language;
  document.documentElement.lang = state.language;
  window.localStorage.setItem("supportLanguage", state.language);
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  renderModules();
}

const storedLanguage = window.localStorage.getItem("supportLanguage");
const browserLanguage = (navigator.language || "").slice(0, 2).toLowerCase();
applyLanguage(COPY[storedLanguage] ? storedLanguage : COPY[browserLanguage] ? browserLanguage : "en");
languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
search.addEventListener("input", () => { state.query = search.value; renderModules(); });
kitFilter.addEventListener("change", () => { state.kit = kitFilter.value; renderModules(); });
