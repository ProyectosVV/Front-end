export class Usuario {
  constructor(id, nombre, correo, contrasena, rol = "pasajero") {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.rol = rol;
  }

   static registrar(nombre, correo, contrasena, rol = "pasajero") {
    const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];
    const nuevo = new Usuario(usuarios.length + 1, nombre, correo, contrasena, rol);
    usuarios.push(nuevo);
    sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
    return nuevo;
  }
}

export class Vuelo {
  constructor(id, origen, destino, fecha, hora, precio) {
    this.id = id;
    this.origen = origen;
    this.destino = destino;
    this.fecha = fecha;
    this.hora = hora;
    this.precio = precio;
    this.estado = "disponible";
  }
}

export class Reserva {
  constructor(id, usuarioId, vueloId, Fecha_reserva) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.vueloId = vueloId;
    this.Fecha_reserva = Fecha_reserva;
    this.estado = "pendiente";
  }
}
