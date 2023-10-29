import { Frase } from "./clases.js"

const fraseAleatoriaDiv = document.getElementById("fraseAleatoriaDiv")
const categoriaSelec = document.getElementById("categoriaSelec")
const frase = document.getElementById("frase")

const fraseAleatoria = JSON.parse(localStorage.getItem("fraseAleatoria"))
const categoria = JSON.parse(localStorage.getItem("categoria"))

fraseAleatoriaDiv.innerHTML = fraseAleatoria.frase

function obtenerFrase(categoria) {
    return fetch(`https://api.chucknorris.io/jokes/random?category=${categoria.nombre}`)
        .then(response => response.json())
        .then(data => {
            const fraseObjeto = new Frase(categoria, data.value)
            traducirTexto(fraseObjeto.frase)
            return fraseObjeto;
        })
        .catch(error => {
            console.error(`Error al obtener la frase: ${error}`)
        })
}

document.addEventListener("DOMContentLoaded", function() {
    obtenerFrase(categoria)
        .then(fraseObjeto => {
            categoriaSelec.textContent = categoria.nombre
            frase.textContent = fraseObjeto.frase
        });
});

// solo funciona si pongo una clave api adecuada proporcionada pro DeepL en lugar de [yourAuthKey]
async function traducirTexto(frase) {
    try {
        const apiKey = "[3599253]"
        const textoATraducir = frase
        const idiomaDestino = "DE"

        const res = await fetch('https://api-free.deepl.com/v2/translate', {
            method: 'POST',
            headers: {
                'Authorization': `DeepL-Auth-Key ${apiKey}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'text': textoATraducir,
                'target_lang': idiomaDestino,
            }),
        });

        if (res.ok) {
            const data = await res.json();
            if (data.translations && data.translations.length > 0) {
                const traduccion = data.translations[0].text
                console.log("Texto original:", textoATraducir)
                console.log("Traducción:", traduccion)

                
                const traduccionDiv = document.getElementById("traduccion")
                traduccionDiv.textContent = traduccion;
            } else {
                console.error("No se encontraron traducciones en la respuesta.")
            }
        } else {
            console.error("Error en la solicitud:", res.status, res.statusText)
        }
    } catch (error) {
        console.error("Error al traducir el texto:", error)
    }
}