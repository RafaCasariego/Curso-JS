let obj1 = {
    id: 1,
    name: 'Rafa',
};

function crearCopia(obj) {

    const objClonado = {};

    for (let prop in obj){
        objClonado[prop] = obj[prop]
    }

    return objClonado
}

let obj2 = crearCopia(obj1);



console.log({obj1, obj2})