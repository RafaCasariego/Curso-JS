
// Formas de vaciar el contenido de un array:
let arr = [1, 2];

arr = []; //Reformulando el valor del array

arr.length = 0; //Cambiando su longitud a 0

arr.splice(0, arr.length); //Eliminando todo su contenido desde el indice 0 hasta el 
// largo total del array


//Todas estas formas son válidas, y también se podría hacer con un bucle while, pero 
// no sería nada óptimo ni recomendable.