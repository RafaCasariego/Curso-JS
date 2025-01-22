let animales = ["perro", "gato", "pez", "pajaro"];

console.log(animales);

console.log(animales[0]); //Para acceder a un elemento de un array, se usa corchetes.
console.log(animales[3]);

animales[2] = "tortuga"; //Se puede cambiar el valor de un indice de un array.
console.log(animales);

animales[4] = "conejo"; //Se puede agregar un elemento a un array, con un indice que no exista.
console.log(animales);

animales[10] = "elefante"; //Se puede agregar un elemento al array, dejando espacios en blanco.
console.log(animales);

console.log(typeof animales); //El tipo de un array es "object".