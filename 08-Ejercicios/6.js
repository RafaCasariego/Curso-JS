
//Crea una funcion que reciba un array, y devuelva un objeto, cuyos 
// atributos sean el tipos de datos, y sus valores sean los elementos 
// del array, que coincidan con el tipo de dato del atributo.

const miArray = [
    'Hola',
    12,
    true,
    'Mundo',
    {},
    {id: 15,},
    ['lala'],
];

function dividePorTipo(arr) {
    return arr.reduce((acc, ele) => {
        const tipo = typeof ele;
        if (!acc[tipo]) {
            acc[tipo] = [];
        }
        acc[tipo].push(ele);
        return acc;
    }, {})
}

console.log(dividePorTipo(miArray));