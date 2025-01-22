const letras = ['a', 'b'];

//Agregar elementos al final del array
letras.push('c', 'd');

//Agregar elementos al principio
letras.unshift('y', 'z');

//Agregar o eliminar elementos según su índice (indice, elementosAEliminar, elementosAAgregar)
letras.splice(3, 0, 'r', 'l')

console.log(letras)