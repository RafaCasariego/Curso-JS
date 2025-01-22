//Para no tener que crear un usuario a mano cada vez que tenemos un nuevo user,
//podemos usar las Factory Functions

let user = {
    id: 1,
    email: 'rafacasariego@gmail.com',
    name: 'Rafa',
    activo: true,
    recuperarClave: function () { 
        console.log('Recuperando clave...')  
    }, 
};

//Factory function. SE CREAN CON CAMEL CASE:

function crearUsuario(name, email) {

    return {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function () { 
            console.log('Recuperando clave...')  
        }, 
    };

}

//Ahora, para crear varios usuarios, no tenemos que crear el objeto entero, solo el user, y pasarle la función:

let user1 = crearUsuario('Rafa', 'rafa@gmail.com');
let user2 = crearUsuario('Diego', 'diego@gmail.com');
let user3 = crearUsuario('Luci', 'luci@gmail.com');

console.log(user1, user2, user3)