
//filter(): Filtra los elementos de un array según una condición y devuelve 
// solo aquellos que la cumplen.

const usuarios = [
    {edad: 17, nombre: 'Diego'},
    {edad: 13, nombre: 'Rafa'},
    {edad: 25, nombre: 'Luci'},
    {edad: 64, nombre: 'Ana'},
]

// .filter() crea un nuevo array con todos los elementos que cumplan la 
// condición implementada en la función dada.
//.filter() recibe como parámetros el elemento actual, el índice y el array completo.
const mayoresDeEdad = usuarios.filter((usuario) => usuario.edad >= 18);
console.log(mayoresDeEdad);   