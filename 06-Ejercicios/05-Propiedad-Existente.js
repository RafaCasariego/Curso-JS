let objeto = {
    id: 1,
    name: 'Rafa',
    login: function() {},
    logout: function() {},
    prueba: false,

}

function tieneLaPropiedad(obj, prop) {
    let coincidencia = false;
    if (prop in obj) {
        coincidencia = true
    }
    return coincidencia
}

let propiedad = 'id';
let comprobarCoincidencia = tieneLaPropiedad(objeto, propiedad);

console.log(comprobarCoincidencia)
