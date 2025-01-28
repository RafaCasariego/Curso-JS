/*
La herencia es un mecanismo que permite a un objeto (o clase) adquirir propiedades y 
métodos de otro objeto (o clase). Esto promueve la reutilización de código y la 
organización jerárquica. 

En JavaScript, la herencia se implementa a través de la cadena
de prototipos, ya que no existen clases tradicionales como en otros lenguajes 
(aunque la sintaxis de clases introducida en ES6 facilita su uso).
*/


//HERENCIA CON PROTOTIPOS (SIN CLASES)

// Función constructora "Padre"
function Animal(nombre) {
    this.nombre = nombre;
  }
  
  // Método compartido a través del prototipo
  Animal.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };
  
  // Función constructora "Hijo"
  function Perro(nombre, raza) {
    Animal.call(this, nombre); // Heredamos propiedades de Animal
    this.raza = raza;
  }
  
  // Establecemos la herencia de prototipos
  Perro.prototype = Object.create(Animal.prototype);
  Perro.prototype.constructor = Perro;
  
  // Método específico de Perro
  Perro.prototype.ladrar = function () {
    console.log("¡Guau guau!");
  };
  
  // Creamos una instancia de Perro
  const miPerro = new Perro("Rex", "Labrador");
  miPerro.saludar(); // "Hola, soy Rex" (heredado de Animal)
  miPerro.ladrar(); // "¡Guau guau!" (método propio de Perro)


//HERENCIA CON CLASES (ES6)

// Clase "Padre": Vehiculo
class Vehiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    describir() {
      console.log(`Este es un ${this.marca} ${this.modelo}`);
    }
  
    arrancar() {
      console.log("El vehículo está arrancando...");
    }
  }
  
  // Clase "Hijo": Coche (hereda de Vehiculo)
  class Coche extends Vehiculo {
    constructor(marca, modelo, numPuertas) {
      super(marca, modelo); // Llama al constructor de la clase padre (Vehiculo)
      this.numPuertas = numPuertas;
    }
  
    abrirPuertas() {
      console.log(`Abriendo las ${this.numPuertas} puertas del coche.`);
    }
  }
  
  // Creamos una instancia de Coche
  const miCoche = new Coche("Toyota", "Corolla", 4);
  miCoche.describir(); // "Este es un Toyota Corolla" (heredado de Vehiculo)
  miCoche.arrancar(); // "El vehículo está arrancando..." (heredado de Vehiculo)
  miCoche.abrirPuertas(); // "Abriendo las 4 puertas del coche." (método propio de Coche)