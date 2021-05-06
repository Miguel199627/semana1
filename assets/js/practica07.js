const recetas  = () => {
    let depa = prompt("Ingrese una opción de departamento: \n A - Valle del Cauca \n B - La guajira \n C - Nariño \n D - Cundinamarca \n E - Choco");
    if (depa == null) {
        alert("Debe ingresar algun departamento");
    } else {
        depa = depa.toLowerCase();
        if (depa != "a" && depa != "b" && depa != "c" && depa != "d" && depa != "e") {
            alert("Debe ser una opción entre A y E");
        } else {
            if (depa == "a") { // Departamento: Valle del Cauca
                let ciudad = prompt("Ingrese una opción de ciudad: \n A - Cali \n B - Buga \n C - Cartago \n D - Palmira");
                if (ciudad == null) {
                    alert("Debe ingresar alguna ciudad");
                } else {
                    ciudad = ciudad.toLowerCase();
                    if (ciudad != "a" && ciudad != "b" && ciudad != "c" && ciudad != "d") {
                        alert("Debe ser una opción entre A y D");
                    } else {
                        if (ciudad == "a") { // Ciudad: Cali
                            let receta = prompt("Ingrese una opción de receta: \n A - Empanadas \n B - Aborrajados \n C - Marranitas");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de las empanadas");
                                    if (receta == "b") alert("Receta de los aborrajados");
                                    if (receta == "c") alert("Receta de las marranitas");
                                }
                            }
                        } else if (ciudad == "b") { // Ciudad: Buga
                            let receta = prompt("Ingrese una opción de receta: \n A - Sopa de tortilla \n B - Sancocho de gallina \n C - Arroz atollado");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la sopa de tortilla");
                                    if (receta == "b") alert("Receta del sancocho de gallina");
                                    if (receta == "c") alert("Receta del arroz atollado");
                                }
                            }
                        } else if (ciudad == "c") { // Ciudad: Cartago
                            let receta = prompt("Ingrese una opción de receta: \n A - Almojábana \n B - Pandeyuca \n C - Pan de queso campesino");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la almojábana");
                                    if (receta == "b") alert("Receta del pandeyuca");
                                    if (receta == "c") alert("Receta del pan de queso campesino");
                                }
                            }
                        } else { // Ciudad: Palmira
                            let receta = prompt("Ingrese una opción de receta: \n A - La Mazamorra \n B - Lulada \n C - Cholado");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la mazamorra");
                                    if (receta == "b") alert("Receta del lulada");
                                    if (receta == "c") alert("Receta del cholado");
                                }
                            }
                        }
                    }
                }
            }  else if (depa == "b") { // Departamento: La guajira
                let ciudad = prompt("Ingrese una opción de ciudad: \n A - Riohacha \n B - Uribia \n C - Palomino \n D - Albania");
                if (ciudad == null) {
                    alert("Debe ingresar alguna ciudad");
                } else {
                    ciudad = ciudad.toLowerCase();
                    if (ciudad != "a" && ciudad != "b" && ciudad != "c" && ciudad != "d") {
                        alert("Debe ser una opción entre A y D");
                    } else {
                        if (ciudad == "a") { // Ciudad: Riohacha
                            let receta = prompt("Ingrese una opción de receta: \n A - Friche \n B - Iguana guisada con coco \n C - Salpicón de chucho");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del friche");
                                    if (receta == "b") alert("Receta de la iguana guisada con coco");
                                    if (receta == "c") alert("Receta del salpicón de chucho");
                                }
                            }
                        } else if (ciudad == "b") { // Ciudad: Uribia
                            let receta = prompt("Ingrese una opción de receta: \n A - Arroz con camarones \n B - Iguaraya \n C - Arroz de tortuga");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del arroz con camarones");
                                    if (receta == "b") alert("Receta de la iguaraya");
                                    if (receta == "c") alert("Receta del arroz de tortuga");
                                }
                            }
                        } else if (ciudad == "c") { // Ciudad: Palomino
                            let receta = prompt("Ingrese una opción de receta: \n A - Pescado frito \n B - Chicha \n C - Chirrinchi");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del pescado frito");
                                    if (receta == "b") alert("Receta de la chicha");
                                    if (receta == "c") alert("Receta del chirrinchi");
                                }
                            }
                        } else { // Ciudad: Albania
                            let receta = prompt("Ingrese una opción de receta: \n A - Byrek \n B - Baklava \n C - Trilece");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del byrek");
                                    if (receta == "b") alert("Receta del baklava");
                                    if (receta == "c") alert("Receta del trilece");
                                }
                            }
                        }
                    }
                }
            }  else if (depa == "c") { // Departamento: Nariño
                let ciudad = prompt("Ingrese una opción de ciudad: \n A - Pasto \n B - Tumaco \n C - Ipiales \n D - Túquerres");
                if (ciudad == null) {
                    alert("Debe ingresar alguna ciudad");
                } else {
                    ciudad = ciudad.toLowerCase();
                    if (ciudad != "a" && ciudad != "b" && ciudad != "c" && ciudad != "d") {
                        alert("Debe ser una opción entre A y D");
                    } else {
                        if (ciudad == "a") { // Ciudad: Pasto
                            let receta = prompt("Ingrese una opción de receta: \n A - Cuy \n B - Frito pastuso \n C - Empanada de añejo");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del cuy");
                                    if (receta == "b") alert("Receta del frito pastuso");
                                    if (receta == "c") alert("Receta de la empanada de añejo");
                                }
                            }
                        } else if (ciudad == "b") { // Ciudad: Tumaco
                            let receta = prompt("Ingrese una opción de receta: \n A - Encocao de pescado \n B - Encocao de cangrejo \n C - Encocao de camarón");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del encocao de pescado");
                                    if (receta == "b") alert("Receta del encocao de cangrejo");
                                    if (receta == "c") alert("Receta del encocao de camarón");
                                }
                            }
                        } else if (ciudad == "c") { // Ciudad: Ipiales
                            let receta = prompt("Ingrese una opción de receta: \n A - Cuy asado \n B - Sopa de arrancadas \n C - Sopa chorriada");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del cuy asado");
                                    if (receta == "b") alert("Receta de la sopa de arrancadas");
                                    if (receta == "c") alert("Receta de la sopa chorriada");
                                }
                            }
                        } else { // Ciudad: Túquerres
                            let receta = prompt("Ingrese una opción de receta: \n A - Papa chorriada \n B - Ullucos \n C - Cuy con papa en pinzon");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la Papa chorriada");
                                    if (receta == "b") alert("Receta de los Ullucos");
                                    if (receta == "c") alert("Receta del cuy con papa en pinzon");
                                }
                            }
                        }
                    }
                }
            } else if (depa == "d") { // Departamento: Cundinamarca
                let ciudad = prompt("Ingrese una opción de ciudad: \n A - Bogota \n B - Soacha \n C - Zipaquirá \n D - Funza");
                if (ciudad == null) {
                    alert("Debe ingresar alguna ciudad");
                } else {
                    ciudad = ciudad.toLowerCase();
                    if (ciudad != "a" && ciudad != "b" && ciudad != "c" && ciudad != "d") {
                        alert("Debe ser una opción entre A y D");
                    } else {
                        if (ciudad == "a") { // Ciudad: Bogota
                            let receta = prompt("Ingrese una opción de receta: \n A - Changua \n B - Ajiaco Santafereño \n C - Chocolate con queso");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la changua");
                                    if (receta == "b") alert("Receta del ajiaco Santafereño");
                                    if (receta == "c") alert("Receta del chocolate con queso");
                                }
                            }
                        } else if (ciudad == "b") { // Ciudad: Soacha
                            let receta = prompt("Ingrese una opción de receta: \n A - Garulla \n B - Almojábana Soachena \n C - Postre Soacheno");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la garulla");
                                    if (receta == "b") alert("Receta de la almojábana soachena");
                                    if (receta == "c") alert("Receta del postre soacheno");
                                }
                            }
                        } else if (ciudad == "c") { // Ciudad: Zipaquirá
                            let receta = prompt("Ingrese una opción de receta: \n A - Ajiaco \n B - Guarapo \n C - Sobrebarriga al horno");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del ajiaco");
                                    if (receta == "b") alert("Receta del guarapo");
                                    if (receta == "c") alert("Receta de la sobrebarriga al horno");
                                }
                            }
                        } else { // Ciudad: Funza
                            let receta = prompt("Ingrese una opción de receta: \n A - Masato \n B - Kumis \n C - La gallina criolla");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del masato");
                                    if (receta == "b") alert("Receta del kumis");
                                    if (receta == "c") alert("Receta de la gallina criolla");
                                }
                            }
                        }
                    }
                }
            } else if (depa == "e") { // Departamento: Choco
                let ciudad = prompt("Ingrese una opción de ciudad: \n A - Quibdó \n B - Bahia Solano \n C - Bellavista \n D - Condoto");
                if (ciudad == null) {
                    alert("Debe ingresar alguna ciudad");
                } else {
                    ciudad = ciudad.toLowerCase();
                    if (ciudad != "a" && ciudad != "b" && ciudad != "c" && ciudad != "d") {
                        alert("Debe ser una opción entre A y D");
                    } else {
                        if (ciudad == "a") { // Ciudad: Quibdó
                            let receta = prompt("Ingrese una opción de receta: \n A - Arroz bochinche \n B - Arroz de maíz con camarón de río \n C - Sopa de Queso");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del arroz bochinche");
                                    if (receta == "b") alert("Receta del arroz de maíz con camarón de río");
                                    if (receta == "c") alert("Receta de la sopa de queso");
                                }
                            }
                        } else if (ciudad == "b") { // Ciudad: Bahia Solano
                            let receta = prompt("Ingrese una opción de receta: \n A - Arroz con coco \n B - Ñame \n C - Filete de atun");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del arroz con coco");
                                    if (receta == "b") alert("Receta del ñame");
                                    if (receta == "c") alert("Receta del filete de atun");
                                }
                            }
                        } else if (ciudad == "c") { // Ciudad: Bellavista
                            let receta = prompt("Ingrese una opción de receta: \n A - La tonga \n B - Caldo de gallina criolla \n C - Corviche");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta de la tonga");
                                    if (receta == "b") alert("Receta del caldo de gallina criolla");
                                    if (receta == "c") alert("Receta del corviche");
                                }
                            }
                        } else { // Ciudad: Condoto
                            let receta = prompt("Ingrese una opción de receta: \n A - Arroz con longaniza \n B - Arroz atollado \n C - Arroz clavado");
                            if (receta == null) {
                                alert("Debe ingresar alguna receta");
                            } else {
                                receta = receta.toLowerCase();
                                if (receta != "a" && receta != "b" && receta != "c") {
                                    alert("Debe ser una opción entre A y C");
                                } else {
                                    if (receta == "a") alert("Receta del arroz con longaniza");
                                    if (receta == "b") alert("Receta del arroz atollado");
                                    if (receta == "c") alert("Receta del arroz clavado");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};