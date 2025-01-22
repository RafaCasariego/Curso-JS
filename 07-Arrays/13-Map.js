
// map(): Modifica cada elemento de un array, aplicando una transformación y 
// devolviendo un nuevo array con los elementos modificados.

const usuarios = [
    {edad: 17, nombre: 'Diego'},
    {edad: 28, nombre: 'Rafa'},
    {edad: 25, nombre: 'Luci'},
    {edad: 24, nombre: 'Ana'},
];

// .map() crea un nuevo array con los resultados de la llamada a la función.
//.map() recibe como parámetros el elemento actual, el índice y el array completo.

usuariosMap = usuarios.map((usuario) => ({...usuario, mayorDeEdad: usuario.edad >= 18,}));

console.log(usuariosMap);

//El método .map() puede encadenarse con .filter() para filtrar los elementos que 
// cumplan con una condición y luego mapearlos.

const mayoresDeEdad = usuarios.filter((usuario) => usuario.edad >= 18).map((usuario) => ({...usuario, mayorDeEdad: usuario.edad >= 18,}));

console.log(mayoresDeEdad);