import "../../Diseños/CardPais.css"; 
import React, { useState, useRef, useEffect } from "react";


export function CardAeropuerto({ id, nombreAeropuerto, estado, ciudadNombre, tipoAeropuertoNombre }) {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="ciudad-info">
            <div className="subcodigo">{nombreAeropuerto}</div>
            <div className="subdetalle">Ciudad: {ciudadNombre || "Desconocida"}</div>
            <div className="subdetalle">Tipo: {tipoAeropuertoNombre || "Desconocido"}</div>
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
          <button className="btn editar" onClick={() => setOpenModalUpdate(true)}>
            ✏️ Editar
          </button>
        </div>
      </div>

      {openModalUpdate && (
        <ModalActualizarAeropuerto
          id={id}
          nombreInicial={nombreAeropuerto}
          estadoInicial={estado}
          ciudadNombre={ciudadNombre}
          tipoAeropuertoNombre={tipoAeropuertoNombre}
          onClose={() => setOpenModalUpdate(false)}
        />
      )}
    </>
  );
}
