import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../../Diseños/CardPais.css";
import countries from "i18n-iso-countries";
import esLocale from "i18n-iso-countries/langs/es.json";
import { CheckCircle, XCircle, Power } from "lucide-react";
import { ModalActualizarPais } from "../Modales/Modal_actualizar_pais"; 

countries.registerLocale(esLocale);

export function CardPais({ id, nombre, estado }) {
  const [open, setOpen] = useState(false);
  const [openModalupdate, setOpenModalupdate] = useState(false);
const navigate = useNavigate();

  const menuRef = useRef(null);
  const codigoISO = countries.getAlpha2Code(nombre, "es");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const agregarciudades = (id) => {
  navigate(`/admin/ciudades/${id}`);
};


  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="pais-info">
            {codigoISO && (
              <img
                src={`https://flagcdn.com/w40/${codigoISO.toLowerCase()}.png`}
                alt={`Bandera de ${nombre}`}
                className="bandera"
              />
            )}
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
          <button className="btn editar" onClick={() => setOpenModalupdate(true)}>
            ✏️ Editar
          </button>
        
<button className="btn agregar" onClick={() => agregarciudades(id)}>
  + Agregar ciudades
</button>


        </div>
      </div>


      {openModalupdate && (
        <ModalActualizarPais
          id={id}
          nombreInicial={nombre}
          estadoInicial={estado}
          onClose={() => setOpenModalupdate(false)}
        />
      )}
    </>
  );
}
