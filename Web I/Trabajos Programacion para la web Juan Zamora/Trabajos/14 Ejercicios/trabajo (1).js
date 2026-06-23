function ejercicio1() {
    alert("---EJERCICIO 1: MEDIDAS DE LONGITUD---");
    var unidadLong, cantidad, mi, km ,mt;
    unidadLong = parseInt(prompt("Digite 1 para Millas - 2 para Kilometros - 3 para Metros"));
    cantidad = parseInt(prompt("Digite la distancia"));
    switch (unidadLong){
        case 1:
            km = cantidad * 1.6093;
            mt = cantidad * 1609.34;
            alert(cantidad + "Millas, equivalen a " + km + "Kilometros, y a " + mt + "Metros");
            break;
        case 2:
            mi = cantidad * 0.621371;
            mt = cantidad * 1000;
            alert(cantidad + "Kilometros, equivalen a " + mi + "Millas, y a " + mt + "Metros");
            break;
        case 3:
            mi = cantidad * 0.000621371;
            km = cantidad / 1000;
            alert(cantidad + "Metros, equivalen a " + mi + "Millas, y a " + km + "Kilometros");
            break;
    default:
        alert("Valor INCORRECTO");
        break;
}
}

function ejercicio2() {
    alert("---EJERCICIO 2: NUMERO DE 6 CIFRAS---");
    var d1, d2, d3, d4, d5, d6, num, coc;
    num = parseInt(prompt("Digite un numero de 6 cifras"));
    d6 = num % 10;
    coc = Math.trunc(num / 10);
    d5 = coc % 10;
    coc = Math.trunc(coc / 10);
    d4 = coc % 10;
    coc = Math.trunc(coc / 10);
    d3 = coc % 10;
    coc = Math.trunc(coc / 10);
    d2 = coc % 10;
    coc = Math.trunc(coc / 10);
    d1 = coc % 10;
    coc = Math.trunc(coc / 10);
    alert("La suma es: " + (d3 + d4));
    alert("La multiplicacion es: " + (d1 * d6));
    alert("La resta es: " + (d2 - d5));

    var suma, mult, rest;
    suma = d3 + d4
    alert("La suma de las cifras centrales es: " + suma);
    mult = d1 * d6
    alert("La multiplicacion de los extremos es: " + mult);
    rest = d2 - d5
    alert("La resta de las cifras es: " + rest);
}

function ejercicio3() {
    alert("---EJERCICIO 3: CALCULAR TIEMPO---");
    let segundos, minutos, horas;

    segundos = parseInt(prompt("Ingrese segundos: "));
    minutos = parseInt(prompt("Ingrese minutos: "));
    horas = parseInt(prompt("Ingrese horas: "));

    segundos = segundos + 1;

    if (segundos == 60) {
        segundos = 0;
        minutos = minutos + 1;

        if (minutos == 60) {
            minutos = 0;
            horas = horas + 1;

            if (horas == 24) {  
                horas = 0;
        }
    }
}

    alert("Nueva hora: " + horas + ":" + minutos + ":" + segundos);
}

function ejercicio4() {
    alert("---EJERCICIO 4: RAICES---");
    var a, b, c, discriminante, x1, x2;

    a = parseFloat(prompt("Ingrese el valor de a: "));
    b = parseFloat(prompt("Ingrese el valor de b: "));
    c = parseFloat(prompt("Ingrese el valor de c: "));
    
    discriminante = (b * b) - (4 * a * c);
    
    if (discriminante > 0) {
    
        x1 = (-b + Math.sqrt(discriminante)) / (2 * a); //Math.sqrt(Funcion de JavaScript para sacar raiz)
        x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    
        alert("Hay dos soluciones reales");
        alert("x1 = " + x1);
        alert("x2 = " + x2);
    
    } else if (discriminante == 0) {
    
        x1 = (-b) / (2 * a);
    
        alert("Hay una sola solucion");
        alert("x = " + x1);
    
    } else {
    
        alert("Hay dos soluciones imaginarias");
    }
}

function ejercicio5() {
    alert("---EJERCICIO 5: TEMPERATURAS---");
    let temperatura, menores, iguales, mayores;
    menores = 0;
    iguales = 0;
    mayores = 0;

    while (temperatura !== 99 && temperatura !== -99) {
        temperatura = parseInt(prompt("Ingrese una temperatura:"));

        if (temperatura == 99 || temperatura == -99) {
            break;
        }

        if (temperatura < 0) {
            menores++;
        } else if (temperatura == 0) {
            iguales++;
        } else {
            mayores++;
        }
    }
    alert("Temperaturas menores que 0: " + menores);
    alert("Temperaturas iguales a 0: " + iguales);
    alert("Temperaturas mayores que 0: " + mayores);
}

function ejercicio6() {
    alert("---EJERCICIO 6: RADARES AVIONES---");
    let numero, d1, d2, d3, d4;

    do {

        numero = Number(prompt("Ingrese un número de 4 dígitos"));

        if (numero < 1000 || numero > 9999) {
            alert("Error: número no válido ");
        }

    } while (numero < 1000 || numero > 9999);

    d1 = parseInt(numero / 1000);
    d2 = parseInt(numero / 100) % 10;
    d3 = parseInt(numero / 10) % 10;
    d4 = numero % 10;

    if (d1 % 2 === 0) {
        alert("Hay aeronave en el aire ");
    } else {
        alert("No hay aeronave en el aire ");
    }

    if (d2 === 1) {
        alert("Avión militar ");
    } else if (d2 === 2) {
        alert("Avión civil de carga ");
    } else if (d2 === 3) {
        alert("Avión civil de pasajeros ");
    } else if (d2 === 4) {
        alert("Aeronave sin permiso ");
    } else if (d2 === 5) {
        alert("Aeronave de supertransporte ");
    } else if (d2 === 6) {
        alert("Aeronave enemiga ");
    } else if (d2 === 7) {
        alert("Avión mixto ");
    } else if (d2 === 8) {
        alert("Helicóptero ");
    } else if (d2 === 9) {
        alert("Globo aerostático ");
    } else {
        alert("Dirigible ");
    }

    alert("Distancia: " + d3 + " km ");

    if (d4 === 0 || d4 === 1) {
        alert("Dirección: Norte ");
    } else if (d4 === 2 || d4 === 3) {
        alert("Dirección: Sur ");
    } else if (d4 === 4 || d4 === 5) {
        alert("Dirección: Oriente ");
    } else if (d4 === 6 || d4 === 7) {
        alert("Dirección: Occidente ");
    } else {
        alert("Dirección: Desconocida ");
    }
}
//6 ejercicios
