"use strict";

const COMPONENTS = [
  ["microbitExpansionShield", "robotics", "microbit-expansion-shield.png", "controller"],
  ["potentiometerModule", "robotics", "potentiometer.png", "sensor"],
  ["colorSensorModule", "robotics", "color-sensor.png", "sensor"],
  ["soilMoistureSensor", "robotics", "soil-moisture-sensor.png", "sensor"],
  ["continuousRotationServo", "robotics", "continuous-rotation-servo.png", "actuator"],
  ["lcdModule", "robotics", "lcd-module.png", "display"],
  ["joystickModule", "robotics", "joystick-module.png", "control"],
  ["ultrasonicDistanceSensor", "robotics", "ultrasonic-distance-sensor.png", "sensor"],
  ["dcEncoderMotors", "robotics", "dc-encoder-motor.png", "motor"],
  ["lineTrackingSensor", "robotics", "line-tracking-sensor.png", "sensor"],
  ["mechanicalChassisKit", "robotics", "mechanical-chassis-kit.png", "mechanical"],
  ["wheels", "robotics", "wheel.png", "mechanical"],
  ["casterWheel", "robotics", "caster-wheel.png", "mechanical"],
  ["powerAdapterCharger", "robotics", "power-adapter.png", "power"],
  ["tool", "robotics", "tool.png", "accessory"],
  ["screw", "robotics", "screw.png", "accessory"],
  ["accessoryScrewSet", "robotics", "accessory-screw-set.png", "accessory"],
  ["jumperWiresFemaleFemale", "robotics", "jumper-female-female.png", "connection"],
  ["servomotor180", "physical", "180-servomotor.png", "actuator"],
  ["rgbLedStrip", "physical", "rgb-led-strip.png", "display"],
  ["microbit", "physical", "microbit.png", "controller"],
  ["plasticBall", "physical", "plastic-ball.png", "activity"],
  ["microUsbCable", "physical", "micro-usb-cable.png", "connection"],
  ["batteries", "physical", "batteries.png", "power"],
  ["batteryHolder", "physical", "battery-holder.png", "power"],
  ["wearable", "physical", "wearable.png", "mechanical"],
  ["alligatorClipWires", "physical", "alligator-clip-wires.png", "connection"],
  ["jumperWiresMaleMale", "physical", "jumper-male-male.png", "connection"],
  ["jumperWiresMaleFemale", "physical", "jumper-male-female.png", "connection"],
];

