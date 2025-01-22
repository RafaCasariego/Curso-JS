const usuarios = [
    {edad: 17, nombre: 'Diego', plan: 'premium',},
    {edad: 28, nombre: 'Rafa', plan: 'free',},
    {edad: 25, nombre: 'Luci', plan: 'premium',},
    {edad: 24, nombre: 'Ana', plan: 'gold',},
];

function getPaidUsers(usuarios) {
    return usuarios.filter((user) => user.plan !== 'free')
}

let usuariosPago = getPaidUsers(usuarios);
console.log(usuariosPago);