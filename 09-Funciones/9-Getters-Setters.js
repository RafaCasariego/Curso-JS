
//Get
//Un getter es un método especial (function) que permite obtener el valor de una propiedad de un
// objeto como si fuera una propiedad normal. No requiere llamar a la función explícitamente.

const usuario = {
    nombre: 'Rafa',
    apellido: 'Rodríguez',
    get nombreCompleto() { 
        return `${usuario.nombre} ${usuario.apellido}`
    }
}

console.log(usuario.nombreCompleto);


//Set
//Un setter es un método especial que permite asignar un valor a una propiedad de un objeto 
// de forma controlada, como si fuera una propiedad normal.

const usuario2 = {
    nombre: 'Rafa',
    apellido: 'Rodríguez',
    
    get nombreCompleto2() { 
        return `${usuario2.nombre} ${usuario2.apellido}`
    },

    set nuevoNombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

usuario2.nuevoNombreCompleto = 'Rafael Casariego';
console.log(usuario2.nombreCompleto2);
