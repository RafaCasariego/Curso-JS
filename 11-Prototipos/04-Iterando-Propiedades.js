

function User() {
    this.name = 'Rafa';
}

User.prototype.login = function () {
    console.log('Iniciando sesión del usuario', this.name);
}

let user1 = new User();

// Iterando las propiedades con un bucle for:
for (let prop in user1)
    console.log(prop) //Imprime 'name' pero también 'login', que es propiedad del prototipo


//Para imprimir solo las propiedades únicas del objeto:

console.log(Object.keys(user1)) //Así objetenos un array con las propiedades únicas de 
                                   //user1.


//También se puede hacer así, pero es más antiguo:
for (let prop in user1)
    if (user1.hasOwnProperty(prop))
        console.log(prop)