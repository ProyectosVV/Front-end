export class Aeropuerto {
  constructor(id, nombreAeropuerto, ciudadId, tipoAeropuertoId, estado = 1) {
    this.id = id;
    this.nombreAeropuerto = nombreAeropuerto;
    this.ciudadId = ciudadId; 
    this.tipoAeropuertoId = tipoAeropuertoId; 
    this.estado = estado;
  }

  static registrar(nombreAeropuerto, ciudadId, tipoAeropuertoId, estado = 1) {
    const aeropuertos = JSON.parse(sessionStorage.getItem("aeropuertos")) || [];

    const nuevoAeropuerto = new Aeropuerto(
      aeropuertos.length + 1,
      nombreAeropuerto,
      ciudadId,
      tipoAeropuertoId,
      estado
    );

    aeropuertos.push(nuevoAeropuerto);

    sessionStorage.setItem("aeropuertos", JSON.stringify(aeropuertos));

    return nuevoAeropuerto;
  }

  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("aeropuertos")) || [];
  }
}


export class TipoAeropuerto {
  constructor(id, nombreTipo, estado = 1) {
    this.id = id;
    this.nombreTipo = nombreTipo;
    this.estado = estado;
  }

  static registrar(nombreTipo, estado = 1) {
    const tipos = JSON.parse(sessionStorage.getItem("tiposAeropuerto")) || [];

    const nuevoTipo = new TipoAeropuerto(tipos.length + 1, nombreTipo, estado);

    tipos.push(nuevoTipo);

    sessionStorage.setItem("tiposAeropuerto", JSON.stringify(tipos));

    return nuevoTipo;
  }

  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("tiposAeropuerto")) || [];
  }
}



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

export class Registro {
  constructor(id, nombre, correo, contrasena, telefono) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.telefono = telefono;
  }
}

export class ClaseAsiento {
  constructor(id, nombre, estado=1) {
    this.id = id;
    this.nombre = nombre;
    this.estado = estado;
    
  }

  static registrar(nombre, estado = 1) {
    const clases = JSON.parse(sessionStorage.getItem("clasesAsiento")) || [];
    const nuevaClase = new ClaseAsiento(clases.length + 1, nombre, estado);
    clases.push(nuevaClase);
    sessionStorage.setItem("clasesAsiento", JSON.stringify(clases));
    return nuevaClase;
  }
}


export class Asiento {
  constructor(id, tipoUbicacion, claseId) {
    this.id = id;
    this.tipoUbicacion= tipoUbicacion;
    this.claseId = claseId;
  }
  }