/*
El alcance de las funciones en JavaScript se refiere a que las variables declaradas dentro 
de una función solo son accesibles y existen dentro de esa función, no fuera de ella.
*/ 

function alcance() {
    function saludo() {};
    var obsoleta = 'ya no se usa :)';
    let hola = 'hola';
    const adios = 'adios';
}

console.log(saludo);
console.log(obsoleta);
console.log(hola);
console.log(adios);

/*
Las variables que están fuera de una función (en el ámbito global o en un ámbito superior) 
pueden ser accedidas y usadas dentro de la función, siempre que no haya otra variable con 
el mismo nombre en el ámbito local de la función.
*/

let nombre = "Rafa"; // Variable global

function saludar() {
    console.log(`Hola, ${nombre}!`); // Accede a la variable global
}

saludar(); // Salida: Hola, Rafa!
