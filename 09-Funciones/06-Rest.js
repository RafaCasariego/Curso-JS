
//Con arguments podemos acceder a un objeto que lista todos los argumentos que se le 
// pasan a una función.

function suma(a, b) {
    console.log(arguments);
}

suma(1, 2, 3, 4);


//Con ...rest podemos acceder a un ARRAY que lista el resto de argumentos, 
// después de los ya definidos. 
// IMPORTANTE: ...rest debe ser el último argumento de la función.

function sumar(a, b, ...rest) {
    console.log(rest);
}

sumar(1, 2, 3, 4);


//...rest también funciona con las fat arrow functions.
const suma2 = (a, b, ...rest) => {
    return a + b + rest.reduce((acum, num) => acum + num, 0);
}

console.log(suma2(1, 2, 3, 4, 5));


//Ejemplo: para qué podría ser útil?
//Para mostrar mensajes de error en consola:
let errores = ['Error 1', 'Error 2', 'Error 3', 'Error 4', 'Error 5'];

let mostrarErrores = (mensaje, ...errores) => {
    for (let error of errores) {
        console.error(mensaje, error);
    }
}

mostrarErrores('Cliente móvil: ', ...errores);