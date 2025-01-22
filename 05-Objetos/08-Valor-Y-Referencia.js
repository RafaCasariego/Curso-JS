//Valores primitivos: String, number, boolean, undefined, null, symbol, BigInt.
// Se copian por valor: Cuando asignas una variable con un valor primitivo, 
// se crea una copia del valor. 


//Aquí, cuando asignamos a a b, se crea una copia del valor, no se comparten. 
// Por eso, cuando cambiamos a, b no se ve afectado.

let a = 10;
let b = a; // b es una copia de a

a = 20; // Cambias a, pero b sigue siendo 10
console.log(a); // 20
console.log(b); // 10



/* Valores de Referencia: Objetos, Arrays y Funciones. 
Se copian por referencia: Cuando asignas un objeto a otra variable, ambas variables 
apuntan al mismo objeto en memoria. Si modificas el objeto a través de una 
de las variables, el cambio afecta a la otra variable también.
*/


//En este caso, tanto obj1 como obj2 apuntan al mismo objeto en memoria. 
// Por lo tanto, cuando cambias el valor de obj1, obj2 también ve los cambios.

let objA = { nombre: 'Rafa' };
let objB = objA; // obj2 ahora apunta al mismo objeto que obj1

objA.nombre = 'Lucía'; // Cambias el objeto a través de obj1
console.log(objA.nombre); // Lucía
console.log(objB.nombre); // Lucía (obj2 apunta al mismo objeto)
