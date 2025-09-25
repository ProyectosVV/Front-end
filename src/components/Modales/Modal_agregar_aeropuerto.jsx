import "../../Diseños/Modal_agregar_pais.css";
import React, { useState, useEffect } from "react";

export function ModalAgregarAeropuerto({ onClose }) {
  const [nombre, setNombre] = useState("");
  const [ciudadId, setCiudadId] = useState("");
  const [tipoAeropuertoId, setTipoAeropuertoId] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [tiposAeropuerto, setTiposAeropuerto] = useState([]);

  useEffect(() => {
    const ciudadesData = JSON.parse(sessionStorage.getItem("ciudades")) || [];
    const tiposData = JSON.parse(sessionStorage.getItem("tiposAeropuerto")) || [];

    setCiudades(ciudadesData);
    setTiposAeropuerto(tiposData);
  }, []);

  const handleRegistroAeropuerto = (e) => {
    e.preventDefault();

    const aeropuertos = JSON.parse(sessionStorage.getItem("aeropuertos")) || [];

    if (aeropuertos.find((a) => a.nombreAeropuerto === nombre)) {
      alert("El aeropuerto ya está registrado");
      return;
    }

    const nuevo = {
      id: aeropuertos.length + 1,
      nombreAeropuerto: nombre,
      ciudadId: parseInt(ciudadId),
      tipoAeropuertoId: parseInt(tipoAeropuertoId),
      estado: 1,
    };

    aeropuertos.push(nuevo);
    sessionStorage.setItem("aeropuertos", JSON.stringify(aeropuertos));

    alert("Aeropuerto registrado correctamente");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Agregar Nuevo Aeropuerto</h2>
            <button className="close-btn" onClick={onClose}>✕</button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleRegistroAeropuerto}>
            <div className="form-group">
              <label>Nombre del Aeropuerto</label>
              <input
                type="text"
                placeholder="Ej: Aeropuerto Internacional de Lima"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Ciudad</label>
              <select
                value={ciudadId}
                onChange={(e) => setCiudadId(e.target.value)}
                required
              >
                <option value="">Seleccione una ciudad</option>
                {ciudades.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombreCiudad}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Tipo de Aeropuerto</label>
              <select
                value={tipoAeropuertoId}
                onChange={(e) => setTipoAeropuertoId(e.target.value)}
                required
              >
                <option value="">Seleccione un tipo</option>
                {tiposAeropuerto.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nombreTipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">
                Agregar Aeropuerto
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
