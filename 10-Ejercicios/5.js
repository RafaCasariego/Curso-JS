
// Crea una función que reciba como parámetros un texto y otra función, y que devuelva
// el texto recibido ordenado alfabeticamente.

function ordenar(texto, fn) {
    return fn(texto.split('').sort().join(''));
}

ordenar('hola mundo', console.log); 