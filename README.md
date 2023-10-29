# Readme para la Aplicación Chuck Norris API

Esta es una aplicación web que permite a los usuarios obtener frases divertidas relacionadas con Chuck Norris y traducirlas a otro idioma utilizando la API de DeepL. La aplicación consta de dos páginas principales: la página de inicio y la página de visualización de frases.

## Página de Inicio
La página de inicio muestra una lista de categorías de frases de Chuck Norris y un botón para generar una frase aleatoria. Aquí hay una descripción de los elementos en la página:

- **Categorías**: Se muestran en una tabla en el lado izquierdo de la página. Puedes hacer clic en una categoría para ver frases relacionadas.

- **Botón "¡Cuéntame una hazaña de Chuck Norris!"**: Al hacer clic en este botón, se generará una frase aleatoria y se mostrará en la parte derecha de la página.

- **Frase Aleatoria**: La frase generada aleatoriamente se muestra en un cuadro en la parte derecha de la página.

## Página de Visualización de Frases
La página de visualización de frases muestra una frase previamente seleccionada en la página de inicio y ofrece la opción de traducir la frase a otro idioma utilizando la API de DeepL. Aquí hay una descripción de los elementos en la página:

- **Frase Seleccionada**: La frase seleccionada se muestra en la parte superior de la página.

- **Categoría Seleccionada**: La categoría de la frase se muestra debajo de la frase.


## Uso de la Aplicación
1. En la página de inicio, selecciona una categoría de la lista o haz clic en el botón "¡Cuéntame una hazaña de Chuck Norris!" para obtener una frase aleatoria.

2. En la página de visualización de frases, puedes ver la frase seleccionada y su categoría.



## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript
- API de Chuck Norris (https://api.chucknorris.io/)
- API de DeepL para traducción


## Funcionalidades Pendientes

- **Traductor de Frases**: En la sección de "Traducción", puedes obtener una traducción en el idioma en español de forma automatica.
-La aplicación utiliza la API de DeepL para traducir frases. De momento habria que  de configurar correctamente la API de DeepL en el archivo JavaScript para que las traducciones funcionen. Reemplaza "[yourAuthKey]" con tu clave de autenticación de DeepL.

```javascript
const apiKey = "[yourAuthKey]";


