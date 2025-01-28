/*
En JavaScript, casi todo es un objeto, y los objetos tienen una propiedad especial llamada
prototype. Un prototipo es un mecanismo por el cual los objetos pueden heredar propiedades
y métodos de otros objetos. Esto permite la reutilización de código y la herencia en 
JavaScript.

Cada objeto en JavaScript tiene un prototipo (a menos que se cree explícitamente sin uno,
usando Object.create(null)).

Cuando intentas acceder a una propiedad o método de un objeto, JavaScript primero busca
en el objeto mismo. Si no lo encuentra, busca en su prototipo, luego en el prototipo 
del prototipo, y así sucesivamente hasta llegar al prototipo final, que es null. A esto
se le llama cadena de prototipos.
*/


//EJEMPLO DE PROTOTIPOS

// Creamos un objeto "persona" con una propiedad y un método
const persona = {
    nombre: "Rafa",
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  };
  
  // Creamos otro objeto que hereda de "persona"
  const estudiante = Object.create(persona);
  estudiante.curso = "JavaScript";
  
  // Accedemos a propiedades y métodos heredados
  console.log(estudiante.nombre); // "Rafa" (heredado de persona)
  estudiante.saludar(); // "Hola, soy Rafa" (método heredado)