//Dado el objeto...

let punto = {
    x: 10,
    y: 15,
};


//Podemos clonar sus propiedades, y/o asignarle nuevas con Object.assign()

//Object.assign(punto, {z: 20});
//console.log(punto)


//Para clonar un objeto, tan solo debemos añadir un objeto vacío al principio del 
// Object.assign(). De no añadirlo, simplemente estaremos añadiendo una propiedad 
// al objeto punto, como en el ejemplo anterior. Añadiendolo, creamos un nuevo 
// objeto llamado clonePunto

let clonePunto = Object.assign({}, punto, {z: 20});
console.log(punto, clonePunto)


//Si al objeto que clonamos le añadimos propiedades ya existentes en el objeto original 
// , se actualizaran con las nuevas propiedades que añadimos:

let clonePunto2 = Object.assign({}, punto, {z: 20, x:30});
console.log(punto, clonePunto2)

//La forma moderna de clonar un objeto es con el spread operator (...), que sirve también 
// para arrays y funciones:

let copia3 = {...punto};
console.log(punto, copia3)