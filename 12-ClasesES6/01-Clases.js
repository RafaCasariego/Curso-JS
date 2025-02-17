
// 🔹 Versión antigua: Función constructora + Prototype
function User(name) {
    // Asigna el nombre al objeto que se está creando
    this.name = name;
    // Se define una función dentro del constructor (no es la mejor práctica)
    this.instancia = function () {};
}

// Se agrega un método 'login' al prototipo de User
User.prototype.login = function () {
    console.log('Hola mundo!');
}

// ❌ ERROR: Falta 'new', esto asignaría 'name' al objeto global en modo no estricto
// const u = User('Chanchito Feliz');

// ✅ Solución: usar 'new' para crear una instancia correctamente
const user1 = new User('Chanchito Feliz');
user1.login(); // Salida: "Hola mundo!"

console.log(user1.name); // Salida: "Chanchito Feliz"

// ──────────────────────────────────────────────────────────────

// 🔹 Versión moderna con Clases (ES6)
class UserClass {
    constructor(name) {
        // Asigna el nombre al objeto que se está creando
        this.name = name;
        // Define una función vacía (similar a la anterior)
        this.instancia = function () {};
        // Se agrega una nueva propiedad 'activo'
        this.activo = true;
    }

    // Métodos de la clase (mejor sintaxis que prototype)
    login() {
        console.log('Hola Mundo');
    }

    logout() {
        console.log('logout');
    }
}

// ✅ Correcto: Se usa 'new' para instanciar la clase
const user2 = new UserClass('Chanchito Feliz');
user2.login();  // Salida: "Hola Mundo"
user2.logout(); // Salida: "logout"

console.log(user2.name);  // Salida: "Chanchito Feliz"
console.log(user2.activo); // Salida: true
