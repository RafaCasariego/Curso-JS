let arr = [1, 2];
let arr2 = [5, 6];
let arr3 = [...arr] //Con spread operator podemos crear nuevos arrays iguales

console.log(arr3)

let arr4 = [0, ...arr, 3, 4, ...arr2, 7, 8, 9] //así como añadir valores u otros arrays
console.log(arr4)