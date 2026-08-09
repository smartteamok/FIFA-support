"use strict";

/**
 * Translatable prose for the module guides.
 *
 * The English text is taken from "FIFA micro:bit Hardware Usage Videos and
 * Documentation" without rewriting. ES, FR and PT are translations of it.
 *
 * troubleshootingStatus in modules.data.js records where each troubleshooting
 * entry came from: "approved" is text from the hardware document, "draft" was
 * derived from the documented operating principle. It is provenance for the
 * hardware team's review, tracked in PENDIENTES.md, and is not shown on the
 * page.
 */

const MODULE_TEXT = {
  "servo-180": {
    en: {
      summary: "Closed-loop actuator that holds a set angle between 0° and 180° from a 20 ms PWM signal.",
      principle: "A servo is a closed-loop servo actuator, internally composed of a geared motor, gear set, angle potentiometer, and driver circuit board. It uses a PWM pulse signal with a 20ms period to control the rotation angle: a pulse width of 0.5ms to 2.5ms corresponds to a rotation angle of 0° to 180°. The circuit board compares the set angle with the actual angle fed back by the potentiometer, drives the motor forward or backward to correct any deviation, and self-locks to hold torque once the target angle is reached.",
      applications: "Commonly used for control surfaces on model aircraft, RC car steering, mechanical joint gimbals, smart car steering, robotic arm joints, camera anti-shake gimbals, small valve switches, robot joint ornaments, and ship rudder control — well suited to small, precise angle-positioning applications.",
      wiringNote: "Connect the three servo wires by colour, then check the completed connection against the second figure before switching the power on.",
      programming: "Press button A to rotate the servo to 0°, press button B to rotate the servo to 90°.",
      troubleshooting: [
        { issue: "The servo does not move at all", fix: "Check the three wires one by one: red to the power positive, brown to ground, and yellow to the signal pin used in the program. When alligator clips are used, make sure the metal jaw grips the metal pad and not the plastic. Then confirm the program finished downloading to the micro:bit." },
        { issue: "The servo buzzes or trembles instead of holding the angle", fix: "This is almost always a power problem: the micro:bit USB supply alone may not be enough for the servo. Power the activity from the expansion board battery. Also check that the servo arm is not mechanically blocked or being pushed past its 0°–180° range." },
      ],
    },
    es: {
      summary: "Actuador de lazo cerrado que mantiene un ángulo fijo entre 0° y 180° a partir de una señal PWM de 20 ms.",
      principle: "El servo es un actuador de lazo cerrado, formado internamente por un motor con reductora, un juego de engranajes, un potenciómetro de ángulo y una placa de control. Usa una señal PWM de 20 ms de período para controlar el ángulo de giro: un ancho de pulso de 0,5 ms a 2,5 ms corresponde a un ángulo de 0° a 180°. La placa compara el ángulo indicado con el ángulo real que devuelve el potenciómetro, mueve el motor en un sentido o en el otro para corregir la desviación y se autobloquea para mantener el par una vez alcanzado el ángulo objetivo.",
      applications: "Se usa habitualmente en superficies de control de aeromodelos, dirección de autos de radiocontrol, articulaciones mecánicas, dirección de autos inteligentes, juntas de brazos robóticos, estabilizadores de cámara, válvulas pequeñas y timones de embarcaciones: es apropiado para aplicaciones chicas de posicionamiento angular preciso.",
      wiringNote: "Conecte los tres cables del servo por color y verifique la conexión terminada con la segunda figura antes de energizar.",
      programming: "Presione el botón A para llevar el servo a 0° y el botón B para llevarlo a 90°.",
      troubleshooting: [
        { issue: "El servo no se mueve", fix: "Revise los tres cables uno por uno: el rojo al positivo, el marrón a tierra y el amarillo al pin de señal que usa el programa. Si usa pinzas cocodrilo, asegúrese de que la pinza muerda el contacto metálico y no el plástico. Después confirme que el programa terminó de descargarse en la micro:bit." },
        { issue: "El servo zumba o tiembla en lugar de mantener el ángulo", fix: "Casi siempre es un problema de alimentación: la energía del USB de la micro:bit puede no alcanzar para el servo. Alimente la actividad con la batería de la placa de expansión. Verifique también que el brazo del servo no esté trabado ni forzado más allá del rango de 0° a 180°." },
      ],
    },
    fr: {
      summary: "Actionneur en boucle fermée qui maintient un angle fixe entre 0° et 180° à partir d'un signal PWM de 20 ms.",
      principle: "Le servomoteur est un actionneur en boucle fermée, composé d'un moteur à réducteur, d'un train d'engrenages, d'un potentiomètre d'angle et d'une carte de commande. Il utilise un signal PWM de 20 ms de période pour contrôler l'angle de rotation : une largeur d'impulsion de 0,5 ms à 2,5 ms correspond à un angle de 0° à 180°. La carte compare l'angle demandé à l'angle réel renvoyé par le potentiomètre, entraîne le moteur dans un sens ou dans l'autre pour corriger l'écart, puis se verrouille pour maintenir le couple une fois l'angle atteint.",
      applications: "Utilisé couramment pour les gouvernes d'aéromodèles, la direction des voitures radiocommandées, les articulations mécaniques, la direction des voitures intelligentes, les articulations de bras robotisés, les stabilisateurs de caméra, les petites vannes et les gouvernails de bateaux : il convient aux applications de positionnement angulaire précis de petite taille.",
      wiringNote: "Branchez les trois fils du servomoteur selon leur couleur, puis vérifiez la connexion terminée avec la seconde figure avant de mettre sous tension.",
      programming: "Appuyez sur le bouton A pour amener le servomoteur à 0° et sur le bouton B pour l'amener à 90°.",
      troubleshooting: [
        { issue: "Le servomoteur ne bouge pas du tout", fix: "Vérifiez les trois fils un par un : le rouge au pôle positif, le brun à la masse et le jaune à la broche de signal utilisée par le programme. Avec des pinces crocodile, assurez-vous que la pince serre la pastille métallique et non le plastique. Confirmez ensuite que le programme a bien été téléchargé sur la micro:bit." },
        { issue: "Le servomoteur bourdonne ou tremble au lieu de tenir l'angle", fix: "C'est presque toujours un problème d'alimentation : l'alimentation USB de la micro:bit seule peut être insuffisante. Alimentez l'activité avec la batterie de la carte d'extension. Vérifiez aussi que le bras du servomoteur n'est pas bloqué ni forcé au-delà de la plage 0°–180°." },
      ],
    },
    pt: {
      summary: "Atuador de laço fechado que mantém um ângulo fixo entre 0° e 180° a partir de um sinal PWM de 20 ms.",
      principle: "O servo é um atuador de laço fechado, formado internamente por um motor com redutor, um conjunto de engrenagens, um potenciômetro de ângulo e uma placa de controle. Usa um sinal PWM com período de 20 ms para controlar o ângulo de rotação: uma largura de pulso de 0,5 ms a 2,5 ms corresponde a um ângulo de 0° a 180°. A placa compara o ângulo definido com o ângulo real informado pelo potenciômetro, aciona o motor em um sentido ou no outro para corrigir o desvio e se autotrava para manter o torque quando o ângulo é alcançado.",
      applications: "Usado com frequência em superfícies de comando de aeromodelos, direção de carros de controle remoto, articulações mecânicas, direção de carros inteligentes, juntas de braços robóticos, estabilizadores de câmera, válvulas pequenas e timões de embarcações: é adequado para aplicações pequenas de posicionamento angular preciso.",
      wiringNote: "Conecte os três cabos do servo pela cor e confira a conexão concluída com a segunda figura antes de ligar a energia.",
      programming: "Pressione o botão A para levar o servo a 0° e o botão B para levá-lo a 90°.",
      troubleshooting: [
        { issue: "O servo não se move", fix: "Verifique os três cabos um a um: o vermelho no positivo, o marrom no terra e o amarelo no pino de sinal usado pelo programa. Se usar garras jacaré, confirme que a garra prende o contato metálico e não o plástico. Depois confirme que o programa terminou de ser baixado na micro:bit." },
        { issue: "O servo zumbe ou treme em vez de manter o ângulo", fix: "Quase sempre é um problema de alimentação: a energia do USB da micro:bit pode não ser suficiente. Alimente a atividade com a bateria da placa de expansão. Verifique também se o braço do servo não está travado nem forçado além da faixa de 0° a 180°." },
      ],
    },
  },

  "rgb-led-strip": {
    en: {
      summary: "Independent red, green and blue LED chips mixed by PWM to produce full colour.",
      principle: "Consists of independently packaged red, green, and blue LED chips. PWM (pulse-width modulation) adjusts the brightness of each of the three channels separately, and mixing the three primary colors produces full color.",
      applications: "Commonly used for residential ceiling lighting, TV background ambient lighting, case interior lighting, storefront window displays, holiday decorations, outdoor signage, and aquarium supplemental lighting.",
      wiringNote: "The strip is directional. The signal has to enter at the input end: check the input and output markings on the strip before wiring.",
      programming: "Press button A to light the RGB LED strip red, press button B to light it green.",
      troubleshooting: [
        { issue: "No LED lights up", fix: "The strip only works in one direction. Confirm the signal wire is connected at the input end and not the output end, that the data wire goes to the pin declared in the program, and that the strip and the micro:bit share the same ground." },
        { issue: "Only the first LEDs light up, or the colours are wrong", fix: "The number of LEDs declared in the program has to match the strip. Check that value first, then confirm the data wire is on the declared pin." },
        { issue: "The colours flicker or look dim", fix: "Brightness is set higher than the available power can sustain. Lower the brightness in the program or power the activity from the expansion board battery instead of USB alone." },
      ],
    },
    es: {
      summary: "Chips LED rojo, verde y azul independientes que se mezclan por PWM para producir color pleno.",
      principle: "Está formada por chips LED rojo, verde y azul encapsulados de forma independiente. La modulación por ancho de pulso (PWM) ajusta el brillo de cada uno de los tres canales por separado, y la mezcla de los tres colores primarios produce color pleno.",
      applications: "Se usa habitualmente en iluminación de cielorrasos, luz ambiente detrás del televisor, iluminación interior de gabinetes, vidrieras, decoración de fiestas, cartelería exterior e iluminación complementaria de acuarios.",
      wiringNote: "La tira tiene un sentido. La señal debe entrar por el extremo de entrada: verifique las marcas de entrada y salida antes de cablear.",
      programming: "Presione el botón A para encender la tira en rojo y el botón B para encenderla en verde.",
      troubleshooting: [
        { issue: "Ningún LED se enciende", fix: "La tira funciona en un solo sentido. Confirme que el cable de señal esté conectado en el extremo de entrada y no en el de salida, que el cable de datos vaya al pin declarado en el programa y que la tira y la micro:bit compartan la misma tierra." },
        { issue: "Solo se encienden los primeros LED, o los colores no son los esperados", fix: "La cantidad de LED declarada en el programa tiene que coincidir con la de la tira. Revise ese valor primero y después confirme que el cable de datos esté en el pin declarado." },
        { issue: "Los colores titilan o se ven apagados", fix: "El brillo está por encima de lo que la alimentación puede sostener. Baje el brillo en el programa o alimente la actividad con la batería de la placa de expansión en lugar de solo el USB." },
      ],
    },
    fr: {
      summary: "Puces LED rouge, verte et bleue indépendantes mélangées par PWM pour produire toutes les couleurs.",
      principle: "Le ruban est constitué de puces LED rouge, verte et bleue encapsulées séparément. La modulation de largeur d'impulsion (PWM) règle la luminosité de chacun des trois canaux indépendamment, et le mélange des trois couleurs primaires produit toutes les couleurs.",
      applications: "Utilisé couramment pour l'éclairage de plafond, l'éclairage d'ambiance derrière un téléviseur, l'éclairage intérieur de meubles, les vitrines de magasins, les décorations de fête, la signalétique extérieure et l'éclairage d'appoint d'aquariums.",
      wiringNote: "Le ruban est orienté. Le signal doit entrer par l'extrémité d'entrée : vérifiez les repères d'entrée et de sortie avant de câbler.",
      programming: "Appuyez sur le bouton A pour allumer le ruban en rouge et sur le bouton B pour l'allumer en vert.",
      troubleshooting: [
        { issue: "Aucune LED ne s'allume", fix: "Le ruban ne fonctionne que dans un sens. Vérifiez que le fil de signal est branché à l'extrémité d'entrée et non de sortie, que le fil de données va bien à la broche déclarée dans le programme, et que le ruban et la micro:bit partagent la même masse." },
        { issue: "Seules les premières LED s'allument, ou les couleurs sont fausses", fix: "Le nombre de LED déclaré dans le programme doit correspondre au ruban. Vérifiez cette valeur d'abord, puis confirmez que le fil de données est sur la broche déclarée." },
        { issue: "Les couleurs clignotent ou paraissent faibles", fix: "La luminosité dépasse ce que l'alimentation peut fournir. Réduisez la luminosité dans le programme ou alimentez l'activité avec la batterie de la carte d'extension plutôt qu'avec l'USB seul." },
      ],
    },
    pt: {
      summary: "Chips LED vermelho, verde e azul independentes misturados por PWM para produzir cor plena.",
      principle: "É formada por chips LED vermelho, verde e azul encapsulados de forma independente. A modulação por largura de pulso (PWM) ajusta o brilho de cada um dos três canais separadamente, e a mistura das três cores primárias produz cor plena.",
      applications: "Usada com frequência em iluminação de teto, luz de ambiente atrás da TV, iluminação interna de móveis, vitrines, decoração de festas, sinalização externa e iluminação complementar de aquários.",
      wiringNote: "A fita tem sentido. O sinal deve entrar pela extremidade de entrada: verifique as marcas de entrada e saída antes de ligar os cabos.",
      programming: "Pressione o botão A para acender a fita em vermelho e o botão B para acendê-la em verde.",
      troubleshooting: [
        { issue: "Nenhum LED acende", fix: "A fita funciona em um único sentido. Confirme que o cabo de sinal está na extremidade de entrada e não na de saída, que o cabo de dados vai ao pino declarado no programa e que a fita e a micro:bit compartilham o mesmo terra." },
        { issue: "Apenas os primeiros LED acendem, ou as cores estão erradas", fix: "A quantidade de LED declarada no programa precisa coincidir com a da fita. Verifique esse valor primeiro e depois confirme que o cabo de dados está no pino declarado." },
        { issue: "As cores piscam ou aparecem fracas", fix: "O brilho está acima do que a alimentação consegue sustentar. Reduza o brilho no programa ou alimente a atividade com a bateria da placa de expansão em vez de apenas o USB." },
      ],
    },
  },

  "expansion-board": {
    en: {
      summary: "Carrier board with built-in battery, GPIO, servo and encoder motor ports, charging port and status LED.",
      principle: "The expansion board seats the micro:bit V2 and breaks its pins out into labelled ports: GPIO, servo ports, encoder motor ports, the built-in battery, the charging port and the charging status LED. It supplies the modules with more current than the micro:bit can provide on its own, which is what makes motor and servo activities possible.",
      applications: "It is the base of every robotics activity in the kit: it powers the micro:bit, drives the motors and servos, and gives learners a labelled place to connect each module.",
      wiringNote: "Seat the micro:bit in the socket with the LED matrix facing the marked side, then identify each port group on the board before connecting any module.",
      programming: "The micro:bit LED matrix displays a heart shape, which confirms the board is powering the micro:bit and the program downloaded correctly.",
      troubleshooting: [
        { issue: "The micro:bit does not power on when seated on the board", fix: "Check the board power switch is on and the battery has charge: connect the power adapter and look at the status LED. Then reseat the micro:bit fully into the socket, with the LED matrix facing the marked side." },
        { issue: "A module connected to a port does not respond", fix: "Each port group is wired to specific pins. Confirm the pin declared in the program matches the port the module is plugged into, and connect the module before switching the board on." },
      ],
    },
    es: {
      summary: "Placa base con batería incorporada, puertos GPIO, de servo y de motor con encoder, puerto de carga y LED de estado.",
      principle: "La placa de expansión aloja la micro:bit V2 y lleva sus pines a puertos rotulados: GPIO, puertos de servo, puertos de motor con encoder, la batería incorporada, el puerto de carga y el LED de estado de carga. Entrega a los módulos más corriente de la que la micro:bit puede dar por sí sola, y eso es lo que hace posibles las actividades con motores y servos.",
      applications: "Es la base de todas las actividades de robótica del kit: alimenta la micro:bit, mueve los motores y los servos, y le da al estudiante un lugar rotulado donde conectar cada módulo.",
      wiringNote: "Inserte la micro:bit en el zócalo con la matriz de LED hacia el lado indicado y después identifique cada grupo de puertos antes de conectar un módulo.",
      programming: "La matriz de LED de la micro:bit muestra un corazón, lo que confirma que la placa está alimentando la micro:bit y que el programa se descargó correctamente.",
      troubleshooting: [
        { issue: "La micro:bit no enciende al colocarla en la placa", fix: "Verifique que la llave de encendido de la placa esté en posición de encendido y que la batería tenga carga: conecte el adaptador y observe el LED de estado. Después vuelva a insertar la micro:bit a fondo en el zócalo, con la matriz de LED hacia el lado indicado." },
        { issue: "Un módulo conectado a un puerto no responde", fix: "Cada grupo de puertos está asociado a pines determinados. Confirme que el pin declarado en el programa corresponda al puerto donde está conectado el módulo, y conecte el módulo antes de encender la placa." },
      ],
    },
    fr: {
      summary: "Carte support avec batterie intégrée, ports GPIO, servo et moteur à encodeur, port de charge et LED d'état.",
      principle: "La carte d'extension reçoit la micro:bit V2 et déporte ses broches vers des ports repérés : GPIO, ports servo, ports moteur à encodeur, la batterie intégrée, le port de charge et la LED d'état de charge. Elle fournit aux modules plus de courant que la micro:bit ne peut en donner seule, ce qui rend possibles les activités avec moteurs et servomoteurs.",
      applications: "C'est la base de toutes les activités de robotique du kit : elle alimente la micro:bit, entraîne les moteurs et les servomoteurs, et offre aux élèves un emplacement repéré pour brancher chaque module.",
      wiringNote: "Insérez la micro:bit dans le support avec la matrice de LED vers le côté indiqué, puis repérez chaque groupe de ports avant de brancher un module.",
      programming: "La matrice de LED de la micro:bit affiche un cœur, ce qui confirme que la carte alimente la micro:bit et que le programme a bien été téléchargé.",
      troubleshooting: [
        { issue: "La micro:bit ne s'allume pas une fois installée sur la carte", fix: "Vérifiez que l'interrupteur de la carte est en position allumée et que la batterie est chargée : branchez l'adaptateur et observez la LED d'état. Réinsérez ensuite la micro:bit à fond dans le support, matrice de LED vers le côté indiqué." },
        { issue: "Un module branché sur un port ne répond pas", fix: "Chaque groupe de ports correspond à des broches précises. Vérifiez que la broche déclarée dans le programme correspond au port utilisé, et branchez le module avant de mettre la carte sous tension." },
      ],
    },
    pt: {
      summary: "Placa base com bateria integrada, portas GPIO, de servo e de motor com encoder, porta de carga e LED de estado.",
      principle: "A placa de expansão acomoda a micro:bit V2 e leva seus pinos para portas identificadas: GPIO, portas de servo, portas de motor com encoder, a bateria integrada, a porta de carga e o LED de estado de carga. Ela fornece aos módulos mais corrente do que a micro:bit consegue entregar sozinha, e é isso que torna possíveis as atividades com motores e servos.",
      applications: "É a base de todas as atividades de robótica do kit: alimenta a micro:bit, aciona os motores e servos e dá ao aluno um lugar identificado para conectar cada módulo.",
      wiringNote: "Encaixe a micro:bit no soquete com a matriz de LED voltada para o lado indicado e depois identifique cada grupo de portas antes de conectar um módulo.",
      programming: "A matriz de LED da micro:bit mostra um coração, o que confirma que a placa está alimentando a micro:bit e que o programa foi baixado corretamente.",
      troubleshooting: [
        { issue: "A micro:bit não liga quando colocada na placa", fix: "Verifique se a chave de energia da placa está ligada e se a bateria tem carga: conecte o adaptador e observe o LED de estado. Depois encaixe a micro:bit até o fim no soquete, com a matriz de LED voltada para o lado indicado." },
        { issue: "Um módulo conectado a uma porta não responde", fix: "Cada grupo de portas corresponde a pinos específicos. Confirme que o pino declarado no programa corresponde à porta usada e conecte o módulo antes de ligar a placa." },
      ],
    },
  },

  "power-adapter": {
    en: {
      summary: "5 V / 1 A CE-certified adapter that charges the expansion board battery.",
      principle: "Wide input voltage range: 100–240 V, compatible with mains power worldwide. Output specification is 5V/1A with a rated power of 5W. CE safety certified and classified as an LPS (Limited Power Source), it uses a switching voltage-regulation design, making it suitable for powering small digital devices — safe, compliant, and highly adaptable.",
      applications: "It charges the expansion board battery between classes, so the robotics activities can run without being tethered to a computer.",
      programming: "",
      statesNote: "While charging, the expansion board status LED is red. Once fully charged, the LED turns green.",
      troubleshooting: [
        { issue: "The status LED does not light when the adapter is connected", fix: "Check the adapter is fully seated in the charging port and that the wall outlet has power. If the LED still does not light, try another outlet before reporting the adapter as faulty." },
        { issue: "The LED stays red for a long time", fix: "A fully depleted battery takes longer to charge. If the LED is still red after several hours, unplug the adapter, stop using the board and report it. Only charge with the 5 V / 1 A adapter supplied with the kit." },
      ],
    },
    es: {
      summary: "Adaptador de 5 V / 1 A con certificación CE que carga la batería de la placa de expansión.",
      principle: "Tiene un rango amplio de tensión de entrada, de 100 a 240 V, compatible con la red eléctrica de cualquier país. La salida es de 5 V / 1 A, con una potencia nominal de 5 W. Cuenta con certificación de seguridad CE y está clasificado como LPS (fuente de potencia limitada). Usa un diseño de regulación conmutada, apropiado para alimentar dispositivos digitales pequeños: seguro, en norma y muy adaptable.",
      applications: "Carga la batería de la placa de expansión entre clases, de modo que las actividades de robótica puedan hacerse sin depender de una computadora.",
      programming: "",
      statesNote: "Durante la carga, el LED de estado de la placa de expansión está rojo. Cuando la carga se completa, el LED pasa a verde.",
      troubleshooting: [
        { issue: "El LED de estado no se enciende al conectar el adaptador", fix: "Verifique que el adaptador esté bien insertado en el puerto de carga y que el tomacorriente tenga energía. Si el LED sigue apagado, pruebe en otro tomacorriente antes de reportar el adaptador como defectuoso." },
        { issue: "El LED se queda en rojo mucho tiempo", fix: "Una batería completamente descargada tarda más en cargarse. Si después de varias horas el LED sigue rojo, desconecte el adaptador, deje de usar la placa y repórtelo. Cargue únicamente con el adaptador de 5 V / 1 A que viene con el kit." },
      ],
    },
    fr: {
      summary: "Adaptateur 5 V / 1 A certifié CE qui charge la batterie de la carte d'extension.",
      principle: "Large plage de tension d'entrée : 100 à 240 V, compatible avec le secteur dans le monde entier. La sortie est de 5 V / 1 A pour une puissance nominale de 5 W. Certifié CE et classé LPS (source à puissance limitée), il utilise une régulation à découpage, ce qui le rend adapté à l'alimentation de petits appareils numériques : sûr, conforme et très polyvalent.",
      applications: "Il recharge la batterie de la carte d'extension entre les cours, pour que les activités de robotique se déroulent sans être reliées à un ordinateur.",
      programming: "",
      statesNote: "Pendant la charge, la LED d'état de la carte d'extension est rouge. Une fois la charge terminée, la LED devient verte.",
      troubleshooting: [
        { issue: "La LED d'état ne s'allume pas quand l'adaptateur est branché", fix: "Vérifiez que l'adaptateur est bien enfoncé dans le port de charge et que la prise murale est alimentée. Si la LED reste éteinte, essayez une autre prise avant de déclarer l'adaptateur défectueux." },
        { issue: "La LED reste rouge très longtemps", fix: "Une batterie complètement déchargée met plus de temps à se recharger. Si la LED est toujours rouge après plusieurs heures, débranchez l'adaptateur, cessez d'utiliser la carte et signalez-le. Chargez uniquement avec l'adaptateur 5 V / 1 A fourni avec le kit." },
      ],
    },
    pt: {
      summary: "Adaptador de 5 V / 1 A com certificação CE que carrega a bateria da placa de expansão.",
      principle: "Tem faixa ampla de tensão de entrada, de 100 a 240 V, compatível com a rede elétrica de qualquer país. A saída é de 5 V / 1 A, com potência nominal de 5 W. Tem certificação de segurança CE e é classificado como LPS (fonte de potência limitada). Usa projeto de regulação chaveada, adequado para alimentar dispositivos digitais pequenos: seguro, em conformidade e muito adaptável.",
      applications: "Carrega a bateria da placa de expansão entre as aulas, para que as atividades de robótica funcionem sem depender de um computador.",
      programming: "",
      statesNote: "Durante a carga, o LED de estado da placa de expansão fica vermelho. Quando a carga termina, o LED fica verde.",
      troubleshooting: [
        { issue: "O LED de estado não acende ao conectar o adaptador", fix: "Verifique se o adaptador está bem encaixado na porta de carga e se a tomada tem energia. Se o LED continuar apagado, teste outra tomada antes de relatar o adaptador como defeituoso." },
        { issue: "O LED permanece vermelho por muito tempo", fix: "Uma bateria totalmente descarregada demora mais para carregar. Se depois de várias horas o LED continuar vermelho, desconecte o adaptador, pare de usar a placa e relate o caso. Carregue somente com o adaptador de 5 V / 1 A que vem com o kit." },
      ],
    },
  },

  potentiometer: {
    en: {
      summary: "Adjustable resistor that turns knob rotation into an analog voltage the micro:bit can read.",
      principle: "Internally consists of an adjustable resistor; turning the knob changes the voltage-divider resistance, converting the mechanical rotation angle into an analog voltage signal.",
      applications: "Commonly used for brightness adjustment (RGB strip dimming), motor speed control, volume control, manual servo angle control, sensor threshold calibration, industrial control voltage regulation, and manual gimbal operation.",
      wiringNote: "Three female-to-female jumper wires connect the module to the expansion board: power, ground and the analog signal.",
      programming: "The micro:bit LED matrix displays the potentiometer reading.",
      troubleshooting: [
        { issue: "The reading does not change when the knob is turned", fix: "The signal wire has to be on the analog pin declared in the program. Check that connection first, then confirm the power and ground wires are in the right order on the module." },
        { issue: "The value jumps around on its own", fix: "This is usually a loose jumper. Unplug and reseat all three connectors at both ends. A wire that is only half inserted reads as noise." },
      ],
    },
    es: {
      summary: "Resistor ajustable que convierte el giro de la perilla en una tensión analógica que la micro:bit puede leer.",
      principle: "Internamente está formado por un resistor ajustable: al girar la perilla cambia la resistencia del divisor de tensión, y así el ángulo de rotación mecánico se convierte en una señal de tensión analógica.",
      applications: "Se usa habitualmente para ajustar brillo (regulación de tiras RGB), controlar la velocidad de motores, regular volumen, mover manualmente el ángulo de un servo, calibrar umbrales de sensores, regular tensión en control industrial y operar estabilizadores en forma manual.",
      wiringNote: "Tres cables jumper hembra-hembra conectan el módulo a la placa de expansión: alimentación, tierra y la señal analógica.",
      programming: "La matriz de LED de la micro:bit muestra la lectura del potenciómetro.",
      troubleshooting: [
        { issue: "La lectura no cambia al girar la perilla", fix: "El cable de señal tiene que estar en el pin analógico declarado en el programa. Revise esa conexión primero y después confirme que los cables de alimentación y tierra estén en el orden correcto en el módulo." },
        { issue: "El valor salta solo", fix: "Casi siempre es un jumper flojo. Desconecte y vuelva a conectar los tres cables en ambos extremos. Un cable insertado a medias se lee como ruido." },
      ],
    },
    fr: {
      summary: "Résistance ajustable qui convertit la rotation du bouton en tension analogique lisible par la micro:bit.",
      principle: "Le module est constitué d'une résistance ajustable : tourner le bouton modifie la résistance du diviseur de tension, ce qui convertit l'angle de rotation mécanique en un signal de tension analogique.",
      applications: "Utilisé couramment pour régler la luminosité (variation d'un ruban RVB), contrôler la vitesse d'un moteur, régler le volume, commander manuellement l'angle d'un servomoteur, calibrer des seuils de capteurs, réguler la tension en contrôle industriel et piloter manuellement un stabilisateur.",
      wiringNote: "Trois fils jumper femelle-femelle relient le module à la carte d'extension : alimentation, masse et signal analogique.",
      programming: "La matrice de LED de la micro:bit affiche la valeur lue sur le potentiomètre.",
      troubleshooting: [
        { issue: "La valeur ne change pas quand on tourne le bouton", fix: "Le fil de signal doit être sur la broche analogique déclarée dans le programme. Vérifiez d'abord cette connexion, puis confirmez que les fils d'alimentation et de masse sont dans le bon ordre sur le module." },
        { issue: "La valeur varie toute seule", fix: "C'est généralement un fil mal enfiché. Débranchez et rebranchez les trois connecteurs aux deux extrémités. Un fil à moitié inséré est lu comme du bruit." },
      ],
    },
    pt: {
      summary: "Resistor ajustável que converte o giro do botão em uma tensão analógica que a micro:bit pode ler.",
      principle: "Internamente é formado por um resistor ajustável: girar o botão altera a resistência do divisor de tensão, convertendo o ângulo de rotação mecânico em um sinal de tensão analógico.",
      applications: "Usado com frequência para ajustar brilho (regulagem de fitas RGB), controlar a velocidade de motores, regular volume, mover manualmente o ângulo de um servo, calibrar limiares de sensores, regular tensão em controle industrial e operar estabilizadores manualmente.",
      wiringNote: "Três cabos jumper fêmea-fêmea conectam o módulo à placa de expansão: alimentação, terra e o sinal analógico.",
      programming: "A matriz de LED da micro:bit mostra a leitura do potenciômetro.",
      troubleshooting: [
        { issue: "A leitura não muda ao girar o botão", fix: "O cabo de sinal precisa estar no pino analógico declarado no programa. Verifique essa conexão primeiro e depois confirme que os cabos de alimentação e terra estão na ordem correta no módulo." },
        { issue: "O valor oscila sozinho", fix: "Quase sempre é um jumper solto. Desconecte e reconecte os três cabos nas duas pontas. Um cabo inserido pela metade é lido como ruído." },
      ],
    },
  },

  "color-sensor": {
    en: {
      summary: "Red, green, blue and infrared photodiodes that identify the colour of a nearby surface over I2C.",
      principle: "Equipped with red, green, blue, and infrared photodiodes. Light reflected off an object enters the sensing unit, and the chip captures the intensity signals of the three color channels, converting them to values via an ADC and comparing them against reference color values to determine the color. Some models include a white supplemental light to reduce ambient light interference, and output color data over I2C.",
      applications: "Commonly used for color-sorting carts, material color sorting, automatic RGB strip color matching, QR/color-block recognition, paper color detection, color-following smart cars, industrial color-difference inspection, interactive color-recognition toys, and experimental color data collection.",
      wiringNote: "Four female-to-female jumper wires: power, ground and the two I2C lines. The I2C wires have to go to the labelled I2C pins on the expansion board.",
      programming: "The micro:bit LED matrix displays the letter corresponding to the detected colour — R for red, G for green, B for blue.",
      troubleshooting: [
        { issue: "Color sensor readings are inaccurate", fix: "Check whether the surrounding ambient light is too strong, and check whether the color sensor is mounted too high. It should sit about 1 cm above the surface." },
      ],
    },
    es: {
      summary: "Fotodiodos rojo, verde, azul e infrarrojo que identifican el color de una superficie cercana y lo informan por I2C.",
      principle: "Está equipado con fotodiodos rojo, verde, azul e infrarrojo. La luz reflejada por un objeto entra en la unidad sensora y el chip captura la intensidad de los tres canales de color, los convierte en valores mediante un ADC y los compara con valores de referencia para determinar el color. Algunos modelos incluyen una luz blanca complementaria para reducir la interferencia de la luz ambiente, y entregan los datos de color por I2C.",
      applications: "Se usa habitualmente en carros clasificadores por color, separación de materiales por color, coincidencia automática de color en tiras RGB, reconocimiento de códigos y bloques de color, detección del color del papel, autos que siguen colores, inspección industrial de diferencia de color, juguetes interactivos de reconocimiento de color y recolección experimental de datos de color.",
      wiringNote: "Cuatro cables jumper hembra-hembra: alimentación, tierra y las dos líneas de I2C. Los cables de I2C deben ir a los pines de I2C rotulados en la placa de expansión.",
      programming: "La matriz de LED de la micro:bit muestra la letra correspondiente al color detectado: R para rojo, G para verde y B para azul.",
      troubleshooting: [
        { issue: "Las lecturas del sensor de color son imprecisas", fix: "Verifique si la luz ambiente del entorno es demasiado fuerte y si el sensor de color está montado demasiado alto. Debe quedar a alrededor de 1 cm de la superficie." },
      ],
    },
    fr: {
      summary: "Photodiodes rouge, verte, bleue et infrarouge qui identifient la couleur d'une surface proche et la transmettent en I2C.",
      principle: "Le module est équipé de photodiodes rouge, verte, bleue et infrarouge. La lumière réfléchie par un objet entre dans l'unité de détection et la puce capte l'intensité des trois canaux de couleur, les convertit en valeurs par un CAN et les compare à des valeurs de référence pour déterminer la couleur. Certains modèles intègrent une lumière blanche d'appoint pour réduire l'interférence de la lumière ambiante, et transmettent les données de couleur en I2C.",
      applications: "Utilisé couramment pour les chariots de tri par couleur, le tri de matériaux, l'accord automatique de couleur d'un ruban RVB, la reconnaissance de codes et de blocs de couleur, la détection de la couleur du papier, les voitures qui suivent une couleur, le contrôle industriel des écarts de couleur, les jouets interactifs de reconnaissance de couleur et la collecte expérimentale de données de couleur.",
      wiringNote: "Quatre fils jumper femelle-femelle : alimentation, masse et les deux lignes I2C. Les fils I2C doivent aller sur les broches I2C repérées de la carte d'extension.",
      programming: "La matrice de LED de la micro:bit affiche la lettre correspondant à la couleur détectée : R pour rouge, G pour vert, B pour bleu.",
      troubleshooting: [
        { issue: "Les mesures du capteur de couleur sont imprécises", fix: "Vérifiez si la lumière ambiante est trop forte et si le capteur de couleur est monté trop haut. Il doit se situer à environ 1 cm de la surface." },
      ],
    },
    pt: {
      summary: "Fotodiodos vermelho, verde, azul e infravermelho que identificam a cor de uma superfície próxima e informam por I2C.",
      principle: "É equipado com fotodiodos vermelho, verde, azul e infravermelho. A luz refletida por um objeto entra na unidade sensora e o chip captura a intensidade dos três canais de cor, converte em valores por meio de um ADC e compara com valores de referência para determinar a cor. Alguns modelos incluem uma luz branca complementar para reduzir a interferência da luz ambiente, e enviam os dados de cor por I2C.",
      applications: "Usado com frequência em carros classificadores por cor, separação de materiais por cor, correspondência automática de cor em fitas RGB, reconhecimento de códigos e blocos de cor, detecção da cor do papel, carros que seguem cores, inspeção industrial de diferença de cor, brinquedos interativos de reconhecimento de cor e coleta experimental de dados de cor.",
      wiringNote: "Quatro cabos jumper fêmea-fêmea: alimentação, terra e as duas linhas de I2C. Os cabos de I2C devem ir aos pinos de I2C identificados na placa de expansão.",
      programming: "A matriz de LED da micro:bit mostra a letra correspondente à cor detectada: R para vermelho, G para verde e B para azul.",
      troubleshooting: [
        { issue: "As leituras do sensor de cor são imprecisas", fix: "Verifique se a luz ambiente está muito forte e se o sensor de cor está montado muito alto. Ele deve ficar a cerca de 1 cm da superfície." },
      ],
    },
  },

  "soil-moisture": {
    en: {
      summary: "Two probes that read soil conductivity and turn it into a moisture value.",
      principle: "Uses two metal probes inserted into the soil. The higher the soil moisture content, the stronger the conductivity and the lower the resistance between the two electrodes. The circuit uses a voltage-divider to convert the resistance change into an analog voltage, which the main chip's ADC captures and converts into a moisture reading.",
      applications: "Commonly used for automatic watering devices for potted plants, soil-moisture monitoring in agricultural greenhouses, garden irrigation control systems, smart garden watering, farmland moisture data collection, bonsai care reminders, maker water-control experiments, and greenhouse water/fertilizer coordination.",
      wiringNote: "Three female-to-female jumper wires connect the module to the expansion board: power, ground and the analog signal.",
      programming: "The micro:bit LED matrix displays the soil moisture reading.",
      troubleshooting: [
        { issue: "The reading never changes", fix: "The probes have to be inserted into the soil, not just resting on the surface. Test the two extremes first: the reading in dry air and the reading with the probes in wet soil should be clearly different. If they are not, check the signal wire is on the analog pin declared in the program." },
        { issue: "Readings drift between classes, or the probes discolour", fix: "Leaving the probes powered in wet soil for long periods corrodes them. Take the probes out and dry them after each activity, and keep the reading time short." },
      ],
    },
    es: {
      summary: "Dos sondas que leen la conductividad del suelo y la convierten en un valor de humedad.",
      principle: "Usa dos sondas metálicas que se insertan en la tierra. Cuanto mayor es la humedad del suelo, mayor es la conductividad y menor la resistencia entre los dos electrodos. El circuito usa un divisor de tensión para convertir el cambio de resistencia en una tensión analógica, que el ADC del chip principal capta y convierte en una lectura de humedad.",
      applications: "Se usa habitualmente en riego automático de macetas, monitoreo de humedad en invernaderos, sistemas de control de riego de jardines, riego inteligente, recolección de datos de humedad en cultivos, recordatorios de cuidado de bonsáis, experimentos de control de agua y coordinación de riego y fertilización en invernaderos.",
      wiringNote: "Tres cables jumper hembra-hembra conectan el módulo a la placa de expansión: alimentación, tierra y la señal analógica.",
      programming: "La matriz de LED de la micro:bit muestra la lectura de humedad del suelo.",
      troubleshooting: [
        { issue: "La lectura nunca cambia", fix: "Las sondas tienen que estar insertadas en la tierra, no apoyadas en la superficie. Pruebe primero los dos extremos: la lectura al aire seco y la lectura con las sondas en tierra húmeda deberían ser claramente distintas. Si no lo son, verifique que el cable de señal esté en el pin analógico declarado en el programa." },
        { issue: "Las lecturas se corren entre clases, o las sondas se decoloran", fix: "Dejar las sondas energizadas en tierra húmeda durante mucho tiempo las corroe. Retire las sondas y séquelas después de cada actividad, y mantenga corto el tiempo de medición." },
      ],
    },
    fr: {
      summary: "Deux sondes qui mesurent la conductivité du sol et la convertissent en valeur d'humidité.",
      principle: "Le module utilise deux sondes métalliques insérées dans le sol. Plus le sol est humide, plus la conductivité est forte et plus la résistance entre les deux électrodes est faible. Le circuit utilise un diviseur de tension pour convertir la variation de résistance en tension analogique, que le CAN de la puce principale capte et transforme en mesure d'humidité.",
      applications: "Utilisé couramment pour l'arrosage automatique de plantes en pot, le suivi de l'humidité en serre, les systèmes de contrôle d'irrigation de jardins, l'arrosage intelligent, la collecte de données d'humidité agricoles, les rappels d'entretien des bonsaïs, les expériences de contrôle de l'eau et la gestion eau/engrais en serre.",
      wiringNote: "Trois fils jumper femelle-femelle relient le module à la carte d'extension : alimentation, masse et signal analogique.",
      programming: "La matrice de LED de la micro:bit affiche la mesure d'humidité du sol.",
      troubleshooting: [
        { issue: "La mesure ne change jamais", fix: "Les sondes doivent être enfoncées dans la terre, pas simplement posées dessus. Testez d'abord les deux extrêmes : la mesure à l'air sec et la mesure dans une terre humide doivent être nettement différentes. Sinon, vérifiez que le fil de signal est sur la broche analogique déclarée dans le programme." },
        { issue: "Les mesures dérivent d'un cours à l'autre, ou les sondes se décolorent", fix: "Laisser les sondes sous tension dans une terre humide pendant longtemps les corrode. Retirez et séchez les sondes après chaque activité, et limitez la durée de mesure." },
      ],
    },
    pt: {
      summary: "Duas sondas que leem a condutividade do solo e a convertem em um valor de umidade.",
      principle: "Usa duas sondas metálicas inseridas no solo. Quanto maior a umidade do solo, maior a condutividade e menor a resistência entre os dois eletrodos. O circuito usa um divisor de tensão para converter a variação de resistência em uma tensão analógica, que o ADC do chip principal capta e converte em uma leitura de umidade.",
      applications: "Usado com frequência em rega automática de vasos, monitoramento de umidade em estufas, sistemas de controle de irrigação de jardins, rega inteligente, coleta de dados de umidade em lavouras, lembretes de cuidado de bonsais, experimentos de controle de água e gestão de água e fertilizante em estufas.",
      wiringNote: "Três cabos jumper fêmea-fêmea conectam o módulo à placa de expansão: alimentação, terra e o sinal analógico.",
      programming: "A matriz de LED da micro:bit mostra a leitura de umidade do solo.",
      troubleshooting: [
        { issue: "A leitura nunca muda", fix: "As sondas precisam estar inseridas na terra, não apoiadas na superfície. Teste primeiro os dois extremos: a leitura no ar seco e a leitura com as sondas em terra úmida devem ser claramente diferentes. Se não forem, verifique se o cabo de sinal está no pino analógico declarado no programa." },
        { issue: "As leituras mudam entre as aulas, ou as sondas ficam manchadas", fix: "Deixar as sondas energizadas em terra úmida por muito tempo causa corrosão. Retire e seque as sondas após cada atividade e mantenha curto o tempo de medição." },
      ],
    },
  },

  "servo-360": {
    en: {
      summary: "Continuous-rotation servo where the signal sets direction and speed instead of an angle.",
      principle: "A standard servo is limited to a fixed angular range, while a 360° continuous-rotation servo has a modified internal limiting mechanism so the PWM signal no longer controls angle, but instead controls direction and speed. Specific duty-cycle signals produce forward rotation, reverse rotation, and stop; pulse width determines rotation speed. It has no angle-positioning capability and is functionally equivalent to a small geared DC motor.",
      applications: "Commonly used for drive wheels on smart cars, continuous gimbal rotation, material conveyor rollers, mechanical turntables, water valve switches, gimbal scanning devices, robot chassis, toy rotating mechanisms, and drive units for maker line-following cars.",
      wiringNote: "Wiring is the same as the 180° servo: power, ground and signal. What changes is the meaning of the signal, not the connection.",
      programming: "Press button A to rotate the servo forward at speed 50 for one second; press button B to rotate it in reverse at speed 100 for one second.",
      troubleshooting: [
        { issue: "The servo keeps turning slowly when it should be stopped", fix: "A continuous-rotation servo has no angle positioning: stop is a specific signal value, not a position. Make sure the program sends the stop block after the movement. Units that still creep have a trim adjustment that needs to be set once." },
        { issue: "It turns in the wrong direction", fix: "Direction comes from the sign of the speed value in the program. Change it in the program rather than swapping the power wires, which would connect the servo backwards." },
      ],
    },
    es: {
      summary: "Servo de rotación continua en el que la señal define el sentido y la velocidad, no un ángulo.",
      principle: "Un servo estándar está limitado a un rango angular fijo, mientras que un servo de rotación continua de 360° tiene el mecanismo interno de tope modificado, de modo que la señal PWM ya no controla el ángulo sino el sentido y la velocidad. Determinados ciclos de trabajo producen giro hacia adelante, giro inverso y detención; el ancho del pulso determina la velocidad de rotación. No tiene capacidad de posicionamiento angular y es funcionalmente equivalente a un pequeño motor de corriente continua con reductora.",
      applications: "Se usa habitualmente en ruedas motrices de autos inteligentes, giro continuo de estabilizadores, rodillos de cintas transportadoras, plataformas giratorias, válvulas de agua, dispositivos de barrido, chasis de robots, mecanismos giratorios de juguetes y tracción de autos seguidores de línea.",
      wiringNote: "El cableado es igual al del servo de 180°: alimentación, tierra y señal. Lo que cambia es el significado de la señal, no la conexión.",
      programming: "Presione el botón A para girar el servo hacia adelante a velocidad 50 durante un segundo; presione el botón B para girarlo en sentido inverso a velocidad 100 durante un segundo.",
      troubleshooting: [
        { issue: "El servo sigue girando despacio cuando debería estar detenido", fix: "Un servo de rotación continua no tiene posicionamiento angular: la detención es un valor de señal determinado, no una posición. Verifique que el programa envíe el bloque de detención después del movimiento. Las unidades que igual siguen girando tienen un ajuste de calibración que hay que fijar una vez." },
        { issue: "Gira en el sentido equivocado", fix: "El sentido depende del signo del valor de velocidad en el programa. Cámbielo en el programa y no invirtiendo los cables de alimentación, porque eso conectaría el servo al revés." },
      ],
    },
    fr: {
      summary: "Servomoteur à rotation continue où le signal définit le sens et la vitesse, et non un angle.",
      principle: "Un servomoteur standard est limité à une plage angulaire fixe, alors qu'un servomoteur à rotation continue 360° a un mécanisme de butée interne modifié : le signal PWM ne contrôle plus l'angle mais le sens et la vitesse. Certains rapports cycliques produisent la rotation avant, la rotation arrière et l'arrêt ; la largeur d'impulsion détermine la vitesse. Il n'a aucune capacité de positionnement angulaire et équivaut fonctionnellement à un petit moteur à courant continu avec réducteur.",
      applications: "Utilisé couramment pour les roues motrices de voitures intelligentes, la rotation continue de stabilisateurs, les rouleaux de convoyeurs, les plateaux tournants, les vannes d'eau, les dispositifs de balayage, les châssis de robots, les mécanismes rotatifs de jouets et la traction des voitures suiveuses de ligne.",
      wiringNote: "Le câblage est identique à celui du servomoteur 180° : alimentation, masse et signal. Ce qui change est la signification du signal, pas la connexion.",
      programming: "Appuyez sur le bouton A pour faire tourner le servomoteur vers l'avant à la vitesse 50 pendant une seconde ; appuyez sur le bouton B pour le faire tourner en sens inverse à la vitesse 100 pendant une seconde.",
      troubleshooting: [
        { issue: "Le servomoteur continue de tourner lentement alors qu'il devrait être arrêté", fix: "Un servomoteur à rotation continue n'a pas de positionnement angulaire : l'arrêt est une valeur de signal précise, pas une position. Vérifiez que le programme envoie bien le bloc d'arrêt après le mouvement. Les exemplaires qui dérivent encore possèdent un réglage de calibrage à faire une fois." },
        { issue: "Il tourne dans le mauvais sens", fix: "Le sens dépend du signe de la valeur de vitesse dans le programme. Modifiez-le dans le programme plutôt que d'inverser les fils d'alimentation, ce qui brancherait le servomoteur à l'envers." },
      ],
    },
    pt: {
      summary: "Servo de rotação contínua em que o sinal define o sentido e a velocidade, não um ângulo.",
      principle: "Um servo padrão é limitado a uma faixa angular fixa, enquanto um servo de rotação contínua de 360° tem o mecanismo interno de limite modificado, de modo que o sinal PWM não controla mais o ângulo, mas o sentido e a velocidade. Determinados ciclos de trabalho produzem rotação para frente, rotação inversa e parada; a largura do pulso determina a velocidade. Não tem capacidade de posicionamento angular e é funcionalmente equivalente a um pequeno motor de corrente contínua com redutor.",
      applications: "Usado com frequência em rodas motrizes de carros inteligentes, rotação contínua de estabilizadores, roletes de transportadores, mesas giratórias, válvulas de água, dispositivos de varredura, chassis de robôs, mecanismos giratórios de brinquedos e tração de carros seguidores de linha.",
      wiringNote: "A ligação é igual à do servo de 180°: alimentação, terra e sinal. O que muda é o significado do sinal, não a conexão.",
      programming: "Pressione o botão A para girar o servo para frente na velocidade 50 por um segundo; pressione o botão B para girá-lo em sentido inverso na velocidade 100 por um segundo.",
      troubleshooting: [
        { issue: "O servo continua girando devagar quando deveria estar parado", fix: "Um servo de rotação contínua não tem posicionamento angular: a parada é um valor de sinal específico, não uma posição. Verifique se o programa envia o bloco de parada depois do movimento. As unidades que ainda giram têm um ajuste de calibração que precisa ser feito uma vez." },
        { issue: "Gira no sentido errado", fix: "O sentido depende do sinal do valor de velocidade no programa. Altere no programa e não invertendo os cabos de alimentação, o que ligaria o servo ao contrário." },
      ],
    },
  },

  "lcd-module": {
    en: {
      summary: "1602 liquid-crystal display driven over I2C to show characters and simple graphics.",
      principle: "Uses the electro-optic effect of liquid crystals: controlling the electrode voltage changes the light-transmission state of the liquid crystal, and combined with a backlight panel this produces characters and graphics. The 1602 display uses I2C communication; the main controller transmits the display data, and the driver chip maps it onto a pixel matrix to output text and graphics — low power consumption, simple structure.",
      applications: "Commonly used for microcontroller status displays, temperature/humidity meters, smart alarm clocks, charging-station parameter panels, home-appliance control panels, maker project data displays, water/electric meter readouts, in-vehicle simple displays, and equipment operating-parameter windows.",
      wiringNote: "Four female-to-female jumper wires: power, ground and the two I2C lines. The display will not respond if the I2C pair is swapped.",
      programming: "Press button A to display the letter A on the LCD screen, press button B to display the letter B.",
      troubleshooting: [
        { issue: "The backlight is on but the screen stays blank", fix: "The display is powered but not receiving data. Confirm the initialisation block runs on start, and check that the I2C address in the program matches the module: 1602 displays are usually at 0x27 or 0x3F." },
        { issue: "Nothing at all appears and the backlight is off", fix: "Start with power and ground, then check the I2C pair: SDA and SCL must go to the labelled I2C pins on the expansion board, and they are not interchangeable." },
      ],
    },
    es: {
      summary: "Pantalla de cristal líquido 1602 controlada por I2C para mostrar caracteres y gráficos simples.",
      principle: "Aprovecha el efecto electroóptico de los cristales líquidos: al controlar la tensión de los electrodos cambia el estado de transmisión de la luz del cristal líquido, y en combinación con un panel de retroiluminación eso produce caracteres y gráficos. La pantalla 1602 usa comunicación I2C: el controlador principal transmite los datos y el chip de control los distribuye en una matriz de píxeles para mostrar texto y gráficos, con bajo consumo y una estructura simple.",
      applications: "Se usa habitualmente en pantallas de estado de microcontroladores, medidores de temperatura y humedad, despertadores inteligentes, paneles de estaciones de carga, paneles de electrodomésticos, visualización de datos en proyectos maker, lecturas de medidores de agua y electricidad, pantallas simples en vehículos y ventanas de parámetros de equipos.",
      wiringNote: "Cuatro cables jumper hembra-hembra: alimentación, tierra y las dos líneas de I2C. La pantalla no responde si el par de I2C está invertido.",
      programming: "Presione el botón A para mostrar la letra A en la pantalla LCD y el botón B para mostrar la letra B.",
      troubleshooting: [
        { issue: "La retroiluminación enciende pero la pantalla queda en blanco", fix: "La pantalla tiene alimentación pero no recibe datos. Confirme que el bloque de inicialización se ejecute al inicio y verifique que la dirección I2C del programa coincida con la del módulo: las pantallas 1602 suelen estar en 0x27 o 0x3F." },
        { issue: "No aparece nada y la retroiluminación está apagada", fix: "Empiece por alimentación y tierra, y después revise el par de I2C: SDA y SCL deben ir a los pines de I2C rotulados en la placa de expansión y no son intercambiables." },
      ],
    },
    fr: {
      summary: "Écran à cristaux liquides 1602 piloté en I2C pour afficher des caractères et des graphiques simples.",
      principle: "L'écran exploite l'effet électro-optique des cristaux liquides : en contrôlant la tension des électrodes, on modifie l'état de transmission de la lumière du cristal liquide, ce qui, combiné à un panneau de rétroéclairage, produit des caractères et des graphiques. L'écran 1602 utilise la communication I2C : le contrôleur principal transmet les données et la puce de commande les répartit sur une matrice de pixels pour afficher du texte et des graphiques, avec une faible consommation et une structure simple.",
      applications: "Utilisé couramment pour les afficheurs d'état de microcontrôleurs, les thermomètres/hygromètres, les réveils intelligents, les panneaux de bornes de recharge, les panneaux de commande d'appareils ménagers, l'affichage de données de projets maker, la lecture de compteurs d'eau et d'électricité, les afficheurs simples embarqués et les fenêtres de paramètres d'équipements.",
      wiringNote: "Quatre fils jumper femelle-femelle : alimentation, masse et les deux lignes I2C. L'écran ne répond pas si la paire I2C est inversée.",
      programming: "Appuyez sur le bouton A pour afficher la lettre A sur l'écran LCD et sur le bouton B pour afficher la lettre B.",
      troubleshooting: [
        { issue: "Le rétroéclairage s'allume mais l'écran reste vide", fix: "L'écran est alimenté mais ne reçoit pas de données. Vérifiez que le bloc d'initialisation s'exécute au démarrage et que l'adresse I2C du programme correspond au module : les écrans 1602 sont généralement en 0x27 ou 0x3F." },
        { issue: "Rien ne s'affiche et le rétroéclairage est éteint", fix: "Commencez par l'alimentation et la masse, puis vérifiez la paire I2C : SDA et SCL doivent aller sur les broches I2C repérées de la carte d'extension et ne sont pas interchangeables." },
      ],
    },
    pt: {
      summary: "Display de cristal líquido 1602 controlado por I2C para mostrar caracteres e gráficos simples.",
      principle: "Aproveita o efeito eletro-óptico dos cristais líquidos: controlar a tensão dos eletrodos altera o estado de transmissão de luz do cristal líquido e, combinado com um painel de retroiluminação, isso produz caracteres e gráficos. O display 1602 usa comunicação I2C: o controlador principal transmite os dados e o chip de controle os distribui em uma matriz de pixels para exibir texto e gráficos, com baixo consumo e estrutura simples.",
      applications: "Usado com frequência em displays de estado de microcontroladores, medidores de temperatura e umidade, despertadores inteligentes, painéis de estações de carga, painéis de eletrodomésticos, exibição de dados em projetos maker, leitura de medidores de água e energia, displays simples em veículos e janelas de parâmetros de equipamentos.",
      wiringNote: "Quatro cabos jumper fêmea-fêmea: alimentação, terra e as duas linhas de I2C. O display não responde se o par de I2C estiver invertido.",
      programming: "Pressione o botão A para mostrar a letra A no display LCD e o botão B para mostrar a letra B.",
      troubleshooting: [
        { issue: "A retroiluminação acende mas a tela fica em branco", fix: "O display está alimentado mas não recebe dados. Confirme que o bloco de inicialização é executado no início e verifique se o endereço I2C do programa corresponde ao módulo: displays 1602 geralmente ficam em 0x27 ou 0x3F." },
        { issue: "Nada aparece e a retroiluminação está apagada", fix: "Comece pela alimentação e pelo terra e depois verifique o par de I2C: SDA e SCL devem ir aos pinos de I2C identificados na placa de expansão e não são intercambiáveis." },
      ],
    },
  },

  joystick: {
    en: {
      summary: "Two analog potentiometers plus a push-button, for combined direction and button input.",
      principle: "The module consists of two independent potentiometers (X-axis and Y-axis) plus one push-button switch. Moving the joystick changes the resistance of the X and Y analog potentiometers; the main controller reads the voltage via ADC and converts it into the joystick's offset, with both channels at a mid-level voltage when centered. Pressing the joystick straight down triggers the bottom button, outputting a digital high/low signal, enabling combined directional and button input.",
      applications: "Widely used for microcontroller interactive control: remote-control car gimbal steering, drone attitude control, robotic arm joint adjustment, DIY game controllers, in-vehicle control panels, camera-gimbal angle adjustment, simple industrial control consoles, and manual control/debugging of smart robots.",
      wiringNote: "Five female-to-female jumper wires: power, ground, the two analog axes and the button. Each axis needs its own analog pin.",
      programming: "The micro:bit LED matrix displays the joystick's X-axis value.",
      troubleshooting: [
        { issue: "One axis responds and the other does not", fix: "Each axis is a separate analog channel on its own pin. Check the signal wire of the axis that fails and confirm the pin declared in the program matches where it is connected." },
        { issue: "The centre value is not stable, or the program reacts when the stick is at rest", fix: "Centre is a mid-level voltage that varies slightly from unit to unit, so an exact value never matches. Compare against a tolerance band in the program instead of a single number." },
      ],
    },
    es: {
      summary: "Dos potenciómetros analógicos más un pulsador, para combinar entrada de dirección y de botón.",
      principle: "El módulo está formado por dos potenciómetros independientes (eje X y eje Y) más un pulsador. Al mover la palanca cambia la resistencia de los potenciómetros analógicos X e Y; el controlador principal lee la tensión con el ADC y la convierte en el desplazamiento de la palanca, con ambos canales en una tensión intermedia cuando está centrada. Al presionar la palanca hacia abajo se activa el pulsador inferior, que entrega una señal digital alta o baja, lo que permite combinar entrada de dirección y de botón.",
      applications: "Se usa mucho en control interactivo con microcontroladores: dirección de autos de radiocontrol, control de actitud de drones, ajuste de articulaciones de brazos robóticos, mandos de juego caseros, paneles de control en vehículos, ajuste de ángulo de estabilizadores de cámara, consolas simples de control industrial y control manual o depuración de robots.",
      wiringNote: "Cinco cables jumper hembra-hembra: alimentación, tierra, los dos ejes analógicos y el pulsador. Cada eje necesita su propio pin analógico.",
      programming: "La matriz de LED de la micro:bit muestra el valor del eje X del joystick.",
      troubleshooting: [
        { issue: "Un eje responde y el otro no", fix: "Cada eje es un canal analógico separado con su propio pin. Revise el cable de señal del eje que falla y confirme que el pin declarado en el programa corresponda al lugar donde está conectado." },
        { issue: "El valor de centro no es estable, o el programa reacciona con la palanca en reposo", fix: "El centro es una tensión intermedia que varía un poco entre unidades, así que un valor exacto nunca coincide. Compare contra un rango de tolerancia en el programa en lugar de un número único." },
      ],
    },
    fr: {
      summary: "Deux potentiomètres analogiques et un bouton-poussoir, pour combiner entrée directionnelle et bouton.",
      principle: "Le module comprend deux potentiomètres indépendants (axe X et axe Y) et un bouton-poussoir. Déplacer le manche modifie la résistance des potentiomètres analogiques X et Y ; le contrôleur principal lit la tension via le CAN et la convertit en déplacement du manche, les deux canaux étant à une tension moyenne au centre. Appuyer sur le manche vers le bas actionne le bouton inférieur, qui délivre un signal numérique haut ou bas, ce qui permet de combiner entrée directionnelle et bouton.",
      applications: "Largement utilisé pour le contrôle interactif avec microcontrôleur : direction de voitures radiocommandées, contrôle d'attitude de drones, réglage d'articulations de bras robotisés, manettes de jeu maison, panneaux de commande embarqués, réglage d'angle de stabilisateurs de caméra, consoles simples de contrôle industriel et pilotage manuel ou mise au point de robots.",
      wiringNote: "Cinq fils jumper femelle-femelle : alimentation, masse, les deux axes analogiques et le bouton. Chaque axe a besoin de sa propre broche analogique.",
      programming: "La matrice de LED de la micro:bit affiche la valeur de l'axe X du joystick.",
      troubleshooting: [
        { issue: "Un axe répond et l'autre non", fix: "Chaque axe est un canal analogique distinct avec sa propre broche. Vérifiez le fil de signal de l'axe défaillant et confirmez que la broche déclarée dans le programme correspond à celle utilisée." },
        { issue: "La valeur au centre n'est pas stable, ou le programme réagit au repos", fix: "Le centre est une tension moyenne qui varie légèrement d'un exemplaire à l'autre : une valeur exacte ne correspondra jamais. Comparez à une plage de tolérance dans le programme plutôt qu'à un nombre unique." },
      ],
    },
    pt: {
      summary: "Dois potenciômetros analógicos e um botão, para combinar entrada de direção e de botão.",
      principle: "O módulo é formado por dois potenciômetros independentes (eixo X e eixo Y) e um botão. Mover a alavanca altera a resistência dos potenciômetros analógicos X e Y; o controlador principal lê a tensão pelo ADC e a converte no deslocamento da alavanca, com os dois canais em tensão intermediária quando centralizada. Pressionar a alavanca para baixo aciona o botão inferior, que entrega um sinal digital alto ou baixo, permitindo combinar entrada de direção e de botão.",
      applications: "Muito usado em controle interativo com microcontroladores: direção de carros de controle remoto, controle de atitude de drones, ajuste de articulações de braços robóticos, controles de jogo caseiros, painéis de controle em veículos, ajuste de ângulo de estabilizadores de câmera, consoles simples de controle industrial e controle manual ou depuração de robôs.",
      wiringNote: "Cinco cabos jumper fêmea-fêmea: alimentação, terra, os dois eixos analógicos e o botão. Cada eixo precisa do seu próprio pino analógico.",
      programming: "A matriz de LED da micro:bit mostra o valor do eixo X do joystick.",
      troubleshooting: [
        { issue: "Um eixo responde e o outro não", fix: "Cada eixo é um canal analógico separado com o seu próprio pino. Verifique o cabo de sinal do eixo que falha e confirme que o pino declarado no programa corresponde ao local onde está conectado." },
        { issue: "O valor central não é estável, ou o programa reage com a alavanca em repouso", fix: "O centro é uma tensão intermediária que varia um pouco entre unidades, então um valor exato nunca coincide. Compare com uma faixa de tolerância no programa em vez de um número único." },
      ],
    },
  },

  ultrasonic: {
    en: {
      summary: "Emits an ultrasonic pulse and times the echo to calculate distance.",
      principle: "The core of the ultrasonic distance module is an ultrasonic transmitter, receiver, and control chip. The module emits an ultrasonic pulse, which reflects off an obstacle and is picked up by the receiver; the main controller records the time difference between transmission and reception and calculates the straight-line distance using the speed of sound. There is a blind zone at very close range, accuracy decreases at longer range, and it cannot reliably detect soft, sound-absorbing objects.",
      applications: "Commonly used for smart-car obstacle avoidance, automatic door sensing, and parking-radar distance alerts; non-contact liquid-level detection, parking-space detection, and environment mapping for robot vacuums; assembly-line material height detection, building occupancy lighting, and obstacle prediction for robots.",
      wiringNote: "Four female-to-female jumper wires: power, ground, Trig and Echo. Trig and Echo are not interchangeable.",
      programming: "The micro:bit LED matrix displays the ultrasonic distance reading.",
      troubleshooting: [
        { issue: "The reading is always 0 or a nonsense number", fix: "Trig and Echo are almost certainly swapped, or the pins declared in the program do not match the wiring. Check those two wires before anything else, then confirm power and ground." },
        { issue: "It does not detect an object that is clearly in front of it", fix: "The module has a blind zone at very close range and cannot read soft, sound-absorbing surfaces such as cloth or foam. Test with a flat rigid surface between roughly 10 cm and 1 m, held square to the sensor." },
      ],
    },
    es: {
      summary: "Emite un pulso ultrasónico y mide el tiempo del eco para calcular la distancia.",
      principle: "El núcleo del módulo son un emisor ultrasónico, un receptor y un chip de control. El módulo emite un pulso ultrasónico que se refleja en un obstáculo y es captado por el receptor; el controlador principal registra la diferencia de tiempo entre la emisión y la recepción y calcula la distancia en línea recta usando la velocidad del sonido. Tiene una zona ciega a muy corta distancia, pierde precisión a distancias grandes y no detecta de manera confiable objetos blandos que absorben el sonido.",
      applications: "Se usa habitualmente en autos que evitan obstáculos, sensores de puertas automáticas y alertas de distancia en sensores de estacionamiento; detección de nivel de líquidos sin contacto, detección de lugares de estacionamiento y mapeo del entorno en robots de limpieza; medición de altura de materiales en líneas de producción, iluminación por presencia y anticipación de obstáculos en robots.",
      wiringNote: "Cuatro cables jumper hembra-hembra: alimentación, tierra, Trig y Echo. Trig y Echo no son intercambiables.",
      programming: "La matriz de LED de la micro:bit muestra la lectura de distancia del ultrasónico.",
      troubleshooting: [
        { issue: "La lectura es siempre 0 o un número sin sentido", fix: "Con mucha probabilidad Trig y Echo están invertidos, o los pines declarados en el programa no corresponden al cableado. Revise esos dos cables antes que nada y después confirme alimentación y tierra." },
        { issue: "No detecta un objeto que está claramente delante", fix: "El módulo tiene una zona ciega a muy corta distancia y no puede leer superficies blandas que absorben el sonido, como tela o espuma. Pruebe con una superficie rígida y plana entre unos 10 cm y 1 m, enfrentada al sensor." },
      ],
    },
    fr: {
      summary: "Émet une impulsion ultrasonore et mesure le temps de l'écho pour calculer la distance.",
      principle: "Le module repose sur un émetteur ultrasonore, un récepteur et une puce de commande. Il émet une impulsion ultrasonore qui se réfléchit sur un obstacle et revient au récepteur ; le contrôleur principal mesure l'écart de temps entre l'émission et la réception et calcule la distance en ligne droite à partir de la vitesse du son. Il présente une zone aveugle à très courte distance, perd en précision à grande distance et ne détecte pas de façon fiable les objets mous qui absorbent le son.",
      applications: "Utilisé couramment pour l'évitement d'obstacles des voitures intelligentes, la détection des portes automatiques et les alertes de distance des radars de recul ; la détection de niveau de liquide sans contact, la détection de places de stationnement et la cartographie de l'environnement des robots aspirateurs ; la mesure de hauteur de matériaux sur ligne de production, l'éclairage à détection de présence et l'anticipation d'obstacles pour les robots.",
      wiringNote: "Quatre fils jumper femelle-femelle : alimentation, masse, Trig et Echo. Trig et Echo ne sont pas interchangeables.",
      programming: "La matrice de LED de la micro:bit affiche la distance mesurée.",
      troubleshooting: [
        { issue: "La mesure vaut toujours 0 ou un nombre absurde", fix: "Trig et Echo sont très probablement inversés, ou les broches déclarées dans le programme ne correspondent pas au câblage. Vérifiez ces deux fils en premier, puis l'alimentation et la masse." },
        { issue: "Il ne détecte pas un objet clairement placé devant lui", fix: "Le module a une zone aveugle à très courte distance et ne peut pas lire les surfaces molles qui absorbent le son, comme le tissu ou la mousse. Testez avec une surface rigide et plane entre environ 10 cm et 1 m, face au capteur." },
      ],
    },
    pt: {
      summary: "Emite um pulso ultrassônico e mede o tempo do eco para calcular a distância.",
      principle: "O núcleo do módulo é um emissor ultrassônico, um receptor e um chip de controle. O módulo emite um pulso ultrassônico que reflete em um obstáculo e é captado pelo receptor; o controlador principal registra a diferença de tempo entre a emissão e a recepção e calcula a distância em linha reta usando a velocidade do som. Tem uma zona cega a distâncias muito curtas, perde precisão em distâncias grandes e não detecta de forma confiável objetos macios que absorvem som.",
      applications: "Usado com frequência em carros que evitam obstáculos, sensores de portas automáticas e alertas de distância em sensores de estacionamento; detecção de nível de líquidos sem contato, detecção de vagas e mapeamento do ambiente em robôs aspiradores; medição de altura de materiais em linhas de produção, iluminação por presença e antecipação de obstáculos em robôs.",
      wiringNote: "Quatro cabos jumper fêmea-fêmea: alimentação, terra, Trig e Echo. Trig e Echo não são intercambiáveis.",
      programming: "A matriz de LED da micro:bit mostra a leitura de distância do ultrassônico.",
      troubleshooting: [
        { issue: "A leitura é sempre 0 ou um número sem sentido", fix: "Muito provavelmente Trig e Echo estão invertidos, ou os pinos declarados no programa não correspondem à ligação. Verifique esses dois cabos antes de tudo e depois confirme alimentação e terra." },
        { issue: "Não detecta um objeto que está claramente à frente", fix: "O módulo tem uma zona cega a distâncias muito curtas e não consegue ler superfícies macias que absorvem som, como tecido ou espuma. Teste com uma superfície rígida e plana entre cerca de 10 cm e 1 m, de frente para o sensor." },
      ],
    },
  },

  "line-tracking": {
    en: {
      summary: "Infrared probes that tell a black line from a white surface by how much light comes back.",
      principle: "The infrared emitter sends out infrared light. White surfaces reflect strongly, so most of the infrared light bounces back to the receiver, producing a high output level; black surfaces absorb light, reflecting only weakly, so the receiver outputs a low level. The main controller determines the position of the black line from these level changes to achieve path recognition. The module's potentiometer can be adjusted to tune detection sensitivity for different floor materials.",
      applications: "Commonly used for line-following in smart cars, track navigation for industrial AGVs, material positioning and sorting on assembly lines, obstacle-avoidance patrol robots following a track, and competitive robot racing along a path.",
      wiringNote: "Five female-to-female jumper wires: power, ground and one digital signal per probe. Note which probe goes to which pin before testing.",
      programming: "The micro:bit LED matrix displays the state of the middle probe of the 3-channel line tracking sensor: 1 when a black line is detected, 0 when it is not.",
      troubleshooting: [
        { issue: "The sensor reads the same value on black and on white", fix: "The module has a sensitivity potentiometer that has to be tuned for the actual floor. Hold the sensor about 5 to 10 mm above the surface and adjust it slowly until the reading changes between the line and the floor." },
        { issue: "It works in one classroom and not in another", fix: "Strong ambient light and glossy or dark floors both interfere with the reflected infrared. Re-tune the sensitivity on the surface actually being used, and shade the sensor from direct light." },
      ],
    },
    es: {
      summary: "Sondas infrarrojas que distinguen una línea negra de una superficie blanca según cuánta luz vuelve.",
      principle: "El emisor infrarrojo emite luz infrarroja. Las superficies blancas reflejan mucho, así que la mayor parte de la luz vuelve al receptor y la salida queda en nivel alto; las superficies negras absorben la luz y reflejan poco, así que el receptor entrega nivel bajo. El controlador principal determina la posición de la línea negra a partir de estos cambios de nivel y así reconoce el recorrido. El potenciómetro del módulo permite ajustar la sensibilidad de detección según el material del piso.",
      applications: "Se usa habitualmente en autos seguidores de línea, navegación por pista de vehículos industriales AGV, posicionamiento y clasificación de materiales en líneas de producción, robots de patrullaje que siguen un recorrido y competencias de robots sobre pista.",
      wiringNote: "Cinco cables jumper hembra-hembra: alimentación, tierra y una señal digital por cada sonda. Anote qué sonda va a qué pin antes de probar.",
      programming: "La matriz de LED de la micro:bit muestra el estado de la sonda central del sensor de tres canales: 1 cuando detecta línea negra y 0 cuando no.",
      troubleshooting: [
        { issue: "El sensor lee el mismo valor sobre negro y sobre blanco", fix: "El módulo tiene un potenciómetro de sensibilidad que hay que ajustar para el piso real. Sostenga el sensor a unos 5 a 10 mm de la superficie y ajústelo despacio hasta que la lectura cambie entre la línea y el piso." },
        { issue: "Funciona en un aula y en otra no", fix: "Tanto la luz ambiente fuerte como los pisos brillantes u oscuros interfieren con el infrarrojo reflejado. Vuelva a ajustar la sensibilidad sobre la superficie que se va a usar y proteja el sensor de la luz directa." },
      ],
    },
    fr: {
      summary: "Sondes infrarouges qui distinguent une ligne noire d'une surface blanche selon la lumière renvoyée.",
      principle: "L'émetteur envoie de la lumière infrarouge. Les surfaces blanches réfléchissent fortement, donc l'essentiel de la lumière revient au récepteur et la sortie est à l'état haut ; les surfaces noires absorbent la lumière et ne renvoient que peu, donc le récepteur délivre un état bas. Le contrôleur principal déduit la position de la ligne noire de ces changements d'état et reconnaît ainsi le parcours. Le potentiomètre du module permet de régler la sensibilité selon le revêtement de sol.",
      applications: "Utilisé couramment pour le suivi de ligne des voitures intelligentes, la navigation sur piste des AGV industriels, le positionnement et le tri de matériaux sur ligne de production, les robots de patrouille suivant un tracé et les courses de robots sur circuit.",
      wiringNote: "Cinq fils jumper femelle-femelle : alimentation, masse et un signal numérique par sonde. Notez quelle sonde va sur quelle broche avant l'essai.",
      programming: "La matrice de LED de la micro:bit affiche l'état de la sonde centrale du capteur à trois canaux : 1 lorsqu'une ligne noire est détectée, 0 sinon.",
      troubleshooting: [
        { issue: "Le capteur donne la même valeur sur le noir et sur le blanc", fix: "Le module possède un potentiomètre de sensibilité à régler pour le sol réellement utilisé. Maintenez le capteur à environ 5 à 10 mm de la surface et ajustez lentement jusqu'à ce que la valeur change entre la ligne et le sol." },
        { issue: "Il fonctionne dans une salle et pas dans une autre", fix: "Une lumière ambiante forte comme un sol brillant ou foncé perturbent l'infrarouge réfléchi. Réglez à nouveau la sensibilité sur la surface utilisée et protégez le capteur de la lumière directe." },
      ],
    },
    pt: {
      summary: "Sondas infravermelhas que distinguem uma linha preta de uma superfície branca pela luz que retorna.",
      principle: "O emissor envia luz infravermelha. Superfícies brancas refletem muito, então a maior parte da luz volta ao receptor e a saída fica em nível alto; superfícies pretas absorvem a luz e refletem pouco, então o receptor entrega nível baixo. O controlador principal determina a posição da linha preta a partir dessas mudanças de nível e assim reconhece o percurso. O potenciômetro do módulo permite ajustar a sensibilidade de detecção conforme o material do piso.",
      applications: "Usado com frequência em carros seguidores de linha, navegação por trilha de veículos industriais AGV, posicionamento e separação de materiais em linhas de produção, robôs de patrulha que seguem um percurso e competições de robôs em pista.",
      wiringNote: "Cinco cabos jumper fêmea-fêmea: alimentação, terra e um sinal digital por sonda. Anote qual sonda vai em qual pino antes de testar.",
      programming: "A matriz de LED da micro:bit mostra o estado da sonda central do sensor de três canais: 1 quando detecta linha preta e 0 quando não.",
      troubleshooting: [
        { issue: "O sensor lê o mesmo valor no preto e no branco", fix: "O módulo tem um potenciômetro de sensibilidade que precisa ser ajustado para o piso real. Mantenha o sensor a cerca de 5 a 10 mm da superfície e ajuste devagar até a leitura mudar entre a linha e o piso." },
        { issue: "Funciona em uma sala e em outra não", fix: "Tanto a luz ambiente forte quanto pisos brilhantes ou escuros interferem no infravermelho refletido. Ajuste novamente a sensibilidade sobre a superfície que será usada e proteja o sensor da luz direta." },
      ],
    },
  },

  "encoder-motor": {
    en: {
      summary: "Geared DC motor with a built-in optical encoder that reports angle, speed and distance.",
      principle: "An encoder motor is a DC geared motor integrated with an optical encoder as a single unit. The encoder consists of a grating disc and an infrared emitter-receiver pair. As the motor shaft rotates, it turns the grating disc, which interrupts the infrared beam to generate alternating on/off pulse signals. The main controller counts these pulses to calculate rotation angle, speed, and distance traveled, and can determine forward/reverse rotation from the phase difference. Standard DC motors cannot precisely control speed or position, whereas an encoder motor uses closed-loop pulse feedback to regulate speed and eliminate slip errors caused by load.",
      applications: "Widely used for mileage measurement in smart cars, closed-loop speed stabilization in line-following cars, mechanical gimbal angle positioning, precise AGV chassis movement, robotic-arm joint angle control, attitude correction in competition robots, and fixed-speed control of small conveyor belts.",
      wiringNote: "A single PH2.0-6P terminal cable carries power and both encoder channels. The connector fits only one way: do not force it.",
      programming: "Press button A to rotate the motor forward one revolution at speed 100; press button B to rotate it in reverse one revolution at speed 50.",
      troubleshooting: [
        { issue: "The motor does not turn", fix: "Push the PH2.0-6P connector fully into the labelled encoder motor port, until it clicks. Then check the board is running on its battery: the USB supply alone is often not enough to start a motor under load." },
        { issue: "The motor turns but does not stop at one revolution", fix: "The revolution count comes from the encoder pulses. A connector that is only partly inserted still powers the motor but loses the encoder signal, so the count never completes. Reseat the cable and remove any excess load on the shaft, which also causes slip." },
      ],
    },
    es: {
      summary: "Motor de corriente continua con reductora y encoder óptico integrado que informa ángulo, velocidad y distancia.",
      principle: "Un motor con encoder es un motor de corriente continua con reductora integrado con un encoder óptico en una sola unidad. El encoder está formado por un disco ranurado y un par emisor-receptor infrarrojo. Al girar el eje del motor, el disco ranurado interrumpe el haz infrarrojo y genera pulsos alternados de encendido y apagado. El controlador principal cuenta esos pulsos para calcular el ángulo de giro, la velocidad y la distancia recorrida, y puede determinar el sentido de giro por la diferencia de fase. Los motores de corriente continua comunes no permiten controlar con precisión la velocidad ni la posición, mientras que el motor con encoder usa realimentación de pulsos en lazo cerrado para regular la velocidad y eliminar los errores de deslizamiento por carga.",
      applications: "Se usa mucho para medir recorrido en autos inteligentes, estabilizar la velocidad en lazo cerrado en autos seguidores de línea, posicionar ángulos en estabilizadores mecánicos, mover con precisión chasis de vehículos AGV, controlar el ángulo de articulaciones de brazos robóticos, corregir la postura en robots de competencia y controlar la velocidad fija de cintas transportadoras pequeñas.",
      wiringNote: "Un único cable terminal PH2.0-6P lleva la alimentación y los dos canales del encoder. El conector entra en una sola posición: no lo fuerce.",
      programming: "Presione el botón A para girar el motor una vuelta hacia adelante a velocidad 100; presione el botón B para girarlo una vuelta en sentido inverso a velocidad 50.",
      troubleshooting: [
        { issue: "El motor no gira", fix: "Inserte el conector PH2.0-6P a fondo en el puerto de motor con encoder rotulado, hasta que calce. Después verifique que la placa esté funcionando con su batería: la alimentación por USB muchas veces no alcanza para arrancar un motor con carga." },
        { issue: "El motor gira pero no se detiene al completar una vuelta", fix: "La cuenta de vueltas sale de los pulsos del encoder. Un conector insertado a medias igual alimenta el motor pero pierde la señal del encoder, así que la cuenta nunca se completa. Vuelva a insertar el cable y quite la carga excesiva del eje, que también produce deslizamiento." },
      ],
    },
    fr: {
      summary: "Moteur à courant continu avec réducteur et encodeur optique intégré qui renvoie angle, vitesse et distance.",
      principle: "Un moteur à encodeur est un moteur à courant continu avec réducteur intégrant un encodeur optique dans un même ensemble. L'encodeur est constitué d'un disque à fentes et d'un couple émetteur-récepteur infrarouge. Quand l'arbre du moteur tourne, il entraîne le disque qui interrompt le faisceau infrarouge et génère des impulsions alternées. Le contrôleur principal compte ces impulsions pour calculer l'angle de rotation, la vitesse et la distance parcourue, et peut déterminer le sens de rotation par le déphasage. Les moteurs à courant continu classiques ne permettent pas de contrôler précisément la vitesse ni la position, tandis que le moteur à encodeur utilise une rétroaction d'impulsions en boucle fermée pour réguler la vitesse et éliminer les erreurs de glissement dues à la charge.",
      applications: "Largement utilisé pour la mesure de distance parcourue des voitures intelligentes, la stabilisation de vitesse en boucle fermée des voitures suiveuses de ligne, le positionnement angulaire de stabilisateurs mécaniques, le déplacement précis des châssis d'AGV, le contrôle d'angle des articulations de bras robotisés, la correction d'attitude des robots de compétition et le maintien de vitesse de petits convoyeurs.",
      wiringNote: "Un seul câble terminal PH2.0-6P transporte l'alimentation et les deux voies de l'encodeur. Le connecteur ne s'insère que dans un sens : ne le forcez pas.",
      programming: "Appuyez sur le bouton A pour faire tourner le moteur d'un tour vers l'avant à la vitesse 100 ; appuyez sur le bouton B pour un tour en sens inverse à la vitesse 50.",
      troubleshooting: [
        { issue: "Le moteur ne tourne pas", fix: "Enfoncez complètement le connecteur PH2.0-6P dans le port moteur à encodeur repéré, jusqu'au clic. Vérifiez ensuite que la carte fonctionne sur sa batterie : l'alimentation USB seule suffit rarement à démarrer un moteur en charge." },
        { issue: "Le moteur tourne mais ne s'arrête pas au bout d'un tour", fix: "Le comptage des tours provient des impulsions de l'encodeur. Un connecteur partiellement inséré alimente quand même le moteur mais perd le signal de l'encodeur, donc le comptage n'aboutit jamais. Rebranchez le câble à fond et retirez toute charge excessive sur l'arbre, qui provoque aussi du glissement." },
      ],
    },
    pt: {
      summary: "Motor de corrente contínua com redutor e encoder óptico integrado que informa ângulo, velocidade e distância.",
      principle: "Um motor com encoder é um motor de corrente contínua com redutor integrado a um encoder óptico em uma única unidade. O encoder é formado por um disco ranhurado e um par emissor-receptor infravermelho. Quando o eixo do motor gira, o disco ranhurado interrompe o feixe infravermelho e gera pulsos alternados. O controlador principal conta esses pulsos para calcular o ângulo de rotação, a velocidade e a distância percorrida, e pode determinar o sentido de rotação pela diferença de fase. Motores de corrente contínua comuns não permitem controlar com precisão a velocidade nem a posição, enquanto o motor com encoder usa realimentação de pulsos em laço fechado para regular a velocidade e eliminar os erros de escorregamento causados pela carga.",
      applications: "Muito usado para medir distância percorrida em carros inteligentes, estabilizar a velocidade em laço fechado em carros seguidores de linha, posicionar ângulos em estabilizadores mecânicos, movimentar com precisão chassis de AGV, controlar o ângulo de articulações de braços robóticos, corrigir a postura em robôs de competição e manter a velocidade de pequenas correias transportadoras.",
      wiringNote: "Um único cabo terminal PH2.0-6P leva a alimentação e os dois canais do encoder. O conector encaixa em uma única posição: não force.",
      programming: "Pressione o botão A para girar o motor uma volta para frente na velocidade 100; pressione o botão B para girá-lo uma volta em sentido inverso na velocidade 50.",
      troubleshooting: [
        { issue: "O motor não gira", fix: "Encaixe o conector PH2.0-6P até o fim na porta de motor com encoder identificada, até travar. Depois verifique se a placa está funcionando com a bateria: a alimentação por USB muitas vezes não é suficiente para dar partida em um motor com carga." },
        { issue: "O motor gira mas não para ao completar uma volta", fix: "A contagem de voltas vem dos pulsos do encoder. Um conector encaixado pela metade ainda alimenta o motor, mas perde o sinal do encoder, então a contagem nunca se completa. Reencaixe o cabo e retire a carga excessiva do eixo, que também causa escorregamento." },
      ],
    },
  },
};
