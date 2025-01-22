
//Function Declaration (Declaración de función)

//Named function
function suma(a, b) {
    return a + b;
}

//Anonimous function
// function (a, b) {
//     return a + b;
// }


//Function Expression (expresión de función)

//Asignamos una variable a una función anónima:
let resta = function (a, b) {
    return a - b;
}

//Asignamos una variable a una named function:
let multiplicar = function multiplicando (a, b) {
    return a * b;
}


//En el caso de Fat Arrow function...
let fafejemplo = (a, b) => a + b; //Se puede asignar una variable o no, 
// pero la función siempre es anónima.