const COPY = {
  en: {
    skipLink: "Skip to module guides",
    pageTitle: "Guides and Resources | FIFA Foundation",
    supportPage: "Support page",
    languageLabel: "Language",
    title: "Guides and Resources",
    intro: "Practical component guides for the Digital Education Programme kits. Choose a component to review its setup, activity and first checks.",
    modules: "component guides",
    platform: "learning platform",
    browseEyebrow: "Browse the kit",
    browseTitle: "Find a component guide",
    searchLabel: "Search modules",
    filterLabel: "Filter by kit",
    searchPlaceholder: "Search components",
    allKits: "All kit components",
    roboticsKit: "Robotics Kit",
    physicalKit: "Physical Computing Kit",
    noResults: "No components match your search. Try another term.",
    noteTitle: "About these resources",
    noteText: "Video demonstrations, wiring diagrams and source files will be added as they are approved. These first checks are practical guidance for review and should not replace the final safety instructions supplied with the kit.",
    included: "Included in kit",
    learningUse: "Learning use",
    setup: "Setup focus",
    checks: "First checks",
    comingSoon: "Video and diagrams coming soon",
    results: "component guides shown",
    viewGuide: "View guide",
    footerService: "FIFA Foundation & Raco Systems Corp. support service.",
    support: "Support",
    contact: "Contact",
    qtyOne: "Included component",
    names: {
      microbitExpansionShield: "Micro:bit Expansion Shield",
      potentiometerModule: "Potentiometer Module",
      colorSensorModule: "Color Sensor Module",
      soilMoistureSensor: "Soil Moisture Sensor",
      continuousRotationServo: "Continuous Rotation Servo",
      lcdModule: "LCD Module",
      joystickModule: "Joystick Module",
      ultrasonicDistanceSensor: "Ultrasonic Distance Sensor",
      dcEncoderMotors: "DC Encoder Motors",
      lineTrackingSensor: "Line Tracking Sensor",
      mechanicalChassisKit: "Mechanical Chassis Kit",
      wheels: "Wheels",
      casterWheel: "Caster Wheel",
      powerAdapterCharger: "Power Adapter / Charger",
      tool: "Tool",
      screw: "Screw",
      accessoryScrewSet: "Accessory & Screw Set",
      jumperWiresFemaleFemale: "Jumper Wires (Female-to-Female)",
      servomotor180: "180° Servomotor",
      rgbLedStrip: "RGB LED Strip",
      microbit: "Micro:bit",
      plasticBall: "Plastic Ball",
      microUsbCable: "Micro USB Cable",
      batteries: "Batteries",
      batteryHolder: "Battery Holder",
      wearable: "Wearable",
      alligatorClipWires: "Alligator Clip Wires",
      jumperWiresMaleMale: "Jumper Wires (Male-to-Male)",
      jumperWiresMaleFemale: "Jumper Wires (Male-to-Female)",
    },
    roles: {
      controller: ["The controller or expansion board coordinates the activity and connects the kit hardware to the program.", "Use it to load a simple MakeCode test and confirm that inputs and outputs respond.", "Seat the board firmly, connect power last and keep pins aligned.", ["Check that the board powers on.", "Confirm the program was downloaded.", "Disconnect power before changing wiring."]],
      sensor: ["A sensor converts a real-world condition into a value the micro:bit can read.", "Display the sensor value or trigger an icon when the condition changes.", "Match power, ground and signal labels before testing.", ["Check wire order.", "Test with a clear change in the environment.", "Restart after correcting wiring."]],
      actuator: ["An actuator turns code into movement for mechanisms, models and robotics activities.", "Use buttons A and B to test movement in one direction at a time.", "Secure the moving part before powering the activity.", ["Keep fingers clear of moving parts.", "Check signal, power and ground.", "Stop if the motor stalls or heats up."]],
      display: ["A display or light module makes program output visible to learners.", "Show a letter, number, color or status when a button is pressed.", "Start with a simple low-brightness or single-character test.", ["Check power and ground.", "Confirm the data or I2C connection.", "Reduce brightness if power is unstable."]],
      control: ["A control module lets learners change a program with physical input.", "Read the control value and show it on the micro:bit display.", "Move the control slowly through its range during the first test.", ["Check the signal pin.", "Start from the center or minimum position.", "Do not force the control beyond its range."]],
      motor: ["The motor provides controlled movement for robot drive and rotation activities.", "Run a short forward and reverse test before attaching loads.", "Connect the motor cable fully and keep the shaft clear.", ["Secure the motor.", "Check cable orientation.", "Stop if the shaft is blocked."]],
      mechanical: ["Mechanical parts create the physical structure that carries sensors, boards and movement.", "Assemble a stable model before adding powered components.", "Tighten parts enough to hold position without damaging plastic.", ["Check alignment.", "Avoid overtightening.", "Confirm parts spin or move freely."]],
      power: ["Power components keep the kit charged and ready for classroom use.", "Identify charging, full and low-battery states before the activity.", "Use the supplied power parts and keep connectors dry.", ["Check connector fit.", "Charge under supervision.", "Report damaged cables or batteries."]],
      accessory: ["Accessories support assembly, repair and classroom handling of the kit.", "Use the accessory only for its intended assembly step.", "Keep small parts organized before starting the activity.", ["Count small parts before and after use.", "Use adult supervision.", "Store tools and screws safely."]],
      connection: ["Connection cables link modules to power, ground and signal pins.", "Build a simple circuit and change one wire at a time while testing.", "Match connector type and orientation to the module labels.", ["Check both cable ends.", "Avoid pulling on wires.", "Replace visibly damaged cables."]],
      activity: ["Activity props help learners turn code into visible classroom experiments.", "Use the prop to test movement, balance, light or interaction.", "Keep the prop away from exposed connectors unless the activity requires contact.", ["Check that the prop is clean and intact.", "Use it on a stable surface.", "Store it with the kit after use."]],
    },
  },
  es: {
    skipLink: "Saltar a las guias de componentes",
    pageTitle: "Guias y recursos | FIFA Foundation",
    supportPage: "Pagina de soporte",
    languageLabel: "Idioma",
    title: "Guias y recursos",
    intro: "Guias practicas de componentes para los kits del Programa de Educacion Digital. Elija un componente para revisar conexion, actividad y primeras verificaciones.",
    modules: "guias de componentes",
    platform: "plataforma de aprendizaje",
    browseEyebrow: "Explorar el kit",
    browseTitle: "Buscar una guia de componente",
    searchLabel: "Buscar modulos",
    filterLabel: "Filtrar por kit",
    searchPlaceholder: "Buscar componentes",
    allKits: "Todos los componentes",
    roboticsKit: "Kit de Robotica",
    physicalKit: "Kit de Computacion Fisica",
    noResults: "No hay componentes que coincidan con la busqueda.",
    noteTitle: "Sobre estos recursos",
    noteText: "Los videos, diagramas de conexion y archivos fuente se agregaran cuando sean aprobados. Estas primeras verificaciones son una guia practica para revision y no reemplazan las instrucciones finales de seguridad del kit.",
    included: "Incluido en el kit",
    learningUse: "Uso educativo",
    setup: "Enfoque de conexion",
    checks: "Primeras verificaciones",
    comingSoon: "Videos y diagramas proximamente",
    results: "guias de componentes mostradas",
    viewGuide: "Ver guia",
    footerService: "Servicio de soporte de FIFA Foundation & Raco Systems Corp.",
    support: "Soporte",
    contact: "Contacto",
    qtyOne: "Componente incluido",
    names: {
      microbitExpansionShield: "Shield de expansion micro:bit",
      potentiometerModule: "Modulo potenciometro",
      colorSensorModule: "Modulo sensor de color",
      soilMoistureSensor: "Sensor de humedad del suelo",
      continuousRotationServo: "Servo de rotacion continua",
      lcdModule: "Modulo LCD",
      joystickModule: "Modulo joystick",
      ultrasonicDistanceSensor: "Sensor ultrasonico de distancia",
      dcEncoderMotors: "Motores DC con encoder",
      lineTrackingSensor: "Sensor seguidor de linea",
      mechanicalChassisKit: "Kit de chasis mecanico",
      wheels: "Ruedas",
      casterWheel: "Rueda loca",
      powerAdapterCharger: "Adaptador / cargador",
      tool: "Herramienta",
      screw: "Tornillos",
      accessoryScrewSet: "Set de accesorios y tornillos",
      jumperWiresFemaleFemale: "Cables jumper hembra-hembra",
      servomotor180: "Servomotor 180°",
      rgbLedStrip: "Tira LED RGB",
      microbit: "Micro:bit",
      plasticBall: "Pelota plastica",
      microUsbCable: "Cable Micro USB",
      batteries: "Baterias",
      batteryHolder: "Portabaterias",
      wearable: "Soporte wearable",
      alligatorClipWires: "Cables cocodrilo",
      jumperWiresMaleMale: "Cables jumper macho-macho",
      jumperWiresMaleFemale: "Cables jumper macho-hembra",
    },
  },
  fr: {
    skipLink: "Aller aux guides des composants",
    pageTitle: "Guides et ressources | FIFA Foundation",
    supportPage: "Page de support",
    languageLabel: "Langue",
    title: "Guides et ressources",
    intro: "Guides pratiques des composants pour les kits du Programme d'education numerique. Choisissez un composant pour verifier sa connexion, son activite et ses premiers controles.",
    modules: "guides de composants",
    platform: "plateforme d'apprentissage",
    browseEyebrow: "Parcourir le kit",
    browseTitle: "Trouver un guide de composant",
    searchLabel: "Rechercher des modules",
    filterLabel: "Filtrer par kit",
    searchPlaceholder: "Rechercher des composants",
    allKits: "Tous les composants",
    roboticsKit: "Kit robotique",
    physicalKit: "Kit informatique physique",
    noResults: "Aucun composant ne correspond a votre recherche.",
    noteTitle: "A propos de ces ressources",
    noteText: "Les videos, schemas de connexion et fichiers source seront ajoutes apres validation. Ces premiers controles sont des indications pratiques et ne remplacent pas les consignes finales de securite du kit.",
    included: "Inclus dans le kit",
    learningUse: "Utilisation pedagogique",
    setup: "Installation",
    checks: "Premiers controles",
    comingSoon: "Videos et schemas a venir",
    results: "guides de composants affiches",
    viewGuide: "Voir le guide",
    footerService: "Service de support FIFA Foundation & Raco Systems Corp.",
    support: "Support",
    contact: "Contact",
    qtyOne: "Composant inclus",
    names: {
      microbitExpansionShield: "Carte d'extension micro:bit",
      potentiometerModule: "Module potentiometre",
      colorSensorModule: "Module capteur de couleur",
      soilMoistureSensor: "Capteur d'humidite du sol",
      continuousRotationServo: "Servomoteur a rotation continue",
      lcdModule: "Module LCD",
      joystickModule: "Module joystick",
      ultrasonicDistanceSensor: "Capteur de distance ultrasonique",
      dcEncoderMotors: "Moteurs CC avec encodeur",
      lineTrackingSensor: "Capteur suiveur de ligne",
      mechanicalChassisKit: "Kit chassis mecanique",
      wheels: "Roues",
      casterWheel: "Roue folle",
      powerAdapterCharger: "Adaptateur secteur / chargeur",
      tool: "Outil",
      screw: "Vis",
      accessoryScrewSet: "Jeu d'accessoires et de vis",
      jumperWiresFemaleFemale: "Fils jumper femelle-femelle",
      servomotor180: "Servomoteur 180°",
      rgbLedStrip: "Ruban LED RVB",
      microbit: "Micro:bit",
      plasticBall: "Ballon en plastique",
      microUsbCable: "Cable Micro USB",
      batteries: "Piles",
      batteryHolder: "Support de piles",
      wearable: "Support portable",
      alligatorClipWires: "Cables a pinces crocodile",
      jumperWiresMaleMale: "Fils jumper male-male",
      jumperWiresMaleFemale: "Fils jumper male-femelle",
    },
  },
  pt: {
    skipLink: "Ir para os guias de componentes",
    pageTitle: "Guias e recursos | FIFA Foundation",
    supportPage: "Pagina de suporte",
    languageLabel: "Idioma",
    title: "Guias e recursos",
    intro: "Guias praticos dos componentes para os kits do Programa de Educacao Digital. Escolha um componente para rever conexao, atividade e primeiras verificacoes.",
    modules: "guias de componentes",
    platform: "plataforma de aprendizagem",
    browseEyebrow: "Explorar o kit",
    browseTitle: "Encontrar guia de componente",
    searchLabel: "Pesquisar modulos",
    filterLabel: "Filtrar por kit",
    searchPlaceholder: "Pesquisar componentes",
    allKits: "Todos os componentes",
    roboticsKit: "Kit de Robotica",
    physicalKit: "Kit de Computacao Fisica",
    noResults: "Nenhum componente corresponde a pesquisa.",
    noteTitle: "Sobre estes recursos",
    noteText: "Videos, diagramas de ligacao e ficheiros fonte serao adicionados apos aprovacao. Estas primeiras verificacoes sao orientacoes praticas e nao substituem as instrucoes finais de seguranca do kit.",
    included: "Incluido no kit",
    learningUse: "Uso educativo",
    setup: "Foco da montagem",
    checks: "Primeiras verificacoes",
    comingSoon: "Videos e diagramas em breve",
    results: "guias de componentes exibidos",
    viewGuide: "Ver guia",
    footerService: "Servico de suporte FIFA Foundation & Raco Systems Corp.",
    support: "Suporte",
    contact: "Contato",
    qtyOne: "Componente incluido",
    names: {
      microbitExpansionShield: "Shield de expansao micro:bit",
      potentiometerModule: "Modulo potenciometro",
      colorSensorModule: "Modulo sensor de cor",
      soilMoistureSensor: "Sensor de umidade do solo",
      continuousRotationServo: "Servo de rotacao continua",
      lcdModule: "Modulo LCD",
      joystickModule: "Modulo joystick",
      ultrasonicDistanceSensor: "Sensor ultrassonico de distancia",
      dcEncoderMotors: "Motores DC com encoder",
      lineTrackingSensor: "Sensor seguidor de linha",
      mechanicalChassisKit: "Kit de chassi mecanico",
      wheels: "Rodas",
      casterWheel: "Roda boba",
      powerAdapterCharger: "Adaptador / carregador",
      tool: "Ferramenta",
      screw: "Parafusos",
      accessoryScrewSet: "Conjunto de acessorios e parafusos",
      jumperWiresFemaleFemale: "Cabos jumper femea-femea",
      servomotor180: "Servomotor 180°",
      rgbLedStrip: "Fita LED RGB",
      microbit: "Micro:bit",
      plasticBall: "Bola plastica",
      microUsbCable: "Cabo Micro USB",
      batteries: "Baterias",
      batteryHolder: "Suporte de baterias",
      wearable: "Suporte vestivel",
      alligatorClipWires: "Cabos jacare",
      jumperWiresMaleMale: "Cabos jumper macho-macho",
      jumperWiresMaleFemale: "Cabos jumper macho-femea",
    },
  },
};

