function Usuario() {
    this.name = 'Rafa';
    this.guardar = function() {
        console.log('Guardando...');
    };
    this.log = function() {
        console.log('Haciendo login')
        this.guardar
    }
};

//En esa función, podrían modificarse (por error) sus propiedades, por ejemplo:

user = new Usuario();
user.name = 'Jose Angel';


//La forma de que las propiedades no puedan modificarse desde fuera de la function, 
// es la siguiente: declaramos las propiedades como variables, de esta forma, no 
// podremos acceder a guardar desde fuera de la función.

function Usuario2() {
    this.name = 'Rafa';
    let guardar = function() {
        console.log('Guardando...');
    };
    this.log = function() {
        console.log('Haciendo login')
        guardar()
    }
};