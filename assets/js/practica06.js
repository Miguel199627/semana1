// Minicalculadora
const miniCalculadora = () => {
    // creamos opción de menu
    let op = prompt("Escriba la opción correspondiente a la operación: \n A - Suma \n B - Resta \n C - Multiplicar \n D - Dividir");
    if (op != "a" && op != "b" && op != "c" && op != "d") {
        alert("Debe ser una opción entre A y D");
    } else {
        if (op == null) {
            alert("Debe ingresar algun dato");
        } else {
            op = op.toLowerCase();
            let num1 = parseFloat(prompt("Ingrese el numero 1"));
            let num2 = parseFloat(prompt("Ingrese el numero 2"));
            let resultado = 0; // Siempre inicializar las variables
            if (op == "a")  resultado = num1 + num2;
            if (op == "b")  resultado = num1 - num2;
            if (op == "c")  resultado = num1 * num2;
            if (op == "d")  {
                if(num2 === 0) { // Estricto === siempre y cuando se validen enteros o floats
                    alert("No es posible dividir por cero");
                } else {
                    resultado = num1 / num2;
                }
            }
            alert("El resultado es: " + resultado);
        }
        // switch (op) {
        //     case "a":
        //         sumaDosNumeros();
        //     break;
        //     case "b":
        //         restaDosNumeros();
        //     break;
        //     case "c":
        //         multDosNumeros();
        //     break;
        //     case "d":
        //         divDosNumeros();
        //     break;
        // }
    }
};