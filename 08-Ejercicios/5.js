const usuarios = [
    {edad: 17, nombre: 'Diego', plan: 'premium',},
    {edad: 28, nombre: 'Rafa', plan: 'free',},
    {edad: 25, nombre: 'Luci', plan: 'premium',},
    {edad: 24, nombre: 'Ana', plan: 'gold',},
];

function obtenerMayor(arr) {
    return arr.reduce((acc, usu) => usu.edad > acc.edad ? acc = usu : acc)
};

const mayor = obtenerMayor(usuarios);
console.log(mayor);