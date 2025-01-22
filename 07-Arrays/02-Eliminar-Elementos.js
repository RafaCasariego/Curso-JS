const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

//Para eliminar el último elemento de un array, además de asignarlo a una variable
const letraFinal = letras.pop();
console.log(letras, letraFinal)

//Para eliminar el primer elemento del array, además de asignarlo a una variable
const letraInicial = letras.shift();
console.log(letras, letraInicial)

//Para eliminar elementos según su índice (indice, elementosAEliminar, elementosAAgregar)
letras.splice(1, 1);
console.log(letras);

