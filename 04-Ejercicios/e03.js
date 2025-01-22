function getByIndex(arr, ind) {
    
    if (arr.length <= ind || ind < 0){
        return false
    }

    return arr[ind]

}

let resultado = getByIndex([1, 2, 3, 4, 5], 0);
console.log(resultado);


