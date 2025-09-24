// src/dataInit.js
import { Usuario } from "./Modelos/models";
import { Rol } from "./Modelos/models";

const rolAdmin = new Rol(1, "admin");
const rolPasajero = new Rol(2, "pasajero");

const rolesDemo = [rolAdmin, rolPasajero];

const usuariosDemo = [
  new Usuario(1, "Admin", "admin@avianca.com", "1234", 1),
  new Usuario(2, "Juan Pérez", "juan@gmail.com", "abcd", 2),
  new Usuario(3, "Maria Lopez", "maria@gmail.com", "abcd", 2),
];

export function initUsuarios() {
  // Inicializar datos
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
