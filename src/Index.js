// Index.js
import { miFuncionEnOtroArchivo } from './File.js';

// Obtén una referencia al botón por su ID
var boton = document.getElementById("miBoton");

// Agrega un event listener para el evento 'click'
boton.addEventListener("click", function() {
    miFuncionEnOtroArchivo();
});
