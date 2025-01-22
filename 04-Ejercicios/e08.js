/*
Crear un algoritmo que tome un array de objetos y devuelva un array de pares.
*/

let array = [
    {id: 1,
    name: 'Nicolas',
    age: 29,}, 

    {id: 2,
    name: 'Felipe',
    age: 15},

    {id: 3,
    name: 'Chanchito',
    age: 4}
];

function toPairs(array){

    let pares = []
    let i = 0

    for (elemento of array){
        pares[i] = [elemento.id, elemento]
        i++
    }

    return pares
}

let resultado = toPairs(array);
console.log(resultado)