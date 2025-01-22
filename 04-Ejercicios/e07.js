/* Algoritmo que devuelva el precio + impuesto */


function precioCompleto(precio, impuesto){

    let impuestoAAplicar = precio * impuesto;

    return precio + impuestoAAplicar
}

let resultado = precioCompleto(19.90, 0.15);
console.log(parseFloat(resultado.toFixed(2)))