console.log(Math.round(2.92)) //redondea un número al entero más cercano.
console.log(Math.round(2.95)) //redondea un número al entero más cercano.
console.log(Math.ceil(2.95)) //redondea hacia arriba al entero más cercano.
console.log(Math.ceil(2.91)) //redondea hacia arriba al entero más cercano.
console.log(Math.floor(2.97)) //redondea hacia abajo al entero más cercano.
console.log(Math.floor(2.94)) //redondea hacia abajo al entero más cercano.
console.log(Math.sin(45)) //devuelve el seno de un ángulo (en radianes).
console.log(Math.cos(90)) //devuelve el coseno de un ángulo (en radianes).
console.log(Math.exp(2)) //calcula e elevado a x.
console.log(Math.log(10)) //devuelve el logaritmo natural
console.log(Math.abs(-10)) //devuelve el valor absoluto (sin signo).
console.log(Math.max(120, 35, 78, 390, 456)) //devuelve el número mayor.
console.log(Math.min(120, 35, 78, 390, 456)) //devuelve el número menor.
console.log(Math.random()) //genera un número aleatorio entre 0 y 1.
console.log(Math.random()*10) //número aleatorio entre 0 y 10.
console.log(Math.round(Math.random()*10)) //redondea al entero más cercano.
console.log(Math.sqrt(225)) //calcula la raíz cuadrada.
console.log(Math.pow(2,7)) //calcula una potencia.
//FUNCIONES DE TEXTO:

let texto = 'Estimados estudiantes de SISTEMAS ATENEA 2. No duerman tanto. No hablen tanto. NO se les aconseja.'
console.log(texto.length); //permite calcular la cantidad de caracteres incluyendo el espacio
console.log(texto.slice(0, 21)); // saca una parte del texto entre la posicion 0 a 21, sin icnluir el 21
let cadena =texto.substring(25,42)
console.log(cadena) //Muestra en consola el valor almacenado en la variable
console.log(texto.replace(cadena, "CESDE")) //Reemplaza el texto contenido en cadena por "CESDE"
console.log(texto.toUpperCase())// Pasa todas las palabras de un texto  a Mayuscula (la primea letra)
console.log(texto.toLowerCase()) //Pasa todo las palabras de un texto  a Minuscula
console.log(texto.concat(cadena)) //Une el texto original con el contenido de cadena.
let mastexto = 'E S T I M A D O S  e s t u d i a n t e s'
console.log(mastexto.trim()) //Reduce o elimina los espacios en el texto
console.log(mastexto.split("S")) //Divide en un Array o divide todas las cadenas que puede

//Arrays
let frutas  = ['Mora', 'Uva', 'Piña', 'Fresa', 'Pera']; //EL INDICE INICIA DESDE 0, (ES MODIFICABLE).
console.log(frutas.length) //LENGTH = Permite calcular la cantidad de elementos del arreglo, en este caso frutas
console.log(frutas [3]) //Muestra el elemento en la posición 3
frutas [3] = 'Kiwi'
console.log (frutas) // Muestra el array actualizado
let masFrutas = frutas.with(3, 'Lima') 
console.log(masFrutas) //Muestra una copia del array con el cambio
console.log(frutas.at(4)) //Muestra el elemento en la posición 4

//Elementos arrays
let letras  = ['A', 'B', 'C', 'D', 'E'];
letras.pop() //Elimina el último elemento del array.
console.log(letras)
letras.push('q', 'w') //Agrega uno o más elementos al final del array.
console.log(letras)
letras.shift() //Elimina el primer elemento del array.
console.log(letras)
letras.unshift('C','E','S','D','E') //Agrega uno o más elementos al inicio del array.
console.log(letras)
console.log(letras.sort()) //Ordena los elementos del array
console.log(letras.reverse()) //Invierte el orden de los elementos y ordenar de forma descendente

//BUCLES EN ARRAYS
let numeros  = [10, 15, 42, 35, 13, 85, 22, 22, 99, 75]; // Crea un array con números
for (let num of numeros) { // Recorre el array elemento por elemento
     document.write(num); // Muestra cada número en pantalla
     document.write('<br>'); // Salto de línea
}
let i=0; // Inicializa el contador
while(i<numeros.length){ // Recorre el array mientras i sea menor al tamaño
  document.write(numeros[i]); // Muestra el elemento en la posición i
  document.write('<br>'); // Salto de línea
  i++; // Aumenta el contador
}
i=0; // Reinicia el contador
do { // Ejecuta el bloque al menos una vez
  document.write(numeros[i]); // Muestra el elemento actual
  i++; // Aumenta el contador
} while(i<numeros.length) // Repite mientras haya elementos

suma = 0 // Inicializa una variable para sumar
for (i = 0; i < numeros.length; i++) { 
     suma=suma+numeros[i]; // Recorre el array por índice
}
document.write(suma) // Muestra la suma final de todos los números