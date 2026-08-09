# Pendientes de la guía de recursos

La web publicada no anuncia nada como provisorio: cuando falta material, la
sección simplemente no se dibuja. Este archivo es el registro de lo que todavía
falta y de dónde se carga cada cosa.

Última revisión: 8 de agosto de 2026.

## 1. Videos (12 módulos)

Ninguno está publicado, así que hoy ninguna guía muestra sección de video.

Para activarlos, en `dep-support/resources/modules.data.js`:

1. Subir los videos a Cloudflare Stream.
2. Cargar `CLOUDFLARE_SUBDOMAIN` una vez, con el subdominio de cliente que
   aparece en cualquier código de inserción (`customer-XXXXX.cloudflarestream.com`).
3. Cargar el `video.id` de cada módulo con el id del video en Stream.

Mientras falte el subdominio, los ids cargados se ignoran y la sección sigue
oculta, para no mostrar un reproductor roto.

El origen de cada video está guardado como `video.driveId` en el mismo archivo.
El adaptador de corriente tiene video pero no tiene programa.

## 2. Archivos .hex (12 módulos)

Ninguno está publicado. Hoy la sección "Programa" muestra la descripción y la
captura de bloques, sin tarjeta de descarga.

Para activarlos: guardar el archivo como
`dep-support/assets/guides/<módulo>/<módulo>.hex` y cargar esa ruta en
`program.hex`. `vercel.json` ya sirve los `.hex` como descarga.

El proyecto de MakeCode de cada programa está guardado como `program.driveId`.

## 3. Diagnóstico a revisar por el equipo de hardware

El documento de hardware solo trae diagnóstico para el sensor de color. Los
otros doce se redactaron a partir del principio de funcionamiento documentado y
necesitan revisión técnica.

`troubleshootingStatus` en `modules.data.js` registra el origen de cada uno:
`approved` es texto del documento, `draft` es texto derivado. El dato no se
muestra en la web. Hoy: 1 `approved` (sensor de color) y 12 `draft`.

## 4. Traducciones a revisar

Los cuatro idiomas están publicados. El inglés es el texto del documento de
hardware sin reescribir; español, francés y portugués son traducciones de ese
texto. Falta que un hablante nativo revise francés y portugués.

## 5. Imágenes que faltan o conviene reemplazar

Las imágenes actuales salieron incrustadas en el `.docx`, donde Word las
recomprimió. Ordenadas por impacto:

1. **Diagrama de orden de cables** de siete módulos: potenciómetro, sensor de
   color, humedad de suelo, LCD, joystick, ultrasónico y seguidor de línea. El
   manual dice que existen, pero no venían en el `.docx`. Es el diagrama que
   indica qué pin va dónde. Falta también la foto de conexión terminada del
   motor con encoder.
2. **Capturas de bloques a 1400 px de ancho o más.** Hasta que se publiquen los
   `.hex`, el docente reconstruye el programa mirándolas y tiene que poder leer
   los números de pin. Las actuales van de 424 a 890 px.
3. **Fotos de conexión terminada a 1200 px o más**, para los diez módulos que
   están por debajo. Ya están bien las de puertos de la placa de expansión y
   orden de cables del servo 180°.
4. **Fichas de componentes.** Las 29 quedaron sobre el mismo fondo. Micro:bit y
   cable micro USB se recortaron de las fotos de las guías, y los cables jumper
   macho-macho conservan su foto original con el fondo aplanado. Pilas,
   portapilas, soporte wearable y tornillos solo perdieron el recuadro blanco
   que traían del PDF: siguen en baja resolución. Se decidió dejarlas así; si
   más adelante se quieren mejorar, alcanza con fotos tomadas como las de las
   guías.

## 6. Detalles de consistencia

- `accessory-screw-set.png` es un render 3D de una tuerca sola, no una foto del
  set de accesorios y tornillos que nombra la ficha.

## 7. Wire colors

La leyenda de conexión solo muestra color de cable donde el manual lo indica:
servo 180°, servo 360° y tira LED RGB. En el resto lista las conexiones a
realizar sin color, para no inventar un color que lleve a conectar mal. Si el
fabricante confirma los colores del resto, se cargan en `wiring.wires` de
`modules.data.js` y la leyenda cambia sola.
