/* 
Un constructor es una función especial que sirve para crear y configurar objetos.
Para usarlo, se emplea la palabra clave new.
El objeto creado con new hereda de prototype de la función constructora,
y su propiedad constructor apunta a la función que lo creó.
*/

function Usuario(nombre, edad) {
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad;     // Propiedad edad
  }
  
  // Crear una nueva instancia usando el constructor:
  const user = new Usuario("Rafa", 30);
  
  console.log(user.nombre); // "Rafa"
  console.log(user.edad);   // 30
  
  // Ver el constructor del objeto:
  console.log(user.constructor); // [Function: Usuario]

  console.log(user);
  