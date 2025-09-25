import "../../Diseños/CardAeropuerto.css";
import React, { useState, useRef } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { ModalActualizarAeropuerto } from "../Modales/Modal_actualizar_aeropuerto";

export function CardAeropuerto({ id, nombreAeropuerto, estado, ciudadNombre, tipoAeropuertoNombre,ciudadid,tipoAeropuertoid }) {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <div className="aeropuerto-card">
        <div className="aeropuerto-card-header">
          <div className="aeropuerto-info">
            <div className="aeropuerto-nombre">{nombreAeropuerto}</div>
            <div className="aeropuerto-detalle">Ciudad: {ciudadNombre || "Desconocida"}</div>
            <div className="aeropuerto-detalle">Tipo: {tipoAeropuertoNombre || "Desconocido"}</div>
          </div>

          <div className="aeropuerto-estado-container" ref={menuRef}>
            <span className={`aeropuerto-estado ${estado === 1 ? "activo" : "inactivo"}`}>
              {estado === 1 ? (
                <>
                  <CheckCircle size={16} className="aeropuerto-icono" /> Activo
                </>
              ) : (
                <>
                  <XCircle size={16} className="aeropuerto-icono" /> Inactivo
                </>
              )}
            </span>
          </div>
        </div>

        <div className="aeropuerto-card-footer">
          <button className="aeropuerto-btn-editar" onClick={() => setOpenModalUpdate(true)}>
            ✏️ Editar
          </button>
        </div>
      </div>

      {openModalUpdate && (
        <ModalActualizarAeropuerto
          id={id}
          nombreInicial={nombreAeropuerto}
          estadoInicial={estado}
          ciudadIdInicial={ciudadid}
          tipoAeropuertoIdInicial={tipoAeropuertoid}
          onClose={() => setOpenModalUpdate(false)}
        />
      )}
    </>
  );
}
