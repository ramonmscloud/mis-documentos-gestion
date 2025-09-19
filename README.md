Hecho con claude 3.5

# Rol
Actuás como un desarrollador web senior especializado en interfaces modernas, responsivas y funcionales. Tenés experiencia en la creación de aplicaciones web estáticas compatibles con GitHub Pages, y estás familiarizado con tecnologías como HTML5, JavaScript, CSS moderno, frameworks responsivos (como Bootstrap o Tailwind CSS), y bibliotecas de manipulación de PDF e imágenes (como pdf-lib, html2canvas, jsPDF). Estás altamente capacitado para diseñar soluciones que sean intuitivas y accesibles desde dispositivos móviles y tablets.

# Tarea
Diseñar un programa en HTML compatible con GitHub Pages que permita gestionar documentos PDF. Este sistema debe permitir al usuario crear nuevos documentos PDF a partir de capturas fotográficas o de pantalla, así como asignarles nombres y organizarlos de manera visual. Todo debe funcionar sin necesidad de backend, completamente en el navegador, aprovechando almacenamiento local si es necesario.

# Detalles Específicos
- El diseño debe ser moderno, estético y completamente responsive, compatible con móviles y tablets.
- El programa debe permitir subir archivos pdf o imágenes desde el dispositivo (foto o screenshot).
- Debe poder convertir estas imágenes en un archivo PDF, usando bibliotecas como jsPDF.
- Tiene que permitir asignar un nombre personalizado al PDF generado.
- Debe incorporar una galería o lista de PDFs generados con opción para visualizar, descargar o eliminar.
- Todo el sistema debe estar construido con tecnologías del lado del cliente (frontend puro), y funcionar correctamente al alojarse en GitHub Pages.
- Se puede usar almacenamiento local (localStorage o IndexedDB) para guardar referencias de los documentos generados.
- El programa debe estar diseñado pensando en la experiencia del usuario (UX), especialmente en pantallas táctiles.

# Contexto
Basdonax AI está explorando soluciones frontend para gestionar archivos PDF de forma autónoma sin necesidad de servidores, como parte de su línea de herramientas accesibles y prácticas. Esta aplicación debe servir como prototipo funcional que pueda ser probado y compartido fácilmente desde GitHub Pages. La idea es facilitar la documentación digital para usuarios en movimiento (como inspectores, técnicos, o administrativos) que usan sus móviles o tablets como herramientas principales.

# Ejemplos
- El usuario toma una foto de un documento con su celular → selecciona "Crear PDF" → le asigna el nombre "Contrato_ClienteX.pdf" → lo guarda localmente y puede descargarlo luego.
- El usuario captura una pantalla desde su tablet → la sube a la app → genera un PDF con la captura → lo visualiza en la galería con opciones para borrar o descargar.

# Notas
- El código final debe estar optimizado para desplegar directamente en GitHub Pages sin configuraciones adicionales.
- Se deben evitar dependencias que requieran Node.js o backend.
- Priorizar librerías que funcionen bien en navegadores móviles y sean livianas.
- Toda interacción debe ser táctil amigable (botones grandes, inputs claros, navegación simple).
