/* Crear un algoritmo que devuelva un array de objetos en base a un array de pares. */

let pairs = [
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "Chanchito" }],
]

function toCollection(array) {

    let collection = [];

    for (idx in array) {
        let elemento = array[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection
}

let prueba = toCollection(pairs);
console.log(prueba)