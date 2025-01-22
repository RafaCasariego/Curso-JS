//Constructor functions: SE CREAN CON UPPER CAMEL CASE


//Objeto que queremos crear: { id: 1, recuperarClave: function(){}, }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function() {
        console.log('Recuperando clave...');
    }
}

function User(name, id) {
    this.name = name;
    this.id = id;
}

let usuario = new Usuario();
let user1 = new User('Rafa');
let user2 = new User('Javi', 2);
let user3 = new User('Fede', 3);

user1.age = 32;
delete user1.id;

console.log(usuario, user1, user2, user3);