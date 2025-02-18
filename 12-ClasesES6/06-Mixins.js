// 🔹 MIXINS en JavaScript (ES6+)

// 🔹 ¿Qué es un Mixin?
// Un **Mixin** es una forma de compartir funcionalidades entre clases
// SIN usar herencia. En lugar de extender una sola clase, podemos 
// agregar métodos y propiedades a múltiples clases sin modificar 
// la jerarquía de herencia.

// 📌 Se usan cuando varias clases necesitan compartir lógica común,
// pero sin tener que extender una clase base (como en la herencia).


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 1: Creando un Mixin
const LoggerMixin = {
    log() {
        console.log(`[LOG] ${this.name} ha ejecutado una acción.`);
    }
};

// 🔹 Clase base
class User {
    constructor(name) {
        this.name = name;
    }
}

// 📌 Usamos `Object.assign()` para mezclar el mixin en el prototipo de la clase
Object.assign(User.prototype, LoggerMixin);

// ✅ Prueba
const user = new User("Rafa");
user.log(); // "[LOG] Rafa ha ejecutado una acción."


// ─────────────────────────────────────────────────────────────────────


// 🔹 Ejemplo 2: Múltiples Mixins
const EatableMixin = {
    eat() {
        console.log(`${this.name} está comiendo.`);
    }
};

const SleepableMixin = {
    sleep() {
        console.log(`${this.name} está durmiendo.`);
    }
};

// 🔹 Clase base Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// 📌 Agregar múltiples Mixins a la clase Animal
Object.assign(Animal.prototype, EatableMixin, SleepableMixin);

// ✅ Prueba
const perro = new Animal("Rocky");
perro.eat();   // "Rocky está comiendo."
perro.sleep(); // "Rocky está durmiendo."


// ─────────────────────



