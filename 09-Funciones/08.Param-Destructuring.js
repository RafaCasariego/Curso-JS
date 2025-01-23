
const config = {
    calle: 'Calle Falsa',
    numero: 12,
    url: 'https://rafacasariego.es'
}



//En esta función se recibe un objeto con una propiedad url y se devuelve la url.
function webserver(objeto) {
    const url = objeto.url;
    return url;
}

console.log(webserver(config));


//Una forma más sencilla de hacerlo es con destructuring:
function webserver2({url}) { //Esto es lo mismo que la función anterior, pero directamente 
    return url;  // asignamos la variable url de la propiedad url del objeto que se recibe,
}                // directamente en los parámetros de la función.

console.log(webserver2(config));


//Se podría hacer igual con un array, cambiando las llaves por corchetes:
const configArray = [
    'Calle Falsa',
    12,
    'https://rafacasariego.es',
    'Rafael',
    'Casariego',
    28,
]

function webserver3([ , , url, ...rest]) { 
    return {url, rest};  
}    

console.log(webserver3(configArray))