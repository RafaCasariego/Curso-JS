
// Crea una función llamada suma que reciba como parámetros otra función y un array de 
// números. La función debe devolver la suma de todos los números de array.

function suma(fn, ...rest) {
    const sumando = rest.reduce((acum, num) => acum + num);
    return fn(sumando);
};

const prueba = suma(console.log, 1, 2, 3, 4, 5);
