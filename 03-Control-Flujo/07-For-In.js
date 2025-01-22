//For OF sirve principalmente para iterar VALORES.
//For IN sirve principalmente para iterar CLAVES.

let user = {
    id: 1,
    name: 'Rafa',
    age: 29,
}

for (propiedad in user) {
    console.log(propiedad) //Esto impimiria las PROPIEDADES del user (id, name, age)
    console.log(user[propiedad]) //Esto impimiria los VALORES del user (1, Rafa, 29)
}