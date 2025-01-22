//short-circuit

//Falsy (Valores que son falsos, y hacen "corto circuito" en los condicionales)

//undefined
//null
//0
//false
//NaN
//''

let nombre = '';
let username = nombre || 'Anónimo';
console.log(username);

let nombre2 = 'Rafa';
let username2 = nombre2 || 'Anónimo';
console.log(username2);