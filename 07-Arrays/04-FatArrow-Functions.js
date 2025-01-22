//Funcion normal:
function hola1() {
    return 'Hola Mundo';
}
let hola = hola1()



//Fat arrow function: Primero se le asigna una variable, ya que TODAS las arrow function
//son ANÓNIMAS.
const hola2 = () => 'Hola Mundo'; //El return está implicito y no es necesario el uso 
// de llaves.



//Fat arrow function con parámetros:
const hola3 = nombre => 'Hola ' + nombre; //Tampoco es necesario el uso de paréntesis 
// si tan sólo usamos un parámetro, pero en caso de usar dos:
const hola4 = (saludo, nombre) => saludo + nombre;

const saludar = hola4('Muy buenas ', 'Rafa');
console.log(saludar)



//En caso de que en una arrow function sea necesario concatenar, operar o escribir
// varias líneas de código, SÍ usaremos las llaves y el return:
const hola5 = (pregunta) => {
    return 'Hola ' + 'Mundo.' + pregunta;
}

const preguntar = hola5(' ¿Qué tal?')
console.log(preguntar)
