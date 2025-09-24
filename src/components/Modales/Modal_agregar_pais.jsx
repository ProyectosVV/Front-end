import React from "react";
import "../../Diseños/Modal_agregar_pais.css";

export function ModalAgregarPais({ onClose }) {
  return (
    <div className="modal-overlay">
  <div className="modal">
    <div className="modal-box">
      <div className="modal-header">
        <h2>Agregar Nuevo País</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="form-group">
        <label>Nombre del País</label>
        <input type="text" placeholder="Ej: España" />
      </div>

      <div className="form-group">
        <label>Estado</label>
        <select>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>

      <div className="actions">
        <button className="btn btn-primary">Agregar País</button>
        <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  </div>
</div>

  );
}
