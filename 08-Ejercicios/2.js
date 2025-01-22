const miArray = [
    'Hola',
    12,
    'Mundo',
    {},
    {id: 15,},
    ['lala'],
];

function dividePorTipo(arr) {
    const numeros = arr.filter((ele) => typeof ele === 'number');
    const strings = arr.filter((ele) => typeof ele === 'string');
    const objetos = arr.filter((ele) => typeof ele === 'object');

    return {numeros, strings, objetos};
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);