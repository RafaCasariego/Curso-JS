

//La función mixin se utiliza para mezclar o combinar propiedades y métodos de 
// múltiples objetos en el prototipo de una clase o constructor.
function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args)
}



let vuela = {
    vuela() {
        console.log('Va volaaaando...')
    }
}

let nada = {
    nadar(){
        console.log('Nada rapidísimo!')
    }
}

let pipi = {
    hacePipi() {
        console.log('Se hace pis encima... :(')
    }
}

let corre = {
    correr() {
        console.log('Es lento, pero correr corre :)')
    }
}



function Pato() {
    this.name = 'Pato'
}
mixin(Pato, vuela, nada, pipi, corre)


function Perro() {}
mixin(Perro, nada, pipi, corre)


function Pez() {}
mixin(Pez, nada, pipi)


function Avion() {}
mixin(Avion, vuela)


let pato = new Pato();
let perro = new Perro();
let pez = new Pez();
let avion = new Avion();

console.log(pato)
console.log(perro)
console.log(pez)
console.log(avion)


/*
¿Para qué sirve mixin?

Reutilización de código:
    Puedes definir funcionalidades comunes (vuela, nada, etc.) una sola vez y 
    reutilizarlas en múltiples "clases" o constructores sin tener que escribirlas 
    varias veces.

Herencia múltiple simulada:
    En JavaScript no puedes heredar directamente de múltiples clases, pero con mixin 
    puedes mezclar comportamientos de diferentes objetos en una "clase".

Flexibilidad:
    Permite agregar comportamientos específicos a diferentes "clases" o instancias, 
    dependiendo de lo que necesites.

Modularidad:
    Separas funcionalidades en módulos (objetos como vuela, nada, etc.) y los combinas 
    como piezas de Lego según sea necesario.
*/