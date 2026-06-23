//Vanti
//Se declara variable
let cuenta = prompt("Ingrese número de cuenta de 6 dígitos:");
//Se condiciona
if (cuenta.length != 6) {
//Pone para que salga en la pagina
    document.write("<h2>ERROR: El número de cuenta debe tener 6 dígitos</h2>");
}
else {

    let estrato = parseInt(prompt("Ingrese su estrato (1-6):"));

    let servicio = parseInt(prompt(
        "Tipo de servicio:\n1. Doméstico\n2. Comercial\n3. Industrial"
    ));

    let consumo = parseFloat(prompt("Ingrese consumo en m3:"));

    // TARIFA
    let tarifaC = 0;

    if (consumo < 35) {
        tarifaC = 545;
    } else if (consumo >= 35 && consumo <= 75) {
        tarifaC = 600;
    } else if (consumo >= 76 && consumo <= 144) {
        tarifaC = 750;
    } else {
        tarifaC = 803;
    }

    // VALOR CONSUMO
    let valorConsumo = consumo * tarifaC;

    // CARGO FIJO
    let cargoFijo = 0;

    if (estrato == 1 || estrato == 2) {
        cargoFijo = 15700;
    } else if (estrato == 3 || estrato == 4) {
        cargoFijo = 20200;
    } else {
        cargoFijo = 34075;
    }

    // SUBTOTAL
    let subtotal = valorConsumo + cargoFijo;

    // COBRO ADICIONAL
    let adicional = 0;

    if (servicio == 1) {
        adicional = subtotal * 0.40;
    } else if (servicio == 2) {
        adicional = subtotal * 0.55;
    } else if (servicio == 3) {
        adicional = subtotal * 0.70;
    }

    // TOTAL
    let total = subtotal + adicional;

    // DESCUENTO
    let descuento = 0;

    if (servicio == 1 && consumo <= 30) {
        descuento = total * 0.25;
    } else if (servicio == 2 && consumo >= 30 && consumo <= 75) {
        descuento = total * 0.17;
    } else if (servicio == 3) {
        descuento = total * 0.07;
    }

    // TOTAL FINAL
    let totalPagar = total - descuento;

    // RESULTADOS EN LA PÁGINA
    document.write("<h2>RESULTADOS</h2>");

    document.write("Número de cuenta: " + cuenta + "<br>");
    document.write("Estrato: " + estrato + "<br>");
    document.write("Servicio: " + servicio + "<br>");
    document.write("Consumo: " + consumo + " m3<br><br>");

    document.write("Valor consumo: $" + valorConsumo + "<br>");
    document.write("Cargo fijo: $" + cargoFijo + "<br>");
    document.write("Cobro adicional: $" + adicional + "<br>");
    document.write("Descuento: $" + descuento + "<br><br>");

    document.write("<h2>TOTAL A PAGAR: $" + totalPagar + "</h2>");
}
//Notas de estudiantes
let sumaInfo = 0;
let aprobadosMate = 0;

let mayorEstadistica = 0;
let menorInformatica = 5;

for (let i = 1; i <= 25; i++) {

    let mate = parseFloat(prompt("Ingrese nota Matemáticas del alumno " + i));

    let estadistica = parseFloat(prompt("Ingrese nota Estadística del alumno " + i));

    let info = parseFloat(prompt("Ingrese nota Informática del alumno " + i));

    // SUMAR INFORMÁTICA
    sumaInfo = sumaInfo + info;

    // APROBADOS MATEMÁTICAS
    if (mate >= 3) {
        aprobadosMate++;
    }

    // MAYOR ESTADÍSTICA
    if (estadistica > mayorEstadistica) {
        mayorEstadistica = estadistica;
    }

    // MENOR INFORMÁTICA
    if (info < menorInformatica) {
        menorInformatica = info;
    }
}

// PROMEDIO
let promedioInfo = sumaInfo / 25;

// RESULTADOS
document.write("<h2>RESULTADOS</h2>");

document.write("Promedio Informática: " + promedioInfo + "<br>");

document.write("Aprobados Matemáticas: " + aprobadosMate + "<br>");

document.write("Mayor nota Estadística: " + mayorEstadistica + "<br>");

document.write("Menor nota Informática: " + menorInformatica + "<br>");