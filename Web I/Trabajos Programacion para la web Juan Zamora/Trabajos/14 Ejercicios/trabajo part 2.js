
function ejercicio7() {
    alert("---EJERCICIO 7: HUEVOS---");
    let tipo1, tipo2, tipo3, cant1, cant2, cant3, canTotal, PrecioT;
    let frec, dia;
    do {
        cant1 = prompt("Cantidad de huevos Tipo A: ");
        } while (cant1 < 0);
    do {
        cant2 = prompt("Cantidad de huevos tipo AA: ")
        } while (cant2 < 0);
    do {
        cant3 = prompt("Cantidad de huevos tipo AAA: ")
        } while (cant3 < 0);
    do {
        frec = prompt("Si el cliente frecuente digita 1, de lo contrario 0: ")
        } while (frec != 1 && frec != 0);
    do {
        dia = prompt("Digite 1 si compro de L-V; 2 si compro el sabado; 3 si compro el domingo ")
        } while (dia < 1 || dia > 3);
}

function ejercicio8() {
    alert("---EJERCICIO 8: N y X---");
    let x = parseFloat(prompt("Ingresa el valor de X:"));
    let n = parseInt(prompt("Ingresa el valor de N (debe ser un número par):"));

    let sumaTotal = 0;

    for (let i = 2; i <= n; i += 2) {
        let termino = Math.pow(x, i) / i;
        sumaTotal = sumaTotal + termino;
    }
    alert("El resultado de la serie es: " + sumaTotal);
}

function ejercicio9() {
    alert("---EJERCICIO 9: CLASIFICACION PERSONAS POR DEPORTE---");
    let ajedrez = 0;
    let atletismo = 0;
    let futbol = 0;
    let gimnasia = 0;
    let natacion = 0;

    let totalPersonas = 400;

    for (let i = 1; i <= totalPersonas; i++) {

        let opcion = prompt(
            "Persona " + i + " de " + totalPersonas + "\n" +
            "Selecciona el número del deporte que practica:\n" +
            "1. Ajedrez\n" +
            "2. Atletismo\n" +
            "3. Fútbol\n" +
            "4. Gimnasia\n" +
            "5. Natación\n" +
            "0. -SALIR-"
        );

        if (opcion === "1") {
            ajedrez++;
        } else if (opcion === "2") {
            atletismo++;
        } else if (opcion === "3") {
            futbol++;
        } else if (opcion === "4") {
            gimnasia++;
        } else if (opcion === "5") {
            natacion++;
        } else {
            alert("Opción no válida. Esta persona no se sumará a ningún deporte.");
            break;
        }
    }

    let resultados = "--- RESULTADOS DE LA CLASIFICACIÓN ---\n" +
                     "Ajedrez: " + ajedrez + " personas\n" +
                     "Atletismo: " + atletismo + " personas\n" +
                     "Fútbol: " + futbol + " personas\n" +
                     "Gimnasia: " + gimnasia + " personas\n" +
                     "Natación: " + natacion + " personas";

    alert(resultados);
}

function ejercicio10() {
    alert("---EJERCICIO 10: CONTRASEÑA---");
    const CLAVE_CORRECTA = "Dh123456789";

    let intentos = 0;
    let accesoConcedido = false;

    while (intentos < 3 && accesoConcedido === false) {
        let contraseñaUsuario = prompt("Introduce tu contraseña:");
        intentos++; 

        if (contraseñaUsuario === CLAVE_CORRECTA) {
            alert("Acceso concedido");
            accesoConcedido = true; 
        } else {
            alert("Acceso Denegado");
        }
    }
    if (accesoConcedido === false) {
        alert("Alerta, intruso");
    }
}

function ejercicio11() {
    alert("---EJERCICIO 11: NUMEROS PARES---");
    let contadorPares = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseInt(prompt("Introduce un número par (o un impar para salir):"));

        if (numero % 2 === 0) {
            contadorPares++; // Es par, lo sumamos al contador y el bucle sigue
        } else {
            // Es impar, así que cambiamos la variable para que el bucle se detenga
            continuar = false; 
        }
    }
    alert("El programa ha terminado porque ingresaste un número impar.");
    alert("Cantidad de números pares ingresados: " + contadorPares);
}

function ejercicio12() {
    alert("---EJERCICIO 12: DIAS DE LA SEMANA---");
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let numero = parseInt(prompt("Por favor digite un numero del 1 al 7: "));

    if (isNaN(numero) || numero < 1 || numero > 7) {
        alert("Error: Entrada inválida. Debe ingresar un número entero entre 1 y 7.");
        alert("Error: Debe ingresar un número entero entre 1 y 7.");
    } else {
        let diaCorrespondiente = diasSemana[numero - 1];

        alert("El día correspondiente al número " + numero + " es: " + diaCorrespondiente);
        alert("El día es: " + diaCorrespondiente);
    }
}

function ejercicio13() {
    alert("---EJERCICIO 13: SUMA DE NUMEROS---");
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma_total = 0

    for (let i = 0; i < numeros.length; i++) {
        suma_total += numeros[i]; 
    }

    alert("La suma total es: " + suma_total);
}

function ejercicio14() {
    alert("---EJERCICIO 14: CONTADOR NUMEROS PARES E INPARES---");
    let numeros = [];

    while (true) {
        let entrada = prompt("Introduce un número (0 o texto para terminar):");

        if (entrada === null) {
            break;
        }

        if (entrada === "" || entrada === "0") {
            break; 
        }

        let numeroConvertido = Number(entrada);
    
        if (numeroConvertido !== numeroConvertido) {
            break;
        }

        numeros.push(numeroConvertido);
    }

    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert("Cantidad de números pares: " + pares);
    alert("Cantidad de números impares: " + impares);
    alert("Array completo: " + numeros);
}

while (true) {
    let opcion = prompt(
        "===MENU DE EJERCICIOS==\n" +
        "1. MEDIDAS DE LONGITUD\n" +
        "2. NUMERO DE 6 CIFRAS\n" +
        "3. CALCULAR TIEMPO\n" +
        "4. RAICES\n" +
        "5. TEMPERATURAS\n" +
        "6. RADARES AVIONES\n" +
        "7. HUEVOS\n" +
        "8. N y X\n" +
        "9. CLASIFICACION DE PERSONAS POR DEPORTE\n" +
        "10. CONTRASEÑA\n" +
        "11. NUMEROS PARES\n" +
        "12. DIAS DE LA SEMANA\n" +
        "13. SUMA DE NUMEROS\n" +
        "14. CONTADOR NUMEROS PARES E INPARES\n" +
        "0. -SALIR-\n\n" +
        "Elija el numero del ejercico que desea correr: "
    );

    if (opcion === null || opcion === "0") {
        alert("Programa terminado.");
        break;
    }
    switch (opcion) {
        case "1":
            ejercicio1();
            break;
        case "2":
            ejercicio2();
            break;
        case "3":
            ejercicio3();
            break;
        case "4":
            ejercicio4();
            break;
        case "5":
            ejercicio5();
            break;
        case "6":
            ejercicio6();
            break;
        case "7":
            ejercicio7();
            break;
        case "8":
            ejercicio8();
            break;
        case "9":
            ejercicio9();
            break;
        case "10":
            ejercicio10();
            break;
        case "11":
            ejercicio11();
            break;
        case "12":
            ejercicio12();
            break;
        case "13":
            ejercicio13();
            break;
        case "14":
            ejercicio14();
            break;
        default:
            alert("Opción no válida. Por favor, elige un número del menú.");
            break;
    }
}