/**********************************************
 * LECCIÓN: HERENCIA Y CONSTRUCTOR PADRE EN JS *
 **********************************************/

// =============================================
// CONSTRUCTOR PADRE (Entidad)
// =============================================
function Entidad(entidad) {
    // Propiedades comunes a todas las entidades
    this.id = Math.random().toString(36).substring(2); // ID único (ej: "kf9s4d2")
    this.entidad = entidad; // Tipo de entidad (ej: "user", "producto")
    this.fechaCreacion = new Date(); // Fecha de creación automática

    // Método común para auditoría (ej: logs)
    this.registrarAuditoria = function() {
        console.log(`[${this.entidad}] ${this.id} auditado.`);
    };
}

// =============================================
// CONSTRUCTOR HIJO (User) - HEREDA DE Entidad
// =============================================
function User() {
    // 1. Llamamos al constructor padre con el contexto actual (this) y parámetros
    Entidad.call(this, 'usuario'); // Hereda propiedades: id, entidad, fechaCreacion

    // 2. Propiedades específicas de User
    this.userInfo = {
        nombre: 'Rafa',
        email: 'rafa@ejemplo.com',
        rol: 'admin'
    };

    // Método específico de User
    this.enviarEmailBienvenida = function() {
        console.log(`Enviando email a ${this.userInfo.email}`);
    };
}

// =============================================
// CASOS DE USO REALES
// =============================================
// **1. Sistema de usuarios:**
// - Entidad maneja propiedades comunes (ID, fecha creación).
// - User añade datos específicos (email, rol) y métodos (enviar email).

// **2. E-commerce:**
// - Producto heredaría de Entidad y tendría precio, stock, etc.

// **3. Logs del sistema:**
// - LogError heredaría de Entidad y tendría mensaje de error, severidad.

// =============================================
// EJECUCIÓN
// =============================================
const usuario = new User();
console.log(usuario); 
/* Resultado:
User {
  id: "kf9s4d2",
  entidad: "user",
  fechaCreacion: 2023-10-05T12:34:56.789Z,
  atributos: { nombre: 'Rafa', email: 'rafa@ejemplo.com', rol: 'admin' },
  registrarAuditoria: [Function],
  enviarEmailBienvenida: [Function]
}
*/

usuario.registrarAuditoria(); // "[user] kf9s4d2 auditado."
usuario.enviarEmailBienvenida(); // "Enviando email a rafa@ejemplo.com"

// =============================================
// ¿POR QUÉ USAMOS Entidad.call(this, ...)?
// =============================================
// - call() ejecuta el constructor padre (Entidad) en el contexto del hijo (User).
// - Así el hijo hereda las propiedades del padre (this.id, this.entidad, etc).
// - Esto evita duplicar código en constructores hijos.