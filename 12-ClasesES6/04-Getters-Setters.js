// 🔹 Getters y Setters en JavaScript (ES6+)

// 🔹 Ejemplo 1: Clase básica con Getters y Setters
class Restaurant {
    #timetable; // Propiedad privada

    constructor(name) {
        this.name = name;
        this.#timetable = "10:00 - 22:00"; // Valor por defecto
    }

    // 🔹 Getter: permite obtener el valor de timetable de forma controlada
    get timetable() {
        return `El horario del restaurante ${this.name} es: ${this.#timetable}`;
    }

    // 🔹 Setter: permite modificar timetable con validaciones
    set timetable(value) {
        if (typeof value === "string" && value.includes("-")) {
            this.#timetable = value;
        } else {
            console.log("❌ Error: Formato de horario inválido.");
        }
    }
}

// ✅ Crear un restaurante
const restaurant = new Restaurant("Pizzería Rafa");

// ✅ Obtener el horario (usando el getter)
console.log(restaurant.timetable); // "El horario del restaurante Pizzería Rafa es: 10:00 - 22:00"

// ✅ Modificar el horario (usando el setter)
restaurant.timetable = "09:00 - 20:00";
console.log(restaurant.timetable); // "El horario del restaurante Pizzería Rafa es: 09:00 - 20:00"

// ❌ Intentar asignar un horario inválido
restaurant.timetable = "Horario incorrecto"; // "❌ Error: Formato de horario inválido."


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 2: Getters y Setters en un sistema de usuarios
class User {
    #password; // Propiedad privada

    constructor(name, password) {
        this.name = name;
        this.#password = this.#encryptPassword(password);
    }

    // 🔒 Método privado para encriptar la contraseña
    #encryptPassword(password) {
        return `hashed_${password}`; // Simulación de encriptación
    }

    // ✅ Getter: devuelve un mensaje en lugar de la contraseña
    get password() {
        return "⚠️ No puedes ver la contraseña directamente.";
    }

    // ✅ Setter: permite cambiar la contraseña solo si cumple ciertas condiciones
    set password(newPassword) {
        if (newPassword.length < 6) {
            console.log("❌ Error: La contraseña debe tener al menos 6 caracteres.");
        } else {
            this.#password = this.#encryptPassword(newPassword);
            console.log("✅ Contraseña actualizada con éxito.");
        }
    }
}

// ✅ Crear un usuario
const user = new User("Rafa", "secreta");

// ❌ Intentar ver la contraseña (el getter lo bloquea)
console.log(user.password); // "⚠️ No puedes ver la contraseña directamente."

// ✅ Cambiar la contraseña (usando el setter)
user.password = "nuevaClave123"; // "✅ Contraseña actualizada con éxito."

// ❌ Intentar asignar una contraseña demasiado corta
user.password = "123"; // "❌ Error: La contraseña debe tener al menos 6 caracteres."


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 3: Getters y Setters en una clase Producto
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price; // Usamos _price en lugar de hacerla privada para el ejemplo
    }

    // ✅ Getter para obtener el precio formateado
    get price() {
        return `$${this._price.toFixed(2)}`;
    }

    // ✅ Setter para cambiar el precio con validaciones
    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        } else {
            console.log("❌ Error: El precio debe ser mayor a 0.");
        }
    }
}

// ✅ Crear un producto
const product = new Product("Laptop", 1200);

// ✅ Obtener el precio con formato
console.log(product.price); // "$1200.00"

// ✅ Modificar el precio con validación
product.price = 900;
console.log(product.price); // "$900.00"

// ❌ Intentar asignar un precio negativo
product.price = -50; // "❌ Error: El precio debe ser mayor a 0."


// ─────────────────────────────────────────────────────────────────────


// 🔥 ¿Cuándo usar Getters y Setters?
console.log(`
📌 Cuándo usar Getters y Setters:
✔ Cuando necesitas controlar cómo se accede o modifica una propiedad.
✔ Para aplicar validaciones antes de permitir cambios en los valores.
✔ Para proteger datos sensibles, como contraseñas o claves privadas.
✔ Para transformar valores antes de devolverlos, como formatear un precio o encriptar un dato.

🛡️ Los Getters y Setters ayudan a mantener un código seguro y estructurado.
`);


