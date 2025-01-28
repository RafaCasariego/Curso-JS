

// 1. Definimos 3 "moldes" vacíos (funciones constructoras):
function User() { 
    this.name = 'Rafa'; // Cada User creado tendrá esta propiedad
}

function Product() {
    this.name = 'Producto'; // Cada Product creado tendrá esta propiedad
}

function Entidad() {} // Molde vacío (sin propiedades iniciales)

// 2. Añadimos métodos al prototipo de Entidad (para que lo hereden otros)
Entidad.prototype.save = function() { 
    console.log('Guardando...'); // Método compartido para guardar
}
Entidad.prototype.validate = function() { 
    console.log('Validando...'); // Método compartido para validar
}

// 3. Hacemos que User y Product hereden los métodos de Entidad:
Object.setPrototypeOf(User.prototype, Entidad.prototype); // User ahora tiene save() y validate()
Object.setPrototypeOf(Product.prototype, Entidad.prototype); // Product también los hereda

//EJEMPLO

const usuario = new User();
usuario.save(); // "Guardando..." (heredado de Entidad)
console.log(usuario.name); // "Rafa" (propio de User)
console.log(usuario) //usuario es un objeto User, que hereda las propiedades de User (en
//este caso, el nombre), y el prototype de Entidad, que contiene las funciones save y
// validate, a las que usuario accede por la cadena de prototipos.