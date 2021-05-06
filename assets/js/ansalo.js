// Variables h3
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

// Variables botones
let btna1 = document.getElementById("btna1");
let btnb2 = document.getElementById("btnb2");
let btnc3 = document.getElementById("btnc3");
let btnd4 = document.getElementById("btnd4");
let btne5 = document.getElementById("btne5");
let btnf6 = document.getElementById("btnf6");
let btng7 = document.getElementById("btng7");
let btnh8 = document.getElementById("btnh8");
let btni9 = document.getElementById("btni9");
let btnj0 = document.getElementById("btnj0");

// Variables Temp
let letraActual = "",
numeroActual = "1";

// Funciones principales
const btna1f = () => {
    if (letras.innerHTML === "") {
        letraActual = "A";
        letras.innerHTML = letraActual;
    } else {
        if(letraActual == "J") {
            if(!validarEntrada("1", "N")) {
                numeros.innerHTML = numeroActual;
            } else {
                alert("El numero 1 ya existe");
            }
        } else {
            if(validarEntrada("A", "L")) {
                alert("La letra A ya existe");
            }
        }
    }
};

const btnb2f = () => {
    letraActual != "J" ? ansalo("B", "A") : ansalo("2", "1");
};

const btnc3f = () => {
    letraActual != "J" ? ansalo("C", "AB") : ansalo("3", "12");
};

const btnd4f = () => {
    letraActual != "J" ? ansalo("D", "ABC") : ansalo("4", "123");
};

const btne5f = () => {
    letraActual != "J" ? ansalo("E", "ABCD") : ansalo("5", "1234");
};

const btnf6f = () => {
    letraActual != "J" ? ansalo("F", "ABCDE") : ansalo("6", "12345");
};

const btng7f = () => {
    letraActual != "J" ? ansalo("G", "ABCDEF") : ansalo("7", "123456");
};

const btnh8f = () => {
    letraActual != "J" ? ansalo("H", "ABCDEFG") : ansalo("8", "1234567");
};

const btni9f = () => {
    letraActual != "J" ? ansalo("I", "ABCDEFGH") : ansalo("9", "12345678");
};

const btnj0f = () => {
    letraActual != "J" ? ansalo("J", "ABCDEFGHI") : ansalo("0", "123456789");
};

// Funciones secundarias
const validarEntrada = (valorSearch, typeSearch) => {
    let verify = false;
    // Valida letras
    if (typeSearch === "L") {
        if(letras.innerHTML.indexOf(valorSearch) > -1) verify = true;
    } 
    // Valida numeros
    else if (typeSearch === "N") {
        if(numeros.innerHTML.indexOf(valorSearch) > -1) verify = true;
    }
    return verify;
};

const ansalo = (valorBoton, condicion) => {
    if (letras.innerHTML === "") {
        alert("Faltan letras por ingresar");
    } else {
        if(letraActual != "J") {
            if(!validarEntrada(valorBoton, "L")) {
                if(letras.innerHTML == condicion) {
                    letras.innerHTML += valorBoton;
                    letraActual = valorBoton;
                } else {
                    alert("Faltan letras por ingresar");
                }
            } else {
                alert("La letra " + valorBoton + " ya existe");
            }
        } else {
            if(!validarEntrada(valorBoton, "N")) {
                if(numeros.innerHTML == condicion) {
                    numeros.innerHTML += valorBoton;
                    numeroActual = valorBoton;
                } else {
                    alert("Faltan numeros por ingresar");
                }
            } else {
                alert("El numero " + valorBoton + " ya existe");
            }
        }
    }
};

// Oncliks
btna1.onclick = () => {
    btna1f();
};

btnb2.onclick = () => {
    btnb2f();
};

btnc3.onclick = () => {
    btnc3f();
};

btnd4.onclick = () => {
    btnd4f();
};

btne5.onclick = () => {
    btne5f();
};

btnf6.onclick = () => {
    btnf6f();
};

btng7.onclick = () => {
    btng7f();
};

btnh8.onclick = () => {
    btnh8f();
};

btni9.onclick = () => {
    btni9f();
};

btnj0.onclick = () => {
    btnj0f();
};