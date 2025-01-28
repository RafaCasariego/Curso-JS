/*
Las instancias son objetos concretos creados a partir de un constructor o una clase.
Heredan propiedades y métodos de su prototipo.
Cada instancia es independiente, pero comparte métodos con otras instancias a través del 
prototipo.

Características:
Se crean con new Constructor() o Object.create().
Tienen propiedades propias, pero los métodos suelen estar en el prototipo para ahorrar 
memoria.
Si modificas el prototipo, todas las instancias heredarán el cambio.
*/


//INSTANCIAS

// Constructor (clase)
function Vehiculo(marca) {
    this.marca = marca; // Propiedad propia de la instancia
  }
  
  // Método en el prototipo (compartido por todas las instancias)
  Vehiculo.prototype.arrancar = function() {
    console.log("El vehículo está arrancando...");
  };
  
  // Crear instancias
  const coche1 = new Vehiculo("Toyota");
  const coche2 = new Vehiculo("Honda");
  
  coche1.arrancar(); // "El vehículo está arrancando..." (heredado del prototipo)
  coche2.arrancar(); // "El vehículo está arrancando..." (heredado del prototipo)
  console.log(coche1.marca); // "Toyota" (propiedad propia)
  console.log(coche2.marca); // "Honda" (propiedad propia)



  
/* DIFERENCIA ENTRE PROTOTIPO E INSTANCIA

Los prototipos son como "plantillas" que definen propiedades y métodos que otros 
objetos pueden heredar. Son compartidos y ahorran memoria, ya que todas las instancias
que los usan acceden a los mismos métodos. Las instancias, en cambio, son objetos 
concretos creados a partir de un prototipo. Cada instancia puede tener propiedades 
únicas, pero usa los métodos del prototipo. Si cambias el prototipo, todas las instancias
Se ven afectadas, pero los cambios en una instancia solo afectan a ese objeto.
*/
