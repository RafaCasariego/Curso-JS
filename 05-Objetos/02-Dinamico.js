//A un objeto (user en este caso) no lo podemos cambiar, pero sí podemos agregar, modificar o eliminar propiedades.

const user = {
    id: 1,
}

user.name = 'Rafa';
user.guardar = function() {
    console.log('Guardando...', user.name)
}

console.log(user)

//Pero si usamos la función Object.freeze({}), entonces no podremos agregar, ni eliminar, ni modificar propiedades.

const user1 = Object.freeze({
    id: 2,
})

user1.name = 'Rafa'; //No da error, pero no se agrega.
user1.id = 10; //Ni se modifica
delete user1.id; //Ni se elimina

console.log(user1)

//Con la función Object.seal({}), podremos cambiar el valor de las propiedades, pero no agregar o eliminar nuevas.

const user2 = Object.seal({
    id: 3,
})

user2.name = 'Rafa'; //No se puede agregar,
user2.id = 4; //Pero si modificar

console.log(user2)