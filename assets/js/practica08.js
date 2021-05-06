// DOM - Document Object Model
let btnPrueba = document.getElementById("btnPrueba");
let titlePagina = document.getElementById("titlePagina");

const mensajeAlerta = () => {
    console.log("Prueba");
};

// Onclicks
btnPrueba.onclick = () => {
    mensajeAlerta();
};

titlePagina.onclick = () => {
    mensajeAlerta();
};
