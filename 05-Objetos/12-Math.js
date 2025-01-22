console.log(Math.PI); // 3.14
console.log(Math.abs(-15)); //Devuelve el valor absoluto // 15
console.log(Math.round(6.5)); //Redondea al valor más próximo // 7
console.log(Math.floor(10.9)); //Redondea al valor más bajo // 10
console.log(Math.ceil(10.3)); //Redondea al valor más alto // 11
console.log(Math.pow(2, 3)); //Calcula el primer número elevado al segundo // 8
console.log(Math.sqrt(9)); //Calcula la raiz cuadrada del número dado // 3
console.log(Math.random()); //Devuelve un número aleatorio entre 0 y 1

//Necesitamos una funcion para obtener un número aleatorio entre dos valores a nuestra 
// elección:

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

dado = getRandomArbitrary(1, 6)
console.log(Math.round(dado))