COPY.es.roles = translateRoles("es");
COPY.fr.roles = translateRoles("fr");
COPY.pt.roles = translateRoles("pt");

const state = { language: "en", query: "", kit: "all" };
const list = document.getElementById("module-list");
const count = document.getElementById("results-count");
const empty = document.getElementById("empty-state");
const languageSelect = document.getElementById("language-select");
const search = document.getElementById("module-search");
const kitFilter = document.getElementById("kit-filter");
const moduleTotal = document.getElementById("module-total");
const t = (key) => COPY[state.language][key] || COPY.en[key] || key;

function translateRoles(language) {
  const roleCopy = {
    es: {
      controller: ["La placa o controlador coordina la actividad y conecta el hardware con el programa.", "Cargue una prueba simple de MakeCode y confirme que entradas y salidas responden.", "Inserte la placa con firmeza, conecte la energia al final y mantenga los pines alineados.", ["Verifique que la placa encienda.", "Confirme que el programa fue descargado.", "Desconecte la energia antes de cambiar cables."]],
      sensor: ["Un sensor convierte una condicion real en un valor que la micro:bit puede leer.", "Muestre el valor del sensor o active un icono cuando cambie la condicion.", "Respete las etiquetas de energia, tierra y senal antes de probar.", ["Revise el orden de los cables.", "Pruebe con un cambio claro del entorno.", "Reinicie despues de corregir el cableado."]],
      actuator: ["Un actuador convierte codigo en movimiento para mecanismos y actividades de robotica.", "Use los botones A y B para probar un movimiento por vez.", "Asegure la pieza movil antes de energizar la actividad.", ["Mantenga los dedos lejos de partes moviles.", "Revise senal, energia y tierra.", "Detenga la prueba si se traba o calienta."]],
      display: ["Un modulo visual muestra la salida del programa a los estudiantes.", "Muestre una letra, numero, color o estado al presionar un boton.", "Empiece con una prueba simple de bajo brillo o un solo caracter.", ["Revise energia y tierra.", "Confirme la conexion de datos o I2C.", "Reduzca el brillo si la energia es inestable."]],
      control: ["Un modulo de control permite modificar el programa con una entrada fisica.", "Lea el valor del control y muestrelo en la pantalla de la micro:bit.", "Mueva el control lentamente durante la primera prueba.", ["Revise el pin de senal.", "Empiece desde el centro o minimo.", "No fuerce el control fuera de su rango."]],
      motor: ["El motor aporta movimiento controlado para actividades de giro y desplazamiento.", "Ejecute una prueba corta hacia adelante y atras antes de agregar carga.", "Conecte el cable completo y mantenga libre el eje.", ["Asegure el motor.", "Revise la orientacion del cable.", "Detenga la prueba si el eje se bloquea."]],
      mechanical: ["Las piezas mecanicas forman la estructura fisica del modelo o robot.", "Arme una estructura estable antes de agregar componentes energizados.", "Ajuste lo suficiente para sostener sin danar el plastico.", ["Revise la alineacion.", "No ajuste de mas.", "Confirme que las partes giren o se muevan libremente."]],
      power: ["Los componentes de energia mantienen el kit cargado y listo para clase.", "Identifique estados de carga, bateria completa y bateria baja antes de la actividad.", "Use las partes suministradas y mantenga los conectores secos.", ["Revise que el conector calce bien.", "Cargue con supervision.", "Reporte cables o baterias danadas."]],
      accessory: ["Los accesorios ayudan al armado, reparacion y manejo del kit.", "Use cada accesorio solo para el paso de armado previsto.", "Organice las piezas pequenas antes de empezar.", ["Cuente piezas pequenas antes y despues.", "Use supervision adulta.", "Guarde herramientas y tornillos de forma segura."]],
      connection: ["Los cables conectan modulos con pines de energia, tierra y senal.", "Arme un circuito simple y cambie un cable por vez al probar.", "Respete tipo de conector y orientacion segun las etiquetas.", ["Revise ambos extremos del cable.", "Evite tirar de los cables.", "Reemplace cables visiblemente danados."]],
      activity: ["Los accesorios de actividad ayudan a convertir el codigo en experimentos visibles.", "Use el objeto para probar movimiento, equilibrio, luz o interaccion.", "Mantengalo lejos de conectores expuestos salvo que la actividad lo requiera.", ["Verifique que este limpio e intacto.", "Use una superficie estable.", "Guardelo con el kit despues de usarlo."]],
    },
    fr: {
      controller: ["La carte ou le controleur coordonne l'activite et relie le materiel au programme.", "Chargez un test MakeCode simple et verifiez les entrees et sorties.", "Inserez la carte fermement, branchez l'alimentation en dernier et alignez les broches.", ["Verifiez que la carte s'allume.", "Confirmez que le programme est charge.", "Debranchez avant de modifier les cables."]],
      sensor: ["Un capteur transforme une condition reelle en valeur lisible par la micro:bit.", "Affichez la valeur du capteur ou declenchez une icone quand la condition change.", "Respectez les etiquettes alimentation, masse et signal.", ["Verifiez l'ordre des fils.", "Testez avec un changement clair.", "Redemarrez apres correction du cablage."]],
      actuator: ["Un actionneur transforme le code en mouvement pour les mecanismes et activites robotiques.", "Utilisez A et B pour tester un mouvement a la fois.", "Fixez la piece mobile avant d'alimenter l'activite.", ["Gardez les doigts loin des pieces mobiles.", "Verifiez signal, alimentation et masse.", "Arretez si le moteur bloque ou chauffe."]],
      display: ["Un module visuel rend la sortie du programme visible aux eleves.", "Affichez une lettre, un nombre, une couleur ou un etat avec un bouton.", "Commencez par un test simple a faible luminosite ou un seul caractere.", ["Verifiez alimentation et masse.", "Confirmez la connexion donnees ou I2C.", "Reduisez la luminosite si l'alimentation est instable."]],
      control: ["Un module de controle permet de modifier le programme avec une entree physique.", "Lisez la valeur du controle et affichez-la sur la micro:bit.", "Deplacez le controle lentement pendant le premier test.", ["Verifiez la broche signal.", "Commencez au centre ou au minimum.", "Ne forcez pas le controle hors de sa plage."]],
      motor: ["Le moteur fournit un mouvement controle pour le deplacement et la rotation.", "Effectuez un court test avant et arriere avant d'ajouter une charge.", "Branchez bien le cable et gardez l'axe libre.", ["Fixez le moteur.", "Verifiez l'orientation du cable.", "Arretez si l'axe est bloque."]],
      mechanical: ["Les pieces mecaniques creent la structure physique du modele ou robot.", "Assemblez une structure stable avant les elements alimentes.", "Serrez assez pour tenir sans abimer le plastique.", ["Verifiez l'alignement.", "Evitez de trop serrer.", "Confirmez que les pieces bougent librement."]],
      power: ["Les composants d'alimentation gardent le kit charge et pret pour la classe.", "Identifiez les etats charge, plein et batterie faible avant l'activite.", "Utilisez les pieces fournies et gardez les connecteurs au sec.", ["Verifiez l'ajustement du connecteur.", "Chargez sous supervision.", "Signalez les cables ou batteries endommages."]],
      accessory: ["Les accessoires aident au montage, a la reparation et a la manipulation.", "Utilisez chaque accessoire uniquement pour l'etape prevue.", "Organisez les petites pieces avant de commencer.", ["Comptez les petites pieces avant et apres.", "Utilisez la supervision d'un adulte.", "Rangez outils et vis en securite."]],
      connection: ["Les cables relient les modules aux broches alimentation, masse et signal.", "Construisez un circuit simple et changez un fil a la fois.", "Respectez le type de connecteur et l'orientation.", ["Verifiez les deux extremites.", "Evitez de tirer sur les fils.", "Remplacez les cables visiblement abimes."]],
      activity: ["Les accessoires d'activite transforment le code en experiences visibles.", "Utilisez l'objet pour tester mouvement, equilibre, lumiere ou interaction.", "Gardez-le eloigne des connecteurs exposes sauf si necessaire.", ["Verifiez qu'il est propre et intact.", "Utilisez une surface stable.", "Rangez-le avec le kit apres usage."]],
    },
    pt: {
      controller: ["A placa ou controlador coordena a atividade e conecta o hardware ao programa.", "Carregue um teste simples no MakeCode e confirme entradas e saidas.", "Encaixe a placa com firmeza, conecte a energia por ultimo e alinhe os pinos.", ["Verifique se a placa liga.", "Confirme que o programa foi baixado.", "Desconecte a energia antes de mudar cabos."]],
      sensor: ["Um sensor converte uma condicao real em um valor que a micro:bit pode ler.", "Mostre o valor do sensor ou ative um icone quando a condicao mudar.", "Combine energia, terra e sinal antes de testar.", ["Confira a ordem dos cabos.", "Teste com uma mudanca clara no ambiente.", "Reinicie depois de corrigir a fiacao."]],
      actuator: ["Um atuador transforma codigo em movimento para mecanismos e robotica.", "Use os botoes A e B para testar um movimento por vez.", "Fixe a parte movel antes de energizar a atividade.", ["Mantenha os dedos longe das partes moveis.", "Verifique sinal, energia e terra.", "Pare se travar ou aquecer."]],
      display: ["Um modulo visual torna a saida do programa visivel aos alunos.", "Mostre uma letra, numero, cor ou estado ao pressionar um botao.", "Comece com teste simples de baixo brilho ou um caractere.", ["Verifique energia e terra.", "Confirme a conexao de dados ou I2C.", "Reduza o brilho se a energia estiver instavel."]],
      control: ["Um modulo de controle permite alterar o programa com entrada fisica.", "Leia o valor e mostre na tela da micro:bit.", "Mova o controle devagar durante o primeiro teste.", ["Verifique o pino de sinal.", "Comece pelo centro ou minimo.", "Nao force alem do alcance."]],
      motor: ["O motor fornece movimento controlado para deslocamento e rotacao.", "Execute um teste curto para frente e para tras antes de adicionar carga.", "Conecte o cabo totalmente e mantenha o eixo livre.", ["Fixe o motor.", "Verifique a orientacao do cabo.", "Pare se o eixo bloquear."]],
      mechanical: ["Pecas mecanicas criam a estrutura fisica do modelo ou robo.", "Monte uma estrutura estavel antes de adicionar componentes energizados.", "Aperte o suficiente sem danificar o plastico.", ["Verifique o alinhamento.", "Evite apertar demais.", "Confirme que as partes se movem livremente."]],
      power: ["Componentes de energia mantem o kit carregado e pronto para aula.", "Identifique estados de carga, completo e bateria baixa antes da atividade.", "Use as partes fornecidas e mantenha conectores secos.", ["Confira o encaixe do conector.", "Carregue com supervisao.", "Reporte cabos ou baterias danificados."]],
      accessory: ["Acessorios apoiam montagem, reparo e manuseio do kit.", "Use cada acessorio apenas para a etapa prevista.", "Organize pecas pequenas antes de iniciar.", ["Conte pecas pequenas antes e depois.", "Use supervisao adulta.", "Guarde ferramentas e parafusos com seguranca."]],
      connection: ["Cabos conectam modulos aos pinos de energia, terra e sinal.", "Monte um circuito simples e altere um cabo por vez ao testar.", "Respeite tipo de conector e orientacao das etiquetas.", ["Confira as duas pontas.", "Evite puxar pelos fios.", "Substitua cabos visivelmente danificados."]],
      activity: ["Objetos de atividade ajudam a transformar codigo em experiencias visiveis.", "Use o objeto para testar movimento, equilibrio, luz ou interacao.", "Mantenha longe de conectores expostos salvo quando a atividade pedir.", ["Verifique se esta limpo e intacto.", "Use superficie estavel.", "Guarde com o kit apos o uso."]],
    },
  };
  return roleCopy[language];
}

