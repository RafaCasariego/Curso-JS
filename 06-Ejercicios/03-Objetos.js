function similares(obj1, obj2) {
    let iguales = true;
    for (let key in obj1){
        if (obj1[key] !== obj2[key]){   
            iguales = false;
        }
    }
    return iguales;
}

let resultado = similares(
    {id: 1, name:'Rafa'},
    {id: 1, name:'Rafa'},
)

console.log(resultado)