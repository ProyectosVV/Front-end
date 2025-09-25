import React, { useState } from "react";

export function ModalActualizarAeropuerto({ id, nombreInicial, estadoInicial, ciudadId, onClose }) {
  const [nombreAeropuerto, setNombreAeropuerto] = useState(nombreInicial || "");
  const [estado, setEstado] = useState(estadoInicial ?? 1);

  const handleActualizarAeropuerto = (e) => {
    e.preventDefault();

    let aeropuertos = JSON.parse(sessionStorage.getItem("aeropuertos")) || [];
    const index = aeropuertos.findIndex((a) => a.id === id);

    if (index === -1) {
      alert("El aeropuerto no existe en los registros");
      return;
    }

    if (
      aeropuertos.find(
        (a) =>
          a.nombreAeropuerto.toLowerCase() === nombreAeropuerto.toLowerCase() &&
          a.id !== id &&
          a.ciudadId === ciudadId
      )
    ) {
      alert("Ya existe otro aeropuerto con ese nombre en esta ciudad");
      return;
    }

    aeropuertos[index] = {
      ...aeropuertos[index],
      nombreAeropuerto,
      estado,
    };

    sessionStorage.setItem("aeropuertos", JSON.stringify(aeropuertos));
    alert("El registro de aeropuerto se actualizó correctamente");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Actualizar Aeropuerto</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <form onSubmit={handleActualizarAeropuerto}>
            <div className="form-group">
              <label>Nombre del Aeropuerto</label>
              <input
                type="text"
                placeholder="Ej: Aeropuerto Internacional"
                value={nombreAeropuerto}
                onChange={(e) => setNombreAeropuerto(e.target.value)}
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
