function Usuario(name) {
    this.name = name;
    this.id = Math.random();
}

let user = new Usuario('Rafa');
let user2 = new Usuario('Diego')
console.log(user, user2)