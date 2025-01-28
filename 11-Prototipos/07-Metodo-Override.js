

function Entidad() {}

Entidad.prototype.save = function () {
    console.log('Guardando desde Entidad()...')
}

function User() {}


//A crear un método con el mismo nombre que el de la función constructora, se le llama:
//Method Override. (Reemplazar método, sobrescribir método...)
User.prototype.save = function () {
    console.log('Guardando desde User()...')
}

Object.setPrototypeOf(User.prototype, Entidad.prototype)

const user = new User();

