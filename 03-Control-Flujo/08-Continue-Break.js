let i = 0;
while (i < 6) {

    i++;

    if (i == 2) {
        continue; //En este caso, continue hace que termine esa ronda del bucle while inmediatamente, y comience la siguiente, ignorando el resto del codigo.
    }

    if (i == 4) {
        break; //En este caso, break detiene y sale del bucle while si se cumple la condicion.
    }

    console.log(i)
}