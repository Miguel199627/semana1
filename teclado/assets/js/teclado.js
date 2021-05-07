// Variables h2
let casilla = document.getElementById("casilla");

// Variables botones
let btnPleca = document.getElementById("btnPleca");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnComilla = document.getElementById("btnComilla");
let btnSigInte = document.getElementById("btnSigInte");
let btnBorrar = document.getElementById("btnBorrar");

let btnq = document.getElementById("btnq");
let btnw = document.getElementById("btnw");
let btne = document.getElementById("btne");
let btnr = document.getElementById("btnr");
let btnt = document.getElementById("btnt");
let btny = document.getElementById("btny");
let btnu = document.getElementById("btnu");
let btni = document.getElementById("btni");
let btno = document.getElementById("btno");
let btnp = document.getElementById("btnp");
let btnMas = document.getElementById("btnMas");
let btnEnter = document.getElementById("btnEnter");

let btna = document.getElementById("btna");
let btns = document.getElementById("btns");
let btnd = document.getElementById("btnd");
let btnf = document.getElementById("btnf");
let btng = document.getElementById("btng");
let btnh = document.getElementById("btnh");
let btnj = document.getElementById("btnj");
let btnk = document.getElementById("btnk");
let btnl = document.getElementById("btnl");
let btnJan = document.getElementById("btnJan");
let btnLlaveOpen = document.getElementById("btnLlaveOpen");
let btnLlaveClose = document.getElementById("btnLlaveClose");

let btnMenorQue = document.getElementById("btnMenorQue");
let btnz = document.getElementById("btnz");
let btnx = document.getElementById("btnx");
let btnc = document.getElementById("btnc");
let btnv = document.getElementById("btnv");
let btnb = document.getElementById("btnb");
let btnn = document.getElementById("btnn");
let btnm = document.getElementById("btnm");
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnGuion = document.getElementById("btnGuion");

let btnEspacio = document.getElementById("btnEspacio");

//Funciones
const addLetNumSim = (valor) => {
    casilla.innerHTML += valor;
};

const btnBorrarf = () => {
    casilla.innerHTML = casilla.innerHTML.substring(0, casilla.innerHTML.length - 1);
};


// Oncliks
btnPleca.onclick = () => addLetNumSim("|");
btn1.onclick = () => addLetNumSim("1");
btn2.onclick = () => addLetNumSim("2");
btn3.onclick = () => addLetNumSim("3");
btn4.onclick = () => addLetNumSim("4");
btn5.onclick = () => addLetNumSim("5");
btn6.onclick = () => addLetNumSim("6");
btn7.onclick = () => addLetNumSim("7");
btn8.onclick = () => addLetNumSim("8");
btn9.onclick = () => addLetNumSim("9");
btn0.onclick = () => addLetNumSim("0");
btnComilla.onclick = () => addLetNumSim("'");
btnSigInte.onclick = () => addLetNumSim("¿");
btnBorrar.onclick = () => btnBorrarf();

btnq.onclick = () => addLetNumSim("q");
btnw.onclick = () => addLetNumSim("w");
btne.onclick = () => addLetNumSim("e");
btnr.onclick = () => addLetNumSim("r");
btnt.onclick = () => addLetNumSim("t");
btny.onclick = () => addLetNumSim("y");
btnu.onclick = () => addLetNumSim("u");
btni.onclick = () => addLetNumSim("i");
btno.onclick = () => addLetNumSim("o");
btnp.onclick = () => addLetNumSim("p");
btnMas.onclick = () => addLetNumSim("+");
btnEnter.onclick = () => btnEnterf();

btna.onclick = () => addLetNumSim("a");
btns.onclick = () => addLetNumSim("s");
btnd.onclick = () => addLetNumSim("d");
btnf.onclick = () => addLetNumSim("f");
btng.onclick = () => addLetNumSim("g");
btnh.onclick = () => addLetNumSim("h");
btnj.onclick = () => addLetNumSim("j");
btnk.onclick = () => addLetNumSim("k");
btnl.onclick = () => addLetNumSim("l");
btnJan.onclick = () => addLetNumSim("ñ");
btnLlaveOpen.onclick = () => addLetNumSim("{");
btnLlaveClose.onclick = () => addLetNumSim("}");

btnMenorQue.onclick = () => addLetNumSim("<");
btnz.onclick = () => addLetNumSim("z");
btnx.onclick = () => addLetNumSim("x");
btnc.onclick = () => addLetNumSim("c");
btnv.onclick = () => addLetNumSim("v");
btnb.onclick = () => addLetNumSim("b");
btnn.onclick = () => addLetNumSim("n");
btnm.onclick = () => addLetNumSim("m");
btnComa.onclick = () => addLetNumSim(",");
btnPunto.onclick = () => addLetNumSim(".");
btnGuion.onclick = () => addLetNumSim("-");

btnEspacio.onclick = () => addLetNumSim(" ");

btnBorrar.onclick = () => btnBorrarf();

btnEnter.onclick = () => addLetNumSim("<br>");