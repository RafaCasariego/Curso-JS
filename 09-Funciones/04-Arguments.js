function suma(a, b) {
    return a + b;
}

console.log(suma(1)) //NaN
console.log(suma(1, 2, 3, 4))//3 (no utiliza el resto de argumentos)

function argumentos() {
    console.log(arguments);
}

argumentos(0, 1, 2, 3, 4, 5, 6); //Arguments(6) [0, 1, 2, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//Esto NO devuelve un array. Es un OBJETO. No se puede map, filter, reduce, etc. Se puede convertir 
// a un array con Array.from(arguments) o [...arguments].

function sumaTotal(args) {
    return Array.from(arguments).reduce((acum, num) => acum + num, 0);
}
//Esto tendría más sentido, por ejemplo, para que se sumen TODOS los argumentos que se le 
// pasen a esta función.

console.log(sumaTotal(0, 1, 2, 3, 4, 5, 6));