(()=>{"use strict";class e{constructor(e){this.nombre=e}}class t{constructor(e,t){this.categoria=e,this.frase=t}}const r=document.getElementById("fraseAleatoriaDiv"),n=JSON.parse(localStorage.getItem("fraseAleatoria"));document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("tablaCategorias");""!==n.frase.trim()&&(r.innerHTML=n.frase),t.addEventListener("click",(function(t){if("A"===t.target.tagName){const r=t.target.textContent,n=new e(r);localStorage.setItem("categoria",JSON.stringify(n)),window.location.href="frase.html"}})),fetch("https://api.chucknorris.io/jokes/categories").then((e=>e.json())).then((e=>{e.forEach((e=>{const r=t.insertRow().insertCell(0),n=document.createElement("a");n.textContent=e,r.appendChild(n)}))})).catch((e=>{console.error("Error al obtener categorías: "+e)}))})),document.getElementById("generarFrase").addEventListener("click",(()=>{fetch("https://api.chucknorris.io/jokes/random").then((e=>e.json())).then((e=>{const n=new t("",e.value);localStorage.setItem("fraseAleatoria",JSON.stringify(n)),r.innerHTML=n.frase})).catch((e=>{console.error("Error al obtener la frase:",e)}))}))})();