let btnPrueba = document.getElementById("btnPrueba");
let nombre = document.getElementById("nombre");

const registroNombre = () => {
    let nombre = prompt("Ingrese su nombre");
    this.nombre.innerHTML = "Nombre: " + nombre;
};

// Onclicks
btnPrueba.onclick = () => {
    registroNombre();
};