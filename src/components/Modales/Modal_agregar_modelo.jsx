import "../../Diseños/Modal_agregar_pais.css";
import React, { useState, useEffect } from "react";

export function ModalAgregarModelo({ onClose }) {
  const [nombre, setNombre] = useState("");
  const [capacidadId, setCapacidadId] = useState("");
  const [estado, setEstado] = useState(1);

  const [capacidades, setCapacidades] = useState([]);

  // Cargar capacidades desde sessionStorage
  useEffect(() => {
    const dataCapacidades = JSON.parse(sessionStorage.getItem("capacidades")) || [];
    setCapacidades(dataCapacidades);
  }, []);

  // Registro de modelo
  const handleRegistroModelo = (e) => {
    e.preventDefault();

    const modelos = JSON.parse(sessionStorage.getItem("modelosAvion")) || [];

    // Validar que no exista ya un modelo con el mismo nombre
    if (modelos.find((m) => m.nombre.toLowerCase() === nombre.toLowerCase())) {
      alert("El modelo ya está registrado");
      return;
    }

    const nuevoModelo = {
      id: modelos.length > 0 ? modelos[modelos.length - 1].id + 1 : 1,
      nombre,
      capacidadId: parseInt(capacidadId),
      estado,
    };

    modelos.push(nuevoModelo);
    sessionStorage.setItem("modelosAvion", JSON.stringify(modelos));

    alert("✅ Modelo registrado con éxito");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Agregar Nuevo Modelo</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleRegistroModelo}>
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
                Agregar Modelo
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
