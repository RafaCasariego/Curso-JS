// Averigua cuáles son los números impares que hay entre 1 y 100 y qué suma total hacen

let i = 0;
let sumaTotal = 0;

while (i <= 100) {
  if (i % 2 != 0) {
    console.log(i);
    sumaTotal = sumaTotal + i;
  }

  i++;
}


console.log(sumaTotal);