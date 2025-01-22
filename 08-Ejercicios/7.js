
//Crea una función que reciba un array de objetos, y una propiedad de dichos objetos.
//Retorna un objeto cuyas propiedades sean el valor de la propiedad recibida en la 
// función, y cuyos valores sean un array con los objetos que tienen dicho valor en 
// la propiedad recibida por la función.

const usuarios = [
    {edad: 17, nombre: 'Diego', plan: 'premium',},
    {edad: 28, nombre: 'Rafa', plan: 'free',},
    {edad: 25, nombre: 'Luci', plan: 'premium',},
    {edad: 24, nombre: 'Ana', plan: 'gold',},
];


function groupBy(arr, prop) {
    return arr.reduce((acc, obj) => {
        const nuevaProp = obj[prop];
        acc = acc[nuevaProp] ? acc : {...acc, [nuevaProp]: []};
        acc[nuevaProp].push(obj);
        return acc;
    }, {})
}





console.log(groupBy(usuarios, 'plan'));