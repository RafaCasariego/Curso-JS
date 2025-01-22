//Forma clásica de función constructora:

function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')}
}


// Constructor con 'new Function'. No es recomendable usarlo nunca. Simplemente conocerlo.

const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')}
`);

const p = new Point(1, 2);
console.log(p);


//Método .call: define un objeto y le da el valor de dicho objeto al this de la función que modifica:

let obj = { z: 3, };
Punto.call(obj, 4, 5);

console.log(obj)

// con .apply podemos hacer lo mismo que con .call, pero debemos pasar los metodos como array:

Punto.apply(obj, [4, 5]);

console.log(obj)
