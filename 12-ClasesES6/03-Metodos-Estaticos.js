
// 🔹 Métodos estáticos en JavaScript (ES6+)

// 🔹 Ejemplo 1: Clase básica con un método estático
class Restaurant {
    constructor(name) {
        this.name = name; // Se almacena el nombre del restaurante
    }

    // Método normal (de instancia), solo se accede desde un objeto
    getTimetable() {
        console.log(`Horario del restaurante ${this.name}: 10:00 - 22:00`);
    }

    // Método estático (pertenece a la clase, NO a las instancias)
    static getRestaurant(id) {
        // Simulación de búsqueda de un restaurante según el ID
        const restaurantes = {
            1: "Pizza Place",
            2: "Sushi Bar",
            3: "BBQ House"
        };

        const nombre = restaurantes[id] || "Restaurante desconocido";
        return new Restaurant(nombre);
    }
}

// ✅ Crear un restaurante desde el método estático
const r = Restaurant.getRestaurant(2); // Devuelve un restaurante con el nombre "Sushi Bar"
console.log(r.name); // "Sushi Bar"

// ✅ Usar un método normal (de instancia)
r.getTimetable(); // "Horario del restaurante Sushi Bar: 10:00 - 22:00"

// ❌ No podemos llamar a un método normal sin una instancia
// Restaurant.getTimetable(); // Error: getTimetable is not a function


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 2: Métodos estáticos en un sistema de usuarios
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Método normal
    getInfo() {
        return `Usuario: ${this.name} - Email: ${this.email}`;
    }

    // 🔹 Método estático para validar emails sin crear un usuario
    static isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// ✅ Validar email sin crear un usuario
console.log(User.isValidEmail("rafa@gmail.com")); // true
console.log(User.isValidEmail("email-invalido")); // false

// ✅ Crear un usuario y obtener información
const usuario = new User("Rafa", "rafa@gmail.com");
console.log(usuario.getInfo()); // "Usuario: Rafa - Email: rafa@gmail.com"

// ❌ No podemos llamar a isValidEmail desde una instancia
// console.log(usuario.isValidEmail("prueba@mail.com")); // Error


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 3: Métodos estáticos en una API de productos
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Método normal para mostrar la info del producto
    showInfo() {
        return `Producto: ${this.name} - Precio: $${this.price}`;
    }

    // 🔹 Método estático para convertir precios entre monedas
    static convertPrice(price, currency) {
        const rates = { USD: 1, EUR: 0.85, MXN: 20 };
        return rates[currency] ? (price * rates[currency]).toFixed(2) : "Moneda no válida";
    }
}

// ✅ Convertir precios sin instanciar un producto
console.log(Product.convertPrice(100, "EUR")); // "85.00"
console.log(Product.convertPrice(100, "MXN")); // "2000.00"

// ✅ Crear un producto y mostrar su información
const producto = new Product("Laptop", 1200);
console.log(producto.showInfo()); // "Producto: Laptop - Precio: $1200"

// ❌ No podemos llamar a un método estático desde una instancia
// console.log(producto.convertPrice(100, "EUR")); // Error


// ─────────────────────────────────────────────────────────────────────


// 🔥 ¿Cuándo usar métodos estáticos?
console.log(`
📌 Cuándo usar métodos estáticos:
✔ Cuando la funcionalidad pertenece a la CLASE y no a una instancia en particular.
✔ Para métodos que no necesitan modificar propiedades del objeto (como validaciones o conversiones).
✔ Para manejar datos globales, como configuraciones o consultas estáticas.

🛡️ Si un método no usa "this", probablemente debería ser estático.
`);
