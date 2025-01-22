let arr = ['Rafa', 'Diego', 'Luci'];

let mensaje = arr.join(', ') //El método une todos los elementos del array, y los 
// separa (o no) con lo que nosotros le pasemos como parámetro.
console.log(mensaje);

let saludo = 'Hola mundo! desde Madrid';
let dividido = saludo.split(' ') //El método split divide todo el array, usando como 
// "guia" el parámetro que le pasemos. En este caso, lo dividirá cada vez que encuentre 
// un espacio. Si no pasamos valor, dividirá en cada caracter.
console.log(dividido)

console.log(dividido.join('-')) //Así podemos re-unir o cambiar algunos caracteres 
// (en este caso los espacios " ", por guiones "-")