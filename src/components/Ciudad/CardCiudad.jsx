import React, { useState, useRef, useEffect } from "react";
import { ModalActualizarCiudad } from "../Modales/Modal_actualizar_ciudades"; 
import { CheckCircle, XCircle } from "lucide-react";
import "../../Diseños/CardPais.css"; 

export function CardCiudad({ id, nombreCiudad, paisId, estado }) {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const menuRef = useRef(null);

 

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="ciudad-info">
            <div className="subcodigo">{nombreCiudad}</div>
          </div>

          <div className="acciones" ref={menuRef}>
            <span className={`estado ${estado === 1 ? "activo" : "inactivo"}`}>
              {estado === 1 ? (
                <>
                  <CheckCircle size={16} className="icono" /> Activa
                </>
              ) : (
                <>
                  <XCircle size={16} className="icono" /> Inactiva
                </>
              )}
            </span>
          </div>
        </div>

        <div className="card-footer">
          <button className="btn editar" onClick={() => setOpenModalUpdate(true)}>
            ✏️ Editar
          </button>
        </div>
      </div>

      {openModalUpdate && (
        <ModalActualizarCiudad
          id={id}
          nombreInicial={nombreCiudad}
          estadoInicial={estado}
          paisId={paisId}
          onClose={() => setOpenModalUpdate(false)}
        />
      )}
    </>
  );
}