function renderModules() {
  const query = state.query.trim().toLowerCase();
  const filtered = COMPONENTS.filter(([key, kit]) => {
    const name = componentName(key).toLowerCase();
    const matchesKit = state.kit === "all" || kit === state.kit;
    return matchesKit && (!query || name.includes(query));
  });

  list.innerHTML = filtered.map(renderCard).join("");
  empty.hidden = filtered.length > 0;
  count.textContent = `${filtered.length} ${t("results")}`;
  moduleTotal.textContent = String(COMPONENTS.length);
}

function renderCard([key, kit, image, role]) {
  const guide = COPY[state.language].roles[role] || COPY.en.roles[role];
  return `
    <article class="module-card">
      <div class="module-top">
        <div class="module-image"><img src="../assets/components/${image}" alt="${componentName(key)}" loading="lazy"></div>
        <div class="module-summary">
          <p class="module-kicker">${kit === "robotics" ? t("roboticsKit") : t("physicalKit")}</p>
          <h3>${componentName(key)}</h3>
          <p>${guide[0]}</p>
        </div>
      </div>
      <div class="module-body">
        <details>
          <summary>${t("viewGuide")}</summary>
          <div class="guide-grid">
            <div class="guide-block"><h4>${t("included")}</h4><p>${t("qtyOne")}: ${componentName(key)}</p></div>
            <div class="guide-block"><h4>${t("learningUse")}</h4><p>${guide[1]}</p></div>
            <div class="guide-block"><h4>${t("setup")}</h4><p>${guide[2]}</p></div>
            <div class="guide-block"><h4>${t("checks")}</h4><ul>${guide[3].map((item) => `<li>${item}</li>`).join("")}</ul></div>
          </div>
          <p class="resource-status">${t("comingSoon")}</p>
        </details>
      </div>
    </article>
  `;
}

function componentName(key) {
  return COPY[state.language].names[key] || COPY.en.names[key] || key;
}

function applyLanguage(language) {
  state.language = COPY[language] ? language : "en";
  languageSelect.value = state.language;
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  window.localStorage.setItem("supportLanguage", state.language);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  renderModules();
}

const storedLanguage = window.localStorage.getItem("supportLanguage");
const browserLanguage = (navigator.language || "").slice(0, 2).toLowerCase();
applyLanguage(COPY[storedLanguage] ? storedLanguage : COPY[browserLanguage] ? browserLanguage : "en");
languageSelect.addEventListener("change", () => applyLanguage(languageSelect.value));
search.addEventListener("input", () => {
  state.query = search.value;
  renderModules();
});
kitFilter.addEventListener("change", () => {
  state.kit = kitFilter.value;
  renderModules();
});
