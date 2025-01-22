//Así imprimimos la fecha actual;

const ahora = new Date();
console.log(ahora)

//Así mostramos una fecha concreta, pasandole los valores como un string:

const fecha = new Date('7 13 1995 23:15 GMT+0200')
//formato EEUU: Mes/Dia/Año
console.log(fecha)

const fecha2 = new Date(1995, 7, 13, 23, 15);
//formato ISO Año/Mes/Dia
console.log(fecha2)

const fecha3 = new Date(1995, 7, 13, 23+5, 15);
//formato ISO Año/Mes/Dia, sumando horas. (No llega a la hora 28, cambia el día)
console.log(fecha3)

//Así accedemos a la fecha en formato más convencional)
console.log(fecha3.toDateString());
console.log(ahora.toISOString()); //Este es el formato para mandar fechas al servidor.
console.log(fecha2.toTimeString()); //Tan solo muestra la hora.

fecha.setFullYear(1962) //Con .set podemos cambiar año, fecha, hora...
console.log(fecha);

