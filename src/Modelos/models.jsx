export class Pais {
  constructor(id, nombrePais, estado = 1) {
    this.id = id;
    this.nombrePais = nombrePais;
    this.estado = estado;
  }

  static registrar(nombrePais, estado = 1) {
    const paises = JSON.parse(sessionStorage.getItem("paises")) || [];

    const nuevoPais = new Pais(paises.length + 1, nombrePais, estado);

    paises.push(nuevoPais);

    sessionStorage.setItem("paises", JSON.stringify(paises));

    return nuevoPais;
  }

  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("paises")) || [];
  }
}

export class Ciudad {
  constructor(id, nombreCiudad, paisId, estado = 1) {
    this.id = id;
    this.nombreCiudad = nombreCiudad;
    this.paisId = paisId;  // Relación: FK al ID del país
    this.estado = estado;
  }

  static registrar(nombreCiudad, paisId, estado = 1) {
    const ciudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];

    const nuevaCiudad = new Ciudad(ciudades.length + 1, nombreCiudad, paisId, estado);

    ciudades.push(nuevaCiudad);

    sessionStorage.setItem("ciudades", JSON.stringify(ciudades));

    return nuevaCiudad;
  }

  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("ciudades")) || [];
  }
}


export class Rol {
  constructor(id, nombreRol, estado = 1) {
    this.id = id;             
    this.nombreRol = nombreRol; 
    this.estado = estado;       
  }

  static registrar(nombreRol, estado = 1) {
    const roles = JSON.parse(sessionStorage.getItem("roles")) || [];

    const nuevoRol = new Rol(roles.length + 1, nombreRol, estado);

    roles.push(nuevoRol);

    sessionStorage.setItem("roles", JSON.stringify(roles));

    return nuevoRol;
  }
}



export class Usuario {
  constructor(id, nombre, correo, contrasena, rol,telefono,estado= 1 ) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.rol = rol;
    this.telefono = telefono;
    this.estado = estado;
  }

   static registrar(nombre, correo, contrasena, rol,telefono, estado = 1) {
    const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];
    const nuevo = new Usuario(usuarios.length + 1, nombre, correo, contrasena, rol, telefono,estado);
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
