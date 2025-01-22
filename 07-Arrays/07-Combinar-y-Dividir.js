let arr = [1, 2];
let arr2 = [3, 4];


let combinados = arr.concat(arr2); //El método concat une dos arrays.
console.log(combinados)


let divididos = combinados.slice(1, 3); //El método slice divide un array tomando de 
// referencia la posición del indice que le pasemos.
console.log(divididos)


let divididos2 = combinados.slice(1); //Si no asignamos un valor, irá hasta el final.
console.log(divididos2)