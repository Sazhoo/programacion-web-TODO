// //Ejercicio 1
let und, Cant, Mi, Km, Mt;
und = parseInt(prompt("Digite 1 para Millas - 2 para Km - 3 Metros"));
Cant = parseInt(prompt("Digite el valor a convertir"));
switch (und){
    case 1: //CTRL + H para buscar
        Km = Cant * 1.6093;
        Mt = Cant * 1609.34;
        document.write(Cant + " Millas, equivalen a" + Km + "Kilometros;" + Mt + "Metros");
        break;
    case 2: 
        Mi = Cant * 0.621371;
        Mt = Cant * 1000;
        document.write(Cant + "Kilometros, equivalen a " + Mi + "Millas, y a " + Mt + "Metros");
        break;
    case 3:
        Mi = Cant * 0.000621371;
        Km = Cant / 1000;
        document.write(Cant + "Metros, equivalen a " + Mi + "Millas, y a " + Km + "Kilometros");
        break;
    default:
        document.write("Valor INCORRECTO");
        break;
}
// //Ejercicio 2
let num, d1, d2, d3, d4, d5, d6, coc;
num = prompt("Digite un numero de 6 cifras")
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
document.write(d6 +" " + d5 + " "+ d4 + " " + d3 + " " + d2 + " " + d1);

document.write("La suma de las cifras centrales es: " + (d3+d4));
document.write("El resultado de la multiplicacion es:" * (d1*+d6));
document.write("La resta es: " + (d2-d5)); 
//1 hora = 60 minutos, 1 minuto = 60 segundos, y 1 hora = 3600 segundos.

// //Ejercicio 3
let ss, hh, mm;

ss = parseInt(prompt("Ingrese segundos: "));
hh = parseInt(prompt("Ingrese horas: "));
mm = parseInt(prompt("Ingrese minutos: "));
// ++; sumar 1
ss++;
//Operaciones === Estrictamente Igual
if (ss === 60) {
    ss = 0;
    mm++;

    if (mm === 60) {
        mm = 0;
        hh++;

        if (hh === 24) {
            hh = 0;
        }
    }
}

alert("Nueva hora: " + hh + ":" + mm + ":" + ss);
// Ejercicio 4
// 2. ECUACIÓN CUADRÁTICA

let a = parseFloat(prompt("Ingrese valor de a:"));
let b = parseFloat(prompt("Ingrese valor de b:"));
let c = parseFloat(prompt("Ingrese valor de c:"));

// Discriminante
let discriminante = (b * b) - (4 * a * c);

document.write("Discriminante: " + discriminante + "<br>");
// ax
// Caso 1: DOS soluciones reales
if (discriminante > 0) {

    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    document.write("Hay DOS soluciones reales <br>");
    document.write("x1 = " + x1 + "<br>");
    document.write("x2 = " + x2);
}

// Caso 2: UNA solución real
else if (discriminante === 0) {

    let x = (-b) / (2 * a);

    document.write("Hay UNA solución real <br>");
    document.write("x = " + x);
}

// // Caso 3: Soluciones imaginarias
else {

    document.write("Hay DOS soluciones imaginarias <br>");

    let parteReal = (-b / (2 * a));
    let parteImaginaria =
        Math.sqrt(-discriminante) / (2 * a);

    document.write(
        "x1 = " +
        parteReal + " + " +
        parteImaginaria + "i <br>"
    );

    document.write(
        "x2 = " +
        parteReal + " - " +
        parteImaginaria + "i"
    );
}
//Ejercicio 5
