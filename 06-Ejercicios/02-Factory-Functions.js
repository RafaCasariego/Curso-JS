function crearUsuario(name) {
    return {
        name: name,
        id: Math.random(),
    }
}

let user = crearUsuario('Rafa')
console.log(user)