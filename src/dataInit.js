// src/dataInit.js
import { Usuario } from "./models";

// Crear algunos usuarios de prueba
const usuariosDemo = [
  new Usuario(1, "Admin", "admin@avianca.com", "1234", "admin"),
  new Usuario(2, "Juan Pérez", "juan@gmail.com", "abcd", "pasajero"),
  new Usuario(3, "Maria Lopez", "maria@gmail.com", "abcd", "pasajero"),
];

// Guardarlos en sessionStorage (si no existen)
export function initUsuarios() {
  const usuariosExistentes = JSON.parse(sessionStorage.getItem("usuarios"));
  if (!usuariosExistentes) {
    sessionStorage.setItem("usuarios", JSON.stringify(usuariosDemo));
    console.log("Usuarios inicializados en sessionStorage ✅");
  }
}
