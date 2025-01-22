const usuarios = [
    {edad: 17, nombre: 'Diego', plan: 'premium',},
    {edad: 28, nombre: 'Rafa', plan: 'free',},
    {edad: 25, nombre: 'Luci', plan: 'premium',},
    {edad: 24, nombre: 'Ana', plan: 'gold',},
];

function cuantosPremium(usuarios) {
    return usuarios.filter((user) => user.plan === 'premium').length; 
}

function cuantosMayores(usuarios) {
    return usuarios.filter((user) => user.edad >= 18).length; 
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));