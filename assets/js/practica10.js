let btnPrueba = document.getElementById("btnPrueba");

const spamLink = () => {
    // Ciclo for
    for (let i = 0; i < 5; i++) {
        window.open("https://www3.animeflv.net/");
    }
};

btnPrueba.addEventListener("click", () => spamLink()); // Callback - Solo usar para eventos diferentes a click por buenas practicas. - Callback Hell.

// Callback - se usan para poder invocar o llamar funciones en los parametros de otra funcion.

