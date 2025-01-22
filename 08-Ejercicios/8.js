
// Dado el siguiente array:
//Obtén los usuarios con un plan de pago - HECHO
//Devuelve el nombre de dichos usuarios, ordenados de mayor a menor edad - HECHO
//Crea una plantilla HTML que muestre los nombres en una UL
//Imprimela en consola


const usuarios = [
    {edad: 17, nombre: 'Diego', plan: 'premium',},
    {edad: 28, nombre: 'Rafa', plan: 'free',},
    {edad: 25, nombre: 'Luci', plan: 'premium',},
    {edad: 24, nombre: 'Ana', plan: 'gold',},
];


let usuariosPago = usuarios.filter((usuario) => usuario.plan !== 'free');

usuariosPago.sort((a, b) => b.edad - a.edad);

let listaHTML = usuariosPago.map((usuario) => `<li>${usuario.nombre}</li>`);

let HTMLfinal = `<ul>
    ${listaHTML.join(`
    `)};
</ul>`

console.log(HTMLfinal);