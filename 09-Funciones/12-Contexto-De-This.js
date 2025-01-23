const usuario = {
    nombre: 'Rafael',
    nacionalidades: ['Español', 'Francés', 'Italiano'],
    mostrarNacionalidades() {
        this.nacionalidades.forEach(nacionalidad => {
            console.log(this.nombre, nacionalidad);
        });
    },
}

usuario.mostrarNacionalidades();

/*
Lo que pasa en este ejemplo:

mostrarNacionalidades es una función que pertenece al objeto usuario (también llamada método
del objeto).
Cuando invocas usuario.mostrarNacionalidades(), el valor de this dentro de esa función apunta 
al objeto usuario, ya que es el que está ejecutando el método.
Esto permite acceder a otras propiedades del objeto (this.nombre, this.nacionalidades, etc.).

¿Y qué pasa con this en el callback de forEach?

En el callback de forEach, gracias a que usas una arrow function, el valor de this se mantiene
 igual al de su contexto externo (la función mostrarNacionalidades).

Las arrow functions no crean su propio this, sino que heredan el valor de this del lugar donde
 fueron definidas.
Por eso, en este caso, this sigue refiriéndose al objeto usuario.

Si usaras una función normal en lugar de una arrow function:

El comportamiento sería diferente, porque las funciones normales sí crean su propio this, que
 dependerá de cómo se llame la función.
*/ 