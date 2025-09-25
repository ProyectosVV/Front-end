import React, { useState, useRef, useEffect } from "react";
import "../../Diseños/CardPais.css"; // Reutilizamos el mismo CSS
import { CheckCircle, XCircle } from "lucide-react";
import { ModalActualizarModelo } from "../Modales/Modal_actualizar_modelo.jsx"; 

export function CardModelo({ id, nombre, capacidadId, estado }) {
  const [open, setOpen] = useState(false);
  const [openModalupdate, setOpenModalupdate] = useState(false);
  const menuRef = useRef(null);

  // Obtener las capacidades desde sessionStorage
  const capacidades = JSON.parse(sessionStorage.getItem("capacidades")) || [];
  const capacidad = capacidades.find(c => c.id === capacidadId);
  const cantidad = capacidad ? capacidad.cantidad : "N/A";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="pais-info">
            <div className="subcodigo">{nombre}</div>
          </div>

          <div className="acciones" ref={menuRef}>
            <span className={`estado ${estado === 1 ? "activo" : "inactivo"}`}>
              {estado === 1 ? (
                <>
                  <CheckCircle size={16} className="icono" /> Activo
                </>
              ) : (
                <>
                  <XCircle size={16} className="icono" /> Inactivo
                </>
              )}
            </span>
          </div>
        </div>

        <div className="card-footer">
          <p className="cantidad">Capacidad: {cantidad} asientos</p>
          <button
            className="btn editar"
            onClick={() => setOpenModalupdate(true)}
          >
            ✏️ Editar
          </button>
        </div>
      </div>

      {openModalupdate && (
        <ModalActualizarModelo
          id={id}
          nombreInicial={nombre}
          capacidadIdInicial={capacidadId}
          estadoInicial={estado}
          onClose={() => setOpenModalupdate(false)}
        />
      )}
    </>
  );
}
