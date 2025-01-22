//Personajes de TV

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 15;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
}; //Esto es un "objeto literal".

console.log(personaje);
console.log(personaje.nombre); //Se puede acceder a propiedades de un objeto con punto.
console.log(personaje['anime']); //Se puede acceder a propiedades de un objeto con corchetes.

personaje.edad = 15; //Se puede cambiar el valor de una propiedad de un objeto, con el punto.
personaje['edad'] = 17; //Se puede cambiar el valor de una propiedad de un objeto, con corchetes.

delete personaje.anime; //Se puede eliminar una propiedad de un objeto, con el punto.

console.log(personaje);