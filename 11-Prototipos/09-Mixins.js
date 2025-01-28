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