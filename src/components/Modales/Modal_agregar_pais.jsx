import "../../Diseños/Modal_agregar_pais.css";
import React, { useState } from "react";

export function ModalAgregarPais({ onClose }) {


    
    
    const [nombre, setNombre] = useState(""); 
    const [error, setError] = useState("");
    
    
   //registro de pais 
  const handleRegistroPais = (e) => {
    e.preventDefault();

    const paises = JSON.parse(sessionStorage.getItem("paises")) || [];

    if (paises.find((u) => u.nombre === nombre)) {
       alert("El pais ya está registrado");
      return;
    }

    
    const nuevo = {
      id: paises.length + 1,
      nombre,
      estado: 1,
      
    };

    paises.push(nuevo);
    sessionStorage.setItem("paises", JSON.stringify(paises));

     alert("Ya se creo el registro de pais");
     onClose();
     window.location.reload();

  };
  
  return (
    <div className="modal-overlay">
  <div className="modal">
    <div className="modal-box">
      <div className="modal-header">
        <h2>Agregar Nuevo País</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {/* Formulario */}
      <form onSubmit={handleRegistroPais}>
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

        <div className="actions">
          <button type="submit" className="btn btn-primary">
            Agregar País
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
