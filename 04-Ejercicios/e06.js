let array = [2, 5, 7, 15, -5, -100, 55]

function cuantosPositivos(array){

    let contador = 0;

    for (i = 0; i < array.length; i++){

        if (array[i] > 0){
            contador += 1
        }
    }
    return contador
}

numDePositivos = cuantosPositivos(array);
console.log(numDePositivos)