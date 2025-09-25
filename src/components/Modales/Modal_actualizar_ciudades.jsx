import React, { useState } from "react";

export function ModalActualizarCiudad({ id, nombreInicial, estadoInicial, paisId, onClose }) {
  const [nombreCiudad, setNombreCiudad] = useState(nombreInicial || "");
  const [estado, setEstado] = useState(estadoInicial ?? 1);
  const [error, setError] = useState("");

  const handleActualizarCiudad = (e) => {
    e.preventDefault();

    let ciudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];
    const index = ciudades.findIndex((c) => c.id === id);

    if (index === -1) {
      alert("La ciudad no existe en los registros");
      return;
    }

    if (
      ciudades.find(
        (c) =>
          c.nombreCiudad.toLowerCase() === nombreCiudad.toLowerCase() &&
          c.id !== id &&
          c.paisId === paisId
      )
    ) {
      alert("Ya existe otra ciudad con ese nombre en este país");
      return;
    }

    ciudades[index] = {
      ...ciudades[index],
      nombreCiudad,
      estado,
    };

    sessionStorage.setItem("ciudades", JSON.stringify(ciudades));
    alert("El registro de ciudad se actualizó correctamente");
    onClose();
        window.location.reload();

  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Actualizar Ciudad</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <form onSubmit={handleActualizarCiudad}>
            <div className="form-group">
              <label>Nombre de la Ciudad</label>
              <input
                type="text"
                placeholder="Ej: Madrid"
                value={nombreCiudad}
                onChange={(e) => setNombreCiudad(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(Number(e.target.value))}
                required
              >
                <option value="">-- Selecciona --</option>
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
              </select>
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
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
