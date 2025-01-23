
// Dentro de un objeto: this hace referencia al objeto .
// Dentro de una funcion: this hace referencia al objeto global (window).
// Si se usa new: this hace referencia al objeto que se está creando.


// Ejemplo 1: Objetos

const user = {
    name: 'Nicolas',
    login () {
        console.log(this); //Está dentro del objeto user, por lo que this hace referencia 
    }                    // al objeto (imprimiendolo en consola)
};

user.login();

//Ejemplo 2: Funciones

function whoIsThis() {
    console.log(this); //Está dentro de una función, por lo que this hace referencia al 
    // objeto global (window). (Excepto las fat arrow function, que ignoran el contexto de this)
}

whoIsThis();


//Ejemplo 3: new

function Persona(nombre) {
    this.nombre = nombre;
    console.log(this);
}

const usuario = new Persona('Rafa'); //Está creando un nuevo objeto (usuario), 
// por lo que this hace referencia a dicho objeto.

console.log(usuario); // {nombre: 'Rafa'}