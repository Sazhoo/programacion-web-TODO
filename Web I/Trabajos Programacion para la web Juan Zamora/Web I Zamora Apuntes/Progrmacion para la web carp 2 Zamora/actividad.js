// // let ss, hh, mm;

// // ss = parseInt(prompt("Ingrese segundos: "));
// // hh = parseInt(prompt("Ingrese horas: "));
// // mm = parseInt(prompt("Ingrese minutos: "));
// // // ++; sumar 1
// // ss++;
// // //Operaciones === Estrictamente Igual
// // if (ss === 60) {
// //     ss = 0;
// //     mm++;

// //     if (mm === 60) {
// //         mm = 0;
// //         hh++;

// //         if (hh === 24) {
// //             hh = 0;
// //         }
// //     }
// // }
// // alert("Nueva hora: " + hh + ":" + mm + ":" + ss);
// let menores = 0, iguales = 0, mayores = 0; //Declarar variable

// while (true) {  //True para que sirva el while
//     let tempt = Number(prompt("Ingrese temperatura (99 o -99 para salir):")); //Se da orden de que se repita condicion hasta que se coloque 99 o -99
//     //El texto se convierte en numero con el number
//     // Condición de parada inmediata
//     if (tempt === 99 || tempt === -99) break;

//     // Conteo simplificado
//     if (tempt < 0) menores++; //La condicion es que si la tempt es < que 0 significa que saldra en pantalla que es menor
//     else if (tempt === 0) iguales++; //La condicion es que si la tempt es === que 0 significa que saldra en pantalla que es igual
//     else mayores++; // de lo contrario a el if y el else if sera mayor
// }

// // Mostrar resultados simplificados
// alert(
//     `Menores que 0°: ${menores}` + //$ es como el f' en python
//     `Iguales a 0°: ${iguales}` +
//     `Mayores que 0°: ${mayores}`
// );
// //Ejercicio 2
// let numero;

// do {

//     numero = Number(prompt("Ingrese un número de 4 dígitos"));

//     if (numero < 1000 || numero > 9999) {
//         document.write("Error: número no válido <br>");
//     }

// } while (numero < 1000 || numero > 9999);

// let d1, d2, d3, d4;

// d1 = parseInt(numero / 1000);
// d2 = parseInt(numero / 100) % 10;
// d3 = parseInt(numero / 10) % 10;
// d4 = numero % 10;

// // Estado de aeronave
// if (d1 % 2 === 0) {
//     document.write("Hay aeronave en el aire <br>");
// } else {
//     document.write("No hay aeronave en el aire <br>");
// }

// // Tipo de aeronave
// if (d2 === 1) {
//     document.write("Avión militar <br>");
// } else if (d2 === 2) {
//     document.write("Avión civil de carga <br>");
// } else if (d2 === 3) {
//     document.write("Avión civil de pasajeros <br>");
// } else if (d2 === 4) {
//     document.write("Aeronave sin permiso <br>");
// } else if (d2 === 5) {
//     document.write("Aeronave de supertransporte <br>");
// } else if (d2 === 6) {
//     document.write("Aeronave enemiga <br>");
// } else if (d2 === 7) {
//     document.write("Avión mixto <br>");
// } else if (d2 === 8) {
//     document.write("Helicóptero <br>");
// } else if (d2 === 9) {
//     document.write("Globo aerostático <br>");
// } else {
//     document.write("Dirigible <br>");
// }

// // Distancia
// document.write("Distancia: " + d3 + " km <br>");

// // Dirección
// if (d4 === 0 || d4 === 1) {
//     document.write("Dirección: Norte <br>");
// } else if (d4 === 2 || d4 === 3) {
//     document.write("Dirección: Sur <br>");
// } else if (d4 === 4 || d4 === 5) {
//     document.write("Dirección: Oriente <br>");
// } else if (d4 === 6 || d4 === 7) {
//     document.write("Dirección: Occidente <br>");
// } else {
//     document.write("Dirección: Desconocida <br>");
// }
let cant1, cant2, cant3, cantTotal, PrecioT;
let frec, dia;
do {
    cant1 = prompt('Cantidad de huevos Tipo A: ');
    } while (cant1<0);
do {
    cant2 = prompt('Cantidad de huevos Tipo AA: ');
    } while (cant2<0);
do {
    cant3 = prompt('Cantidad de huevos Tipo AAA: ');
    } while (cant3<0);
do {
    frec = prompt('Si es cliente frecuente digite 1, de lo contario 0:');
    } while (frec != 1 && frec != 0);
do {
    dia = prompt('Digite 1 si compró de L-V; 2 si compró el Sábado; 3 si compró el Domingo');
    } while (dia<1 || dia>3);
   // dia = prompt("Digite 1 si compro de L-V; 2 Si compro el sabado; Si compro el Domingo")