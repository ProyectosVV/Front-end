export class TipoVuelo {
  constructor(id, nombreTipoVuelo, estado = 1) {
    this.id = id;
    this.nombreTipoVuelo = nombreTipoVuelo;
    this.estado = estado;
  }

  static registrar(nombreTipoVuelo, estado = 1) {
    const tiposVuelo = JSON.parse(sessionStorage.getItem("tiposVuelo")) || [];

    const nuevoTipoVuelo = new TipoVuelo(
      tiposVuelo.length + 1,
      nombreTipoVuelo,
      estado
    );

    tiposVuelo.push(nuevoTipoVuelo);

    sessionStorage.setItem("tiposVuelo", JSON.stringify(tiposVuelo));

    return nuevoTipoVuelo;
  }

  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("tiposVuelo")) || [];
  }
}

export class TipoRuta {
  constructor(id, nombreTipoRuta, estado = 1) {
    this.id = id;
    this.nombreTipoRuta = nombreTipoRuta;
    this.estado = estado;
  }

  static registrar(nombreTipoRuta, estado = 1) {
    const tiposRuta = JSON.parse(sessionStorage.getItem("tiposRuta")) || [];

    const nuevoTipoRuta = new TipoRuta(
      tiposRuta.length + 1,
      nombreTipoRuta,
      estado
    );

    tiposRuta.push(nuevoTipoRuta);

    sessionStorage.setItem("tiposRuta", JSON.stringify(tiposRuta));

    return nuevoTipoRuta;
  }

  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("tiposRuta")) || [];
  }
}



export class Ruta {
  constructor(id, origen, destino, duracion, tipoRutaId, estado = 1) {
    this.id = id;
    this.origen = origen;
    this.destino = destino;
    this.duracion = duracion;
    this.tipoRutaId = tipoRutaId;
    this.estado = estado;
  }

  // Registrar una nueva ruta
  static registrar(origen, destino, duracion, tipoRutaId, estado = 1) {
    const rutas = JSON.parse(sessionStorage.getItem("rutas")) || [];

    const nuevoId = rutas.length > 0 ? rutas[rutas.length - 1].id + 1 : 1;

    const nuevaRuta = new Ruta(nuevoId, origen, destino, duracion, tipoRutaId, estado);

    rutas.push(nuevaRuta);

    sessionStorage.setItem("rutas", JSON.stringify(rutas));

    return nuevaRuta;
  }

  // Obtener todas las rutas
  static obtenerTodos() {
    return JSON.parse(sessionStorage.getItem("rutas")) || [];
  }

  // Obtener rutas activas
  static obtenerActivas() {
    return (JSON.parse(sessionStorage.getItem("rutas")) || []).filter(ruta => ruta.estado === 1);
  }
}


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