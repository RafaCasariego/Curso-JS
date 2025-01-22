
//reduce(): Permite hacer ambas cosas:
//  puedes filtrar los elementos que quieras mantener y, al mismo tiempo, 
// transformarlos o agregarles nuevas propiedades.
//(filtrar como .filter() y modificar como .map())

//reduce() es un método que sirve para "reducir" un array a un solo valor, 
// que puede ser un número, un objeto, un array, etc.,


// array.reduce(function(acumulador, elemento) {
//     lógica que procesa acumulador y elemento
//   }, valorInicial);
  

// acumulador: el valor acumulado que se va modificando con cada paso.
// elemento: el valor del elemento actual en el array.
// valorInicial (opcional): el valor con el que quieres iniciar el acumulador (si no lo pones, 
// empieza con el primer elemento del array).

const numeros = [1, 2, 3, 4, 5];

//Ejemplo 1: sumar los elementos de un array
let suma = numeros.reduce(function(acumulador, num) {
  return acumulador + num;  // Vamos sumando cada número al acumulador
}, 0);  // Iniciamos el acumulador en 0

console.log(suma);  // 15 ((it 1 = 0 + 1 = 1), (it 2 = 1 + 2 = 3), (it 3 = 3 + 3 = 6), (it 4 = 6 + 4 = 10), (it 5 = 10 + 5 = 15))

//Ejemplo 2: Contar la cantidad de elementos mayores que 3
let contador = numeros.reduce(function(acumulador, num) {
    if (num > 3) {
      return acumulador + 1;  // Aumentamos el contador si el número es mayor que 3
    }
    return acumulador;  // Si no, dejamos el contador igual
  }, 0);  // Empezamos el contador en 0
  
  console.log(contador);  // 2 (4 y 5 son mayores que 3)


//Ejemplo 3: Agregar un elemento a un objeto, que forma parte de un array
const usuarios = [
    {edad: 17, nombre: 'Diego'},
    {edad: 28, nombre: 'Rafa'},
    {edad: 25, nombre: 'Luci'},
    {edad: 24, nombre: 'Ana'},
];

// Usamos .reduce() para filtrar y agregar un campo a los usuarios
const usuariosConAdulto = usuarios.reduce(function(acumulador, usuario) {
    if (usuario.edad >= 18) {
        // Si el usuario es adulto, lo agregamos al acumulador con el nuevo campo
        acumulador.push({
            ...usuario,   // Copiamos el objeto original
            esAdulto: true  // Agregamos la propiedad 'esAdulto'
        });
    } else {
        acumulador.push({
            ...usuario,
            esAdulto: false,
        })
    }
    return acumulador;  // Retornamos el acumulador
}, []);  //El acumulador es un array vacio donde vamos agregando nuevos objetos, 
// que parten del objeto original (usuarios) y a los que agregamos en este caso, 
// el valor esAdulto.

console.log(usuariosConAdulto);
