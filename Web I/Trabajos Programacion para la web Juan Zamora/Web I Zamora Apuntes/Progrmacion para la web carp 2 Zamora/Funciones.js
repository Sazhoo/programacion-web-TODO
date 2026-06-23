//Funciones
//SUMA
// let num1, num2;
//     num1 = parseInt(prompt('Numero 1'))
//     num2= parseInt(prompt('Numero 2'))
// Crea una función llamada "suma"
// Declara variables para almacenar números y resultado
 // Pide un número al usuario y lo convierte a entero
 // Pide otro número al usuario y lo convierte a entero
 // Suma ambos números
   // Muestra el resultado en pantalla
let num1, num2;

function suma(){
    let num1, num2, suma;
    num1 = parseInt(prompt('Numero 1'));
    num2 = parseInt(prompt('Numero 2'));
    suma = num1+num2;
    document.write('El resultado de la suma es: '+suma);
}

function resta(num1, num2){
    let resta;
    resta = num1 - num2;
    document.write('<br>');
    document.write('El resultado de la resta es: '+ resta);
}

function mult(num1, num2){
    let result = num1 * num2;
    return result;
}

suma();
num1 = parseInt(prompt('Numero 1'));
num2 = parseInt(prompt('Numero 2'));
resta(num1, num2);
document.write('<br>')
document.write('El resultado de la multiplicación es: ' + (mult(num1, num2)));
