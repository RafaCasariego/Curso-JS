let numeros = [15, 10, -3];

//para ordenar alfabéticamente, o de menor a mayor
numeros.sort();
console.log(numeros)

//Para ordenar en orden inverso que .sort()
numeros.reverse();
console.log(numeros)


//Si una letra está en mayuscula, la ordenará primero (según el código ASCII)
let letrasConMayusculas = ['f', 'a', 'Z'];
console.log(letrasConMayusculas.sort())


//El método .sort() tiene un estándar para ordenar alfabéticamente a pesar de las 
// mayusculas, y es una funcion que recibe parámetros a y b.

letrasConMayusculas.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
})

console.log(letrasConMayusculas)