
//Dado el siguiente objeto, crea una función constructora que utilice el metrodo call para
//crear un nuevo objeto con las propiedades del objeto dado + los métodos 'login' y 'logout'.

const obj = {
    nombre: 'Rafa',
};

function Extender (){
    this.login = () => {
        console.log(`login de ${this.nombre}`);
    }
    this.logout = () => {
        console.log(`logout de ${this.nombre}`);
    }
}

Extender.call(obj);

console.log(obj);

obj.login();
obj.logout();