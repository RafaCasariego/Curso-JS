//Repite el ejercicio anterior, pero sin una función constructora ni el metodo call.
//Crea una función que reciba un objeto y devuelva otro objeto con las mismas propiedades, 
//pero con los métodos 'login' y 'logout' añadidos.

const obj = {
    nombre: 'Rafa',
};

function extender(usuario) {
    return {
        ...usuario,
        login: () => {console.log('Haciendo login de ' + usuario.nombre)},
        logout: () => {console.log('Haciendo logout de ' + usuario.nombre)},
    };
}

const usuario = extender(obj);

console.log(usuario);
usuario.login(); 
usuario.logout();


//Otra forma de hacerlo: 

function extender2(usuario){
    usuario.login = () => {console.log('Haciendo login de ' + usuario.nombre)};
    usuario.logout = () => {console.log('Haciendo logout de ' + usuario.nombre)};
    return usuario;
}

const usuario2 = extender2(obj);
console.log(usuario2);
usuario2.login(); 
usuario2.logout();
