import "../../Diseños/Modal_agregar_pais.css";
import React, { useState, useEffect } from "react";

export function ModalActualizarModelo({
  id,
  nombreInicial,
  capacidadIdInicial,
  estadoInicial,
  onClose,
}) {
  const [nombre, setNombre] = useState(nombreInicial || "");
  const [capacidadId, setCapacidadId] = useState(capacidadIdInicial || "");
  const [estado, setEstado] = useState(estadoInicial ?? 1);

  const [capacidades, setCapacidades] = useState([]);

  // Cargar capacidades desde sessionStorage
  useEffect(() => {
    const dataCapacidades = JSON.parse(sessionStorage.getItem("capacidades")) || [];
    setCapacidades(dataCapacidades);
  }, []);

  // Actualizar modelo
  const handleActualizarModelo = (e) => {
    e.preventDefault();

    let modelos = JSON.parse(sessionStorage.getItem("modelosAvion")) || [];
    const index = modelos.findIndex((m) => m.id === id);

    if (index === -1) {
      alert("El modelo no existe en los registros");
      return;
    }

    // Validar que no exista otro modelo con el mismo nombre
    if (
      modelos.some(
        (m, i) =>
          i !== index && m.nombre.toLowerCase() === nombre.toLowerCase()
      )
    ) {
      alert("Ya existe otro modelo con ese nombre");
      return;
    }

    modelos[index] = {
      ...modelos[index],
      nombre,
      capacidadId: parseInt(capacidadId),
      estado: parseInt(estado),
    };

    sessionStorage.setItem("modelosAvion", JSON.stringify(modelos));

    alert("✅ Modelo actualizado correctamente");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Actualizar Modelo</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <form onSubmit={handleActualizarModelo}>
            {/* Nombre */}
            <div className="form-group">
              <label>Nombre del Modelo</label>
              <input
                type="text"
                placeholder="Ej: Boeing 747"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            {/* Capacidad */}
            <div className="form-group">
              <label>Capacidad</label>
              <select
                value={capacidadId}
                onChange={(e) => setCapacidadId(e.target.value)}
                required
              >
                <option value="">-- Selecciona una capacidad --</option>
                {capacidades.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.cantidad} asientos
                  </option>
                ))}
              </select>
            </div>

            {/* Estado */}
            <div className="form-group">
              <label>Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(parseInt(e.target.value))}
                required
              >
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
              </select>
            </div>

            {/* Botones */}
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
