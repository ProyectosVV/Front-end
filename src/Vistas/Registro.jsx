import { useState } from "react";
import "../Diseños/Login.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState(""); // solo para regsitro
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  // Registro
  const handleRegistro = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

    if (usuarios.find((u) => u.correo === correo)) {
      setError("El correo ya está registrado");
      return;
    }

    
    const nuevo = {
      id: usuarios.length + 1,
      nombre,
      correo,
      contrasena,
      telefono,
      rol: 2,
    };

    usuarios.push(nuevo);
    sessionStorage.setItem("usuarios", JSON.stringify(usuarios));

     alert("Usuario registrado, ahora puedes iniciar sesión");
    window.location.href = "/login"; 
  };

  return (
    <section className="login-container">
      <h2 className="login-title">Registro</h2>
      <form onSubmit={handleRegistro} className="login-form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="login-input"
          required
        />
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
         <input
          type="text"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Registrarse
        </button>
      </form>

      {error && <p className="login-error">{error}</p>}

      <div className="toggle">
        <p>
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="link">
            Inicia sesión
          </a>
        </p>
      </div>
    </section>
  );
}

export default Login;
