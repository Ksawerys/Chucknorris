import { Categoria } from "./clases.js"
import { Frase } from "./clases.js"

const fraseAleatoriaDiv = document.getElementById("fraseAleatoriaDiv")
const fraseObjetc = JSON.parse(localStorage.getItem("fraseAleatoria"))


document.addEventListener("DOMContentLoaded", function() {
    const tablaCategorias = document.getElementById("tablaCategorias")
    
    if (fraseObjetc.frase.trim() !== '') {
        fraseAleatoriaDiv.innerHTML = fraseObjetc.frase
    }

    tablaCategorias.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const nombreCategoria = event.target.textContent           
            const categoriaObjetc = new Categoria(nombreCategoria)           
            localStorage.setItem("categoria", JSON.stringify(categoriaObjetc));            
            window.location.href = `frase.html`    
        }       
    });

    
    fetch("https://api.chucknorris.io/jokes/categories")
        .then(response => response.json())
        .then(data => {
            
            data.forEach(categoria => {
                const row = tablaCategorias.insertRow()
                const cell = row.insertCell(0)          
                const linkCategoria = document.createElement("a")
                linkCategoria.textContent = categoria
                cell.appendChild(linkCategoria)
            })
        })
        .catch(error => {
            console.error("Error al obtener categorías: " + error)
        });
});


const botonGenerarFrase = document.getElementById("generarFrase");


botonGenerarFrase.addEventListener("click", () => {
  
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      const fraseObject = new Frase("",data.value)
      localStorage.setItem("fraseAleatoria", JSON.stringify(fraseObject)) 
      fraseAleatoriaDiv.innerHTML = fraseObject.frase
    })
    .catch((error) => {
      console.error("Error al obtener la frase:", error)
    })
})

