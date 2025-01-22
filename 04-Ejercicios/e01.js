function cualEsMayor (a, b) {
    if (a > b) {
        return a + ' Es mayor que ' + b
    } else if (a < b) {
        return b + ' Es mayor que ' + a
    } else {
        return 'Los números son iguales'
    }
}

let mayor = cualEsMayor(10, 10);

console.log(mayor);