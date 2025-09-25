import "../../Diseños/Modal_agregar_pais.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export function ModalAgregarCiudades({ onClose }) {
  const { id_paises } = useParams(); 
  const paisId = parseInt(id_paises, 10); 

  const [nombreCiudad, setNombreCiudad] = useState("");
  const [error, setError] = useState("");

  const handleRegistroCiudad = (e) => {
    e.preventDefault();

    const ciudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];

    // Validar si la ciudad ya existe en este país
    if (
      ciudades.find(
        (c) =>
          c.nombreCiudad.toLowerCase() === nombreCiudad.toLowerCase() &&
          c.paisId === paisId
      )
    ) {
      setError("La ciudad ya está registrada para este país");
      return;
    }

    // Crear nuevo objeto ciudad
    const nuevo = {
      id: ciudades.length + 1,
      nombreCiudad,
      estado: 1,
      paisId,
    };

    // Guardar en sessionStorage
    ciudades.push(nuevo);
    sessionStorage.setItem("ciudades", JSON.stringify(ciudades));

    alert(`Se creó la ciudad: ${nuevo.nombreCiudad}`);
    onClose();
         window.location.reload();

  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Agregar Nueva Ciudad</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <form onSubmit={handleRegistroCiudad}>
            <div className="form-group">
              <label>Nombre de la Ciudad</label>
              <input
                type="text"
                placeholder="Ej: Madrid"
                value={nombreCiudad}
                onChange={(e) => {
                  setNombreCiudad(e.target.value);
                  setError("");
                }}
                required
              />
              {error && <p className="error">{error}</p>}
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">
                Agregar Ciudad
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
