//Las funciones pueden ser asignadas como variables:

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Rafa');

console.log(user);

//Las funciones pueden ser pasadas como argumento de otras funciones:

function of(Fn, arg) {
    return new Fn(arg);
}

let ejemplo = of(Usuario, 'Jose Angel');

console.log(ejemplo)

//Las funciones también pueden ser retornadas de otras funciones:

function fnRetornada() {
    return function() {
        console.log('Hola, estoy siendo retornada por otra función :(')
    }
}

let probando = fnRetornada();

probando(); //Llamamos a la variable que hemos declarado como función, que retorna la función anónima :)