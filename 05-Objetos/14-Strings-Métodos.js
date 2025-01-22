/*

MANIPULACIÓN DE STRINGS

toLowerCase(): Convierte todos los caracteres a minúsculas.
Ejemplo: "Hola".toLowerCase() // "hola"

toUpperCase(): Convierte todos los caracteres a mayúsculas.
Ejemplo: "hola".toUpperCase() // "HOLA"

trim(): Elimina los espacios en blanco al principio y al final del string.
Ejemplo: " hola ".trim() // "hola"

trimStart(): Elimina los espacios en blanco solo al inicio.
Ejemplo: " hola".trimStart() // "hola"

trimEnd(): Elimina los espacios en blanco solo al final.
Ejemplo: "hola ".trimEnd() // "hola"

replace(searchValue, newValue): Reemplaza el primer valor coincidente.
Ejemplo: "hola mundo".replace("hola", "adiós") // "adiós mundo"

replaceAll(searchValue, newValue): Reemplaza todas las coincidencias.
Ejemplo: "hola hola".replaceAll("hola", "adiós") // "adiós adiós"

BÚSQUEDA Y COMPARACIÓN

includes(substring): Devuelve true si el string contiene la subcadena.
Ejemplo: "hola mundo".includes("mundo") // true

indexOf(substring): Devuelve la posición de la primera aparición, o -1 si no existe.
Ejemplo: "hola mundo".indexOf("mundo") // 5

lastIndexOf(substring): Devuelve la posición de la última aparición, o -1 si no existe.
Ejemplo: "hola hola mundo".lastIndexOf("hola") // 5

startsWith(substring): Devuelve true si el string comienza con la subcadena.
Ejemplo: "hola mundo".startsWith("hola") // true

endsWith(substring): Devuelve true si el string termina con la subcadena.
Ejemplo: "hola mundo".endsWith("mundo") // true

CORTAR Y DIVIDIR STRINGS

slice(start, end): Corta una porción del string desde start hasta end (sin incluir end).
Ejemplo: "hola mundo".slice(0, 4) // "hola"

substring(start, end): Similar a slice pero no admite índices negativos.
Ejemplo: "hola mundo".substring(0, 4) // "hola"

substr(start, length): (Deprecado) Devuelve un segmento basado en el índice inicial y la longitud.
Ejemplo: "hola mundo".substr(0, 4) // "hola"

split(separator): Divide el string en un array utilizando el separador.
Ejemplo: "hola mundo".split(" ") // ["hola", "mundo"]

REPETICIÓN Y LONGITUD

repeat(count): Repite el string count veces.
Ejemplo: "hola".repeat(3) // "holaholahola"

length: Devuelve la longitud del string.
Ejemplo: "hola".length // 4

FORMATEO Y CREACIÓN

padStart(targetLength, padString): Añade caracteres al principio hasta alcanzar la longitud.
Ejemplo: "5".padStart(3, "0") // "005"

padEnd(targetLength, padString): Añade caracteres al final hasta alcanzar la longitud.
Ejemplo: "5".padEnd(3, "0") // "500"

concat(...strings): Concatena strings.
Ejemplo: "hola".concat(" mundo") // "hola mundo"

INTERNACIONALIZACIÓN

localeCompare(compareString): Compara dos strings en base a su orden lexicográfico según el idioma.
Ejemplo: "a".localeCompare("b") // -1

OTROS MÉTODOS AVANZADOS

charAt(index): Devuelve el carácter en una posición específica.
Ejemplo: "hola".charAt(1) // "o"

charCodeAt(index): Devuelve el código Unicode del carácter en una posición.
Ejemplo: "hola".charCodeAt(1) // 111

codePointAt(index): Devuelve el punto de código Unicode completo en un índice (útil para emojis).
Ejemplo: "😊".codePointAt(0) // 128522

match(regex): Devuelve las coincidencias con una expresión regular.
Ejemplo: "hola123".match(/\d+/) // ["123"]

matchAll(regex): Devuelve un iterador con todas las coincidencias (útil con expresiones globales).
Ejemplo: [... "hola123".matchAll(/\d/g)] // [["1"], ["2"], ["3"]]

toLocaleLowerCase() / toLocaleUpperCase(): Similar a toLowerCase y toUpperCase, pero considera configuraciones regionales.

*/

//Ejemplo combinando metodos:

let texto = "    Hola Mundo!    ";
let resultado = texto.trim().toLowerCase().replace("mundo", "amigo");
console.log(resultado); // "hola amigo!"