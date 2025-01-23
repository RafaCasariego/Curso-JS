
//Fat Arrow Functions no cuentan con la palabra reservada ARGUMENTS, ni tampoco SUPER, ni THIS

const sumaTotal = (args) => {
    return Array.from(arguments).reduce((acum, num) => acum + num, 0);
}

console.log(sumaTotal(0, 1, 2, 3, 4, 5, 6)); //Por eso esta función así formulada, 
// arroja el siguiente error:
// Uncaught ReferenceError: arguments is not defined at sumaTotal

