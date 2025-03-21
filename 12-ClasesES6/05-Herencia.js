// 🔹 Herencia en JavaScript (ES6+)

// 🔹 Ejemplo 1: Clase base con una subclase
class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    // Método de la clase padre
    save() {
        console.log(`✅ Entidad ${this.id} guardada en la base de datos.`);
    }
}

// 🔹 Clase User hereda de Entidad
class User extends Entidad {
    constructor(id, name) {
        super(id); // Llamamos al constructor de la clase padre
        this.name = name;
    }

    // Método específico de User
    sayHello() {
        console.log(`Hola, soy ${this.name}`);
    }
}

// ✅ Crear una instancia de User
const usuario = new User(1, "Rafa");

// ✅ Acceder a propiedades heredadas
console.log(usuario.id); // 1
console.log(usuario.created_at); // Fecha de creación

// ✅ Usar métodos de la clase padre
usuario.save(); // "✅ Entidad 1 guardada en la base de datos."

// ✅ Usar métodos propios de la subclase
usuario.sayHello(); // "Hola, soy Rafa"

// ❌ Intentar llamar a un método de la subclase desde la clase padre
const entidad = new Entidad(2);
// entidad.sayHello(); // ⛔ Error: sayHello is not a function


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 2: Herencia con métodos sobrescritos
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método genérico de todos los animales
    hacerSonido() {
        console.log("🦴 Sonido genérico de animal...");
    }
}

// 🔹 Subclase que sobrescribe un método de la clase padre
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llamamos al constructor de Animal
        this.raza = raza;
    }

    // Sobrescribimos el método hacerSonido
    hacerSonido() {
        console.log("🐶 ¡Guau guau!");
    }
}

// ✅ Crear un animal genérico
const animal = new Animal("Criatura");
animal.hacerSonido(); // "🦴 Sonido genérico de animal..."


// ✅ Crear un perro, que hereda de Animal
const miPerro = new Perro("Rocky", "Labrador");

// ✅ Llamamos al método sobrescrito en la subclase
miPerro.hacerSonido(); // "🐶 ¡Guau guau!"

// ✅ Podemos seguir accediendo a propiedades de Animal
console.log(miPerro.nombre); // "Rocky"
console.log(miPerro.raza); // "Labrador"


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 3: Herencia con métodos estáticos
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método de instancia
    getInfo() {
        return `${this.marca} ${this.modelo}`;
    }

    // Método estático que pertenece a la clase, no a la instancia
    static clasificacion() {
        return "🚗 Vehículos motorizados";
    }
}

// 🔹 Subclase que hereda de Vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo); // Llamamos al constructor de Vehiculo
        this.puertas = puertas;
    }

    // Método propio de Coche
    getDoors() {
        return `🚪 Este coche tiene ${this.puertas} puertas.`;
    }
}

// ✅ Crear una instancia de Coche
const miCoche = new Coche("Toyota", "Corolla", 4);

// ✅ Usar métodos heredados
console.log(miCoche.getInfo()); // "Toyota Corolla"

// ✅ Usar métodos propios de la subclase
console.log(miCoche.getDoors()); // "🚪 Este coche tiene 4 puertas."

// ✅ Usar un método estático sin necesidad de instanciar
console.log(Vehiculo.clasificacion()); // "🚗 Vehículos motorizados"

// ❌ Un objeto no puede llamar métodos estáticos de la clase
// console.log(miCoche.clasificacion()); // ⛔ Error


// ─────────────────────────────────────────────────────────────────────


// 🔥 ¿Cuándo usar herencia?
console.log(`
📌 Cuándo usar herencia:
✔ Cuando varias clases comparten lógica común y queremos reutilizar código.
✔ Cuando queremos extender funcionalidades sin modificar la clase base.
✔ Cuando queremos sobrescribir métodos para personalizar el comportamiento.

🛡️ La herencia nos ayuda a estructurar mejor nuestro código y evitar duplicación.
`);

