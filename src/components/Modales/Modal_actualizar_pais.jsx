import "../../Diseños/Modal_agregar_pais.css";
import React, { useState, useEffect } from "react";

export function ModalActualizarPais({ id, nombreInicial, estadoInicial, onClose }) {
  const [nombre, setNombre] = useState(nombreInicial || "");
  const [estado, setEstado] = useState(estadoInicial || "");
  const [error, setError] = useState("");

  useEffect(() => {
    
    setNombre(nombreInicial || "");
    setEstado(estadoInicial || "");
  }, [nombreInicial, estadoInicial]);

  const handleActualizarPais = (e) => {
    e.preventDefault();

    let paises = JSON.parse(sessionStorage.getItem("paises")) || [];

    const index = paises.findIndex((u) => u.id === id);

    if (index === -1) {
      alert("El país no existe en los registros");
      return;
    }

    if (paises.find((u) => u.nombre === nombre && u.id !== id)) {
      alert("Ya existe otro país con ese nombre");
      return;
    }

    paises[index] = {
      ...paises[index],
      nombre,
      estado,
    };

    sessionStorage.setItem("paises", JSON.stringify(paises));

    alert("El registro de país se actualizó correctamente");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Actualizar País</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <form onSubmit={handleActualizarPais}>
            <div className="form-group">
              <label>Nombre del País</label>
              <input
                type="text"
                placeholder="Ej: España"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
      <label>Estado</label>
      <select
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        required
      >
        <option value="">-- Selecciona --</option>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
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
