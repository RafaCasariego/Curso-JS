

const config = {
    url: 'https://rafacasariego.es',
    bucket: 'miBucket',
    port: 3000,
}


//Así se podría formatear URLs, para confiurar una API, por ejemplo.

function configurarAPI(url, bucket, port) {
    return `${url}/${bucket}:${port}`
}

console.log(configurarAPI('https://rafacasariego.es', 'miBucket', 3000));


//Pero, ¿Y si queremos configurar unos parámetros por defecto? Pudiendo dar la libertad de 
// cambiarlos si fuera necesario, o de dejarlo en blanco con dichos parámetros por defecto:

function configurarAPI2(url = 'https://rafacasariego.es', bucket = 'miBucket', port = 3000) {
    return `${url}/${bucket}:${port}`
}

console.log(configurarAPI2()); //De esta forma, los parámetros por defecto se 
// mantienen si no le pasamos nada, pero los modificará si le pasamos otros:

console.log(configurarAPI2('https://google.com')) //Modifica la URL, pero mantiene bucket y port.