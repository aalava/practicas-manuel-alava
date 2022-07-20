# Prácticas Preprofesionales Aplicaciones Webs I
## Proyecto: Consumo a un API | Landing Page : Vanila JS

Este repositorio contendrá los archivos necesarios del proyecto que será desarrollado con el fin de crear un sitio web tipo "ecommerce", utilizando herramientas javascript, node-JS, POSTMAN,  HTML, CSS-Grid Flex, Responsive Design entre otras tecnologías que se irán documentando a medida que las vayamas implementando.

## Conceptos Previos
### Qué es una API?
Las siglas API corresponden al inglés application programming interface, que se traduce como interfaz de programación de aplicaciones. Esta fórmula se refiere al conjunto de estructuras que permiten que los componentes de un software se comuniquen con otros.
Las APIs de una aplicación permiten el acceso a los desarrolladores de otros programas a ciertas partes de su biblioteca para llevar a cabo determinadas acciones. Es decir, es la capacidad que tiene un software para comunicar.
Esta parte de la programación no está pensada tanto para el usuario, sino para consumirla entre canales. 

### Estados de Error del Servidor
- **Error 400:**
El Error 400 Bad Request significa literalmente Petición o Solicitud Incorrecta y principalmente se debe a discrepancias entre servidor y cliente. En otras palabras, nuestro ordenador (el cliente) ha sido incapaz de comunicarse satisfactoriamente con el host de la web.

- **Error 401:**
El código de error HTTP 401 indica que la petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado. Este estatus se envia con un WWW-Authenticate encabezado que contiene informacion sobre como autorizar correctamente.

- **Error 402:**
Es un código HTTP de error de cliente no estandarizado, reservado para uso futuro.
En ocasiones, este código indica que la solicitud no puede ser procesada hasta que el cliente realice un pago. Originalmente se creó para habilitar los sistemas de efectivo digital o (micro) pagos e indicaría que el contenido solicitado no está disponible hasta que el cliente realice un pago. Sin embargo, no existe una convención de uso estándar y diferentes entidades lo utilizan en diferentes contextos.

- **Error 403:**
403 Prohibido – No tiene permiso para acceder a / en este servidor es un código de estado HTTP que se produce cuando el servidor web entiende la solicitud pero no puede proporcionarte acceso.

- **Error 404:**
Un Error 404 es el código HTTP que envía el servidor al usuario cuando la URL a la que está intentando acceder no existe. Nos solemos encontrar con este mensaje cuando una página se ha eliminado o simplemente no hemos escrito bien la dirección, es entonces cuando nos encontramos con una pantalla con un aviso tipo “Error 404 not found” o “404 page not found”.

- **Error 405:**
El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no deberían retornar este código de error.

Estos son los códigos de error más comunes, para mayor referencia visistar el sitio Web de [Mozilla]

### Node JS
Node.js es un entorno de tiempo de ejecución de JavaScript. Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. 

Node.js fue creado por los desarrolladores originales de JavaScript. Lo transformaron de algo que solo podía ejecutarse en el navegador en algo que se podría ejecutar en los ordenadores como si de aplicaciones independientes se tratara. Gracias a Node.js se puede ir un paso más allá en la programación con JavaScript no solo creando sitios web interactivos, sino teniendo la capacidad de hacer cosas que otros lenguajes de secuencia de comandos como Python pueden crear. 

Tanto JavaScript como Node.js se ejecutan en el motor de tiempo de ejecución JavaScript V8 (V8 es el nombre del motor de JavaScript que alimenta Google Chrome. Es lo que toma nuestro JavaScript y lo ejecuta mientras navega con Chrome). Este motor coge el código JavaScript y lo convierte en un código de máquina más rápido. El código de máquina es un código de nivel más bajo que la computadora puede ejecutar sin necesidad de interpretarlo primero, ignorando la compilación y por lo tanto aumentando su velocidad. 

### Metodos Post Get
GET y POST son dos técnicas eficientes que pueden enviar los datos a un servidor o navegador y necesariamente que estos se comuniquen. Los dos métodos son distintos cuando el método GET añade los datos codificados a la URI, mientras que en el caso del método POST los datos se añaden al cuerpo y no a la URI. Además, se utiliza el método GET para recuperar los datos. Por el contrario, el método POST se utiliza para almacenar o actualizar los datos.

La etiqueta form se utiliza para expresar el contenido del formulario; esto también se conoce como control de formulario. Estos formularios se rellenan con los datos correspondientes y se envían a la máquina remota para su posterior procesamiento. El funcionamiento del formulario incluye dos cosas cruciales: la primera es la especificación de la dirección del programa que maneja el contenido del formulario con la ayuda de ACTION. Más adelante se encuentra la especificación del método dentro del cual fluyen los datos del formulario con la ayuda del atributo METHOD.

El atributo ACTION describe cómo se debe manejar el formulario HTML. El atributo METHOD gestiona el proceso de presentación de los datos. Los métodos GET y POST se encuentran bajo el atributo METHOD.

[Mozilla]: <https://developer.mozilla.org/es/docs/Web/HTTP/Status>

<!-- Git en Windows 10  Branch Ramas  Remote  SSH key gen  Pull  Push  Commint  Add  Pull Request -->
