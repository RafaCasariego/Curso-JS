// El método some() comprueba si al menos un elemento de un array cumple con una 
// condición (función proporcionada).
const numeros = [1, 2, 3, 4, 5];

// Queremos saber si hay algún número mayor que 3 en el array
let resultado = numeros.some(function(num) {
  return num > 3;
});

console.log(resultado);  // true (porque 4 y 5 son mayores que 3)

// El método every() comprueba si todos los elementos de un array pasan una prueba 
// (función proporcionada).
const numeros2 = [2, 4, 6, 8, 10];

// Queremos saber si todos los números en el array son mayores que 1
let resultado2 = numeros.every(function(num) {
  return num > 1;
});

console.log(resultado);  // true (porque todos los números son mayores que 1)
