
/*HOISTING
Es un comportamiento de JS la cual se encarga de llevar las declaraciones de variables y 
funciones al inicio del archivo, es como si las "elevara". Esto trae comportamientos distintos
para cada tipo de declaración (var, let, const y function).
*/

// console.log(saludo);
// console.log(obsoleta);
// console.log(hola);
// console.log(adios);

function saludo() {
    return 'Hola!'  //Devuelve la función al completo
}; 

var obsoleta = 'ya no se usa :)'; //Devuelve undefined, ya que accede a la variable, 
// pero no a su valor, y se le asigna undefined por defecto.

let hola = 'hola'; //Devuelve un error, ya que, aunque se accede a la variable como con var,
//  no se puede acceder a su contenido hasta que no se inicializa.

const adios = 'adios'; //Se comporta exactamente igual que let.

console.log(window) 