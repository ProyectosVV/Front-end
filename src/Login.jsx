import { useState } from "react";
import "./Login.css";

function Login({ setUser }) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setUser({ correo, contrasena });

    // obtener usuarios guardados en sessionStorage
    const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

    // buscar si existe el usuario con correo y contraseña
    const user = usuarios.find(
      (u) => u.correo === correo && u.contrasena === contrasena
    );

    if (user) {
      // guardar el usuario logueado en sessionStorage
      sessionStorage.setItem("sesionActiva", JSON.stringify(user));
      alert("Bienvenido " + user.nombre);

      // redirigir según rol
      if (user.rol === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/reservas";
      }
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <section className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
      {error && <p className="login-error">{error}</p>}
    </section>
  );
}

export default Login;
