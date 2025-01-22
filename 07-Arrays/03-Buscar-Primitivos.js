const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'c'];

//Para encontrar el indice de un elemento concreto. En caso de haber 2 o más elementos 
//iguales, devolverá sólo el índice del primero.
console.log(letras.indexOf('c'));


//En caso de haber más de 1 elemento igual, podemos encontrar el índice del último
// así:
console.log(letras.lastIndexOf('c'));


//Para saber si el elemento se encuentra en el array:
console.log(letras.includes('b')); 
console.log(letras.includes('z'));


//A todos estos métodos, les podemos agregar un segundo parámetro, haciendo referencia
//al índice del array. En ese caso, se empezará a contar desde ese índice:

console.log(letras.indexOf('c', 3));
console.log(letras.includes('b', 2));