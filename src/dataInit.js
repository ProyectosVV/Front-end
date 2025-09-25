// src/dataInit.js
import { Usuario } from "./Modelos/models";
import { Rol } from "./Modelos/models";
import { TipoAeropuerto } from "./Modelos/models.jsx"; // Ajusta la ruta si es necesario
import { TipoRuta } from "./Modelos/models.jsx"; // Ajusta la ruta si es necesario
import { TipoVuelo } from "./Modelos/models.jsx"; // Ajusta la ruta si es necesario
import { Capacidad } from "./Modelos/models"; 

const tiposAeropuertoDemo = [
  new TipoAeropuerto(1, "Internacional"),
  new TipoAeropuerto(2, "Nacional"),
  new TipoAeropuerto(3, "Regional"),
];

if (!sessionStorage.getItem("tiposAeropuerto")) {
  sessionStorage.setItem("tiposAeropuerto", JSON.stringify(tiposAeropuertoDemo));
}

const rolAdmin = new Rol(1, "admin");
const rolPasajero = new Rol(2, "pasajero");

const rolesDemo = [rolAdmin, rolPasajero];

const usuariosDemo = [
  new Usuario(1, "Admin", "admin@avianca.com", "1234", 1, "7789-8987"),
  new Usuario(2, "Juan Pérez", "juan@gmail.com", "abcd", 2, "7868-8942"),
  new Usuario(3, "Maria Lopez", "maria@gmail.com", "abcd", 2, "8798-4875"),
];

export function initUsuarios() {
  const rolesExistentes = JSON.parse(sessionStorage.getItem("roles"));
  if (!rolesExistentes) {
    sessionStorage.setItem("roles", JSON.stringify(rolesDemo));
    console.log("Roles inicializados en sessionStorage ✅");
  }

  const usuariosExistentes = JSON.parse(sessionStorage.getItem("usuarios"));
  if (!usuariosExistentes) {
    sessionStorage.setItem("usuarios", JSON.stringify(usuariosDemo));
    console.log("Usuarios inicializados en sessionStorage ✅");
  }
}

const clasesAsientoDemo = [
  { id: 1, nombre: "Económica", estado: true },
  { id: 2, nombre: "Ejecutiva", estado: true },
  { id: 3, nombre: "Primera Clase", estado: true },
];

if (!sessionStorage.getItem("clasesAsiento")) {
  sessionStorage.setItem("clasesAsiento", JSON.stringify(clasesAsientoDemo));
  console.log("Clases de Asiento inicializadas en sessionStorage ✅");
}


const tiposRutaDemo = [
  new TipoRuta(1, "Directa"),
  new TipoRuta(2, "Con escalas"),
  new TipoRuta(3, "Charter"),
];

if (!sessionStorage.getItem("tiposRuta")) {
  sessionStorage.setItem("tiposRuta", JSON.stringify(tiposRutaDemo));
}


const tiposVueloDemo = [
  new TipoVuelo(1, "Comercial"),
  new TipoVuelo(2, "Privado"),
  new TipoVuelo(3, "Carga"),
];

if (!sessionStorage.getItem("tiposVuelo")) {
  sessionStorage.setItem("tiposVuelo", JSON.stringify(tiposVueloDemo));
}

const capacidadesIniciales = [
  new Capacidad(1, 50, 1),   // 50 asientos
  new Capacidad(2, 100, 1),  // 100 asientos
  new Capacidad(3, 150, 1),  // 150 asientos
  new Capacidad(4, 200, 1),  // 200 asientos
  new Capacidad(5, 300, 1)   // 300 asientos
];

// Guardar en sessionStorage
sessionStorage.setItem("capacidades", JSON.stringify(capacidadesIniciales));

// Recuperar para verificar
const capacidadesGuardadas = JSON.parse(sessionStorage.getItem("capacidades"));
console.log(capacidadesGuardadas);