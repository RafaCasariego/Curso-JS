const usuarios = [
    { id: 1, name: 'Rafa' },
    { id: 2, name: 'Luci' },
    { id: 2, name: 'Diego' },
];

// const resultado = usuarios.indexOf({ id: 2, name: 'Luci' });
//Intentar buscar un elemento que es un objeto así, sería un error, ya que los objetos
//son valores POR REFERENCIA, por lo que el método indexOf() no puede encontrar un 
//objeto igual, ya que para JS esos objetos NO son iguales (los busca en partes
//distintas de la memoria). Para buscar objetos por referencia en un array, podemos usar:

const resultado = usuarios.find((usuario) =>
    usuario.id === 2); 

//Devuelve el primero que encuentra con id 2
console.log(resultado)



const resultado2 = usuarios.find((usuario) =>
    usuario.id === 2 && usuario.name === 'Diego')

console.log(resultado2)


//Si en lugar de buscar el objeto, buscamos el índice, se hace exactamente igual, pero 
// con el método findIndex()

const resultado3 = usuarios.findIndex((usuario) =>
    usuario.id === 2); 

console.log(resultado3)