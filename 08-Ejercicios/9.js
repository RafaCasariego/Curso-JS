
//Dados estos dos arrays, modifica la estructura para que ambas sean iguales
//Fusiona los dos arrays en 1
//Ordenalos por edad
//Crea una plantilla HTML con:
//<li>Nombre: name, Edad: age</li>
//Imprime la lista en consola

const usuarios = [
    {edad: 17, nombre: 'Diego', plan: 'premium',},
    {edad: 28, nombre: 'Rafa', plan: 'free',},
    {edad: 25, nombre: 'Luci', plan: 'premium',},
    {edad: 24, nombre: 'Ana', plan: 'gold',},
];

const users = [
    {age: 13, name: 'Kevin', membership: 'premium',},
    {age: 48, name: 'Michel', membership: 'free',},
    {age: 22, name: 'Joe', membership: 'premium',},
];


//Fusionar y modificar la estructura de los arrays:

let usersModificados = users.map((user) => ({
    edad: user.age,
    nombre: user.name,
    plan: user.membership,
}));

let usuariosTotales = [...usuarios, ...usersModificados];

//Ordenarlos por edad:

usuariosTotales.sort((a, b) => {
    if (a.edad > b.edad) {
        return -1;
    } else if (a.edad < b.edad) {
        return 1;
    } else {
        return 0;
    }
});

//Crear platilla HTML:

let itemLista = usuariosTotales.map(usuario => `<li>Nombre: ${usuario.nombre}, Edad: ${usuario.edad}</li>`);

let plantillaHTML = `<ul>
    ${itemLista.join(`
    `)}
</ul>`;

//Imprimirla en consola:

console.log(plantillaHTML);