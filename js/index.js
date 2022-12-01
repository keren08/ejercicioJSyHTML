let titulo = document.getElementById("titulo").textContent;
console.log(titulo);

let parrafo = document.querySelector(".parrafo").textContent;

console.log(parrafo);

parrafo = "estoy cambiando la variable parrafo";

console.log(parrafo);

//cambiar colores
let boton = document.getElementById("buton");

boton.addEventListener("click",cambiarClase);

function cambiarClase(){
  let titulo2 = document.getElementById("titulo");
  titulo2.classList.toggle("colorVioleta");
  
  let parrafo2 = document.querySelector(".parrafo");
  parrafo2.classList.add("colorBlue");
}

