import { useState } from "react";
import "../Diseños/Login.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);


  const handleLogin = (e) => {
    e.preventDefault();

    setUser({ correo, contrasena });

    const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

    const user = usuarios.find(
      (u) => u.correo === correo && u.contrasena === contrasena
    );

    if (user) {
      sessionStorage.setItem("sesionActiva", JSON.stringify(user));

      



      alert("Bienvenido " + user.nombre);

      // redirigir según rol
      if (user.rol === 1) {
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
      <h2 className="login-title">Iniciar Sesión</h2>
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

      <div className="toggle">
        <p>
          ¿No tienes cuenta?{" "}
          <a href="/registro" className="link">
            Regístrate
          </a>
        </p>
      </div>
    </section>
    
  );
}

export default Login;
