
function sumaTodo(arr) {
    return arr.reduce((acum, ele) => acum + ele, 0);
}

try {
    console.log(sumaTodo([1, 2, 3, 4, 5]));
} catch {
    console.log('Ups... Algo salió mal')
}



try { //Try intenta ejecutar el bloque de código, y se ejecutará sólo si no hay errores.
    console.log(sumaTodo({1: 2, 3: 4, 5: 6}));
} catch (error) { //Pero en caso de que el try falle, se ejecutará el catch. Es algo así como un condicional if.
    console.log('Error: ', error.message)
}



function sumaTodo2(arr) {

    if (!Array.isArray(arr)) { //Con este if, verificamos si el argumento que recibimos es un
        throw new Error('Eh tú! Eso no es un array >:(') //  array, y en caso de no serlo, 
    }                                                    // arrojamos un nuevo error.

    return arr.reduce((acum, ele) => acum + ele, 0);
}


try {
    console.log(sumaTodo2({1: 2, 3: 4, 5: 6}));
} catch (error) {
    console.log(error.message);
}