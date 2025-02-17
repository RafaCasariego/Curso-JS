// 🔹 Propiedades Privadas en JavaScript (ES6+)

// 🔹 Ejemplo 1: Clase básica con propiedad privada
class User {
    #name; // Propiedad privada (solo accesible dentro de la clase)

    constructor(name) {
        this.#name = name; // Se asigna el valor recibido a la propiedad privada
    }

    // Método público para obtener el nombre
    getName() {
        return this.#name;
    }

    // Método público para cambiar el nombre de forma segura
    setName(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this.#name = newName;
        } else {
            console.log("Error: Nombre inválido.");
        }
    }
}

// ✅ Uso de la clase User
const usuario = new User("Rafa");

// ❌ Intentar acceder directamente a la propiedad privada (esto dará error)
// console.log(usuario.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// ✅ Acceder al nombre usando el método público
console.log(usuario.getName()); // "Rafa"

// ✅ Modificar el nombre con validación
usuario.setName("Carlos");
console.log(usuario.getName()); // "Carlos"

// ❌ Intentar asignar un nombre inválido
usuario.setName(""); // "Error: Nombre inválido."


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 2: Manejo seguro de contraseñas en una clase Usuario
class Usuario {
    #password; // Propiedad privada

    constructor(nombre, password) {
        this.nombre = nombre;
        this.#password = this.#encriptarPassword(password);
    }

    // 🔒 Método privado que encripta la contraseña (simulación, usar bcrypt en producción)
    #encriptarPassword(password) {
        return `hashed_${password}`;
    }

    // ✅ Método público para validar la contraseña sin exponerla
    validarPassword(password) {
        return this.#password === this.#encriptarPassword(password);
    }
}

// ✅ Creando un usuario seguro
const usuarioSeguro = new Usuario("Rafa", "miClave123");

// ❌ No se puede acceder directamente a la contraseña
// console.log(usuarioSeguro.#password); // Error

// ✅ Se puede verificar si la contraseña es correcta
console.log(usuarioSeguro.validarPassword("miClave123")); // true
console.log(usuarioSeguro.validarPassword("claveIncorrecta")); // false


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 3: API segura con clave privada
class APIService {
    #apiKey; // Propiedad privada para la clave de API

    constructor(apiKey) {
        this.#apiKey = apiKey; // Se almacena de forma segura
    }

    // ✅ Método público para realizar una petición con la clave protegida
    fetchData(endpoint) {
        console.log(`Haciendo petición a ${endpoint} con API Key: [OCULTA]`);
        // Aquí podríamos hacer una petición real con fetch/axios
    }
}

// ✅ Creando una instancia del servicio de API
const apiService = new APIService("12345-SECRET-67890");

// ❌ No se puede acceder a la clave de API directamente
// console.log(apiService.#apiKey); // Error

// ✅ Se puede hacer una petición de forma segura
apiService.fetchData("https://api.ejemplo.com/data");


// ─────────────────────────────────────────────────────────────────────


// 🔥 ¿Cuándo usar propiedades privadas?
console.log(`
📌 Cuándo usar propiedades privadas:
✔ Cuando NO quieres que una propiedad sea accesible desde fuera de la clase.
✔ Para proteger datos sensibles como contraseñas, claves de API o información privada.
✔ Para evitar modificaciones accidentales o malintencionadas.
✔ Para obligar a que ciertos valores solo se cambien a través de métodos específicos.

🛡️ Si un dato debe estar protegido, usa una propiedad privada ( # ).
`);
