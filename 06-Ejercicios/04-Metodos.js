let objeto = {
    id: 1,
    name: 'Rafa',
    login: function() {},
    logout: function() {},

}

function esUnMetodo(obj) {

    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(key)
        }
    }

};

esUnMetodo(objeto)

