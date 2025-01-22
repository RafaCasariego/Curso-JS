//Dado el siguiente objeto...

const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando...')
    },
    volar() {
        console.log('Volando...')
    },
};

//Podemos usar un condicional para imprimir una propiedad que no sabemos si ha sido 
// eliminada o no en algun momento del codigo. Como ves, volar ha sido deleteada, 
// por eso no se imprime, ni da error (no se ejecuta). 
// Pero dibujar sí se está ejecutando, ya que si se encuentra en el objeto.

delete punto.volar;

if ('volar' in punto) {
    punto.volar();
}

if ('dibujar' in punto) {
    punto.dibujar();
}


//Con 'Object.keys()' podemos crear un array con las propiedades de un objeto:

console.log(Object.keys(punto));

//Con esto, podemos usar bucles para listar las propiedades del objeto

for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

//También podemos usar 'Object.entries()' para obtener los pares clave-valor:

for (let par of Object.entries(punto)) {
    console.log(par)
}

//Esta es la forma más moderna y optima de hacer lo anterior, con un for...in:

for (let llave in punto) {
    console.log(llave, punto[llave]);
}