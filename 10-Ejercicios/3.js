// Crea una función que reciba como parámetros otra función, y otros argumetnos de cantidad 
// indefinida. Luego crea otra función que reciba un número indefinido de argumentos y los
// devuelva como array. Prueba a ejecutar la primera función, pasandole como argumento la 
// segunda función.

function callback(fn, ...args) {
    return fn(...args);
}

function log(...args){
    console.log([...args]);
}

callback(log, 1, 2, 3, 4);


// Otra forma de hacerlo sin necesidad de definir la función log, es similar a como se usa 
// el metodo filter. Definimos en los parámetros una arrow function:

callback((...args) => console.log(args), 1, 2, 3, 4);