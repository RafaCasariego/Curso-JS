// Definimos una función constructora llamada "Select".
// Aunque en JavaScript moderno se usan "class", esto es un enfoque más antiguo (ES5).
function Select() {}

// Agregamos un método "render" al prototipo de "Select".
// Esto significa que todas las instancias de "Select" compartirán este método.
Select.prototype.render = function() {
    console.log('Renderizando Select...'); // Este mensaje se mostrará al llamar al método "render".
};

// Definimos otra función constructora llamada "CheckBox".
function CheckBox() {}

// De forma similar, agregamos un método "render" al prototipo de "CheckBox".
CheckBox.prototype.render = function() {
    console.log('Renderizando CheckBox...'); // Este mensaje es específico de "CheckBox".
};

// Creamos un array llamado "componentes" que contiene instancias
// de las clases "Select" y "CheckBox".
let componentes = [
    new Select(),  // Instancia de la clase "Select".
    new CheckBox() // Instancia de la clase "CheckBox".
];

// Utilizamos el método "forEach" para recorrer el array "componentes".
// Por cada elemento (instancia de "Select" o "CheckBox"), llamamos al método "render".
componentes.forEach(comp => comp.render());
/*
    - Durante la iteración:
        1. Si el elemento es una instancia de "Select", se ejecutará su método "render",
           mostrando "Renderizando Select...".
        2. Si el elemento es una instancia de "CheckBox", se ejecutará su método "render",
           mostrando "Renderizando CheckBox...".
*/

// Esto es un ejemplo de *polimorfismo* porque ambas clases ("Select" y "CheckBox")
// tienen un método común (render), pero con implementaciones diferentes.
// El código puede trabajar con estas clases de manera uniforme
// sin importar cuál es la clase específica de cada elemento.
