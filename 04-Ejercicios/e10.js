/* Crea un array de longitud N, que tenga elementos desde el numero 1 hasta N. */

let longitud = 15

function crearArray(n) {

    let array = [];

    for (i = 0; i < n; i++) {

        array[i] = i + 1;

    }
    
    return array
}

let resultado = crearArray(longitud);
console.log(resultado)