 function detectarImpares(num){

    let i = 0;

    while (i <= num) {

        if (i % 2 != 0){
            console.log('impar ' + i)
        }

        i++;
    }

    return "Fin"
 }


resultado = detectarImpares(10);
console.log(resultado);