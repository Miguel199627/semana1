// Operaciones
const sumaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese el numero 1"));
    let num2 = parseInt(prompt("Ingrese el numero 2"));
    console.log(num1, num2);
    let suma = num1 + num2;
    console.log(suma);
};
// resta
const restaDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese el numero 1"));
    let num2 = parseInt(prompt("Ingrese el numero 2"));
    console.log(num1, num2);
    let suma = num1 - num2;
    console.log(suma);
};
// multiplicación
const multDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese el numero 1"));
    let num2 = parseInt(prompt("Ingrese el numero 2"));
    console.log(num1, num2);
    let suma = num1 * num2;
    console.log(suma);
};
// división
const divDosNumeros = () => {
    let num1 = parseInt(prompt("Ingrese el numero 1"));
    let num2 = parseInt(prompt("Ingrese el numero 2"));
    console.log(num1, num2);
    let suma = num2 == 0 ? "No se puede dividir por cero" : num1 / num2;
    console.log(suma);
};