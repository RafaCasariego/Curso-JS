/* Crea una función que devuelva el numero menor y mayor de un array */

let array = [2, 5, 7, 15, -5, -100, 55]

function averiguarMenorYMayor(array) {

    let menor = array[0];
    let mayor = array[0];

    for (indice = 0; indice < array.length; indice++) {
        if (array[indice] < menor){
            menor = array[indice]
        }

        else if (array[indice] > mayor){
            mayor = array[indice]
        }

        else continue
    }

    return ('El menor es ' + menor + ', y el mayor es ' + mayor)
}

let prueba = averiguarMenorYMayor([2, 3, 27, -2])
console.log(prueba)