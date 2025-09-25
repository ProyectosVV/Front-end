import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import "../../Diseños/CardPais.css";
import { ModalActualizarRuta } from "../Modales/Modales_actualizar_rutas";

export function CardRuta({ id, origenId, destinoId, duracion, tipoRutaId, estado }) {
  const [openModalupdate, setOpenModalupdate] = useState(false);
  const menuRef = useRef(null);

  const [origenNombre, setOrigenNombre] = useState("");
  const [destinoNombre, setDestinoNombre] = useState("");
  const [nombreTipoRuta, setNombreTipoRuta] = useState("");

  // Obtener nombres desde sessionStorage al cargar
  useEffect(() => {
    const ciudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];
    const tiposRuta = JSON.parse(sessionStorage.getItem("tiposRuta")) || [];

    const origen = ciudades.find((c) => c.id === origenId);
    const destino = ciudades.find((c) => c.id === destinoId);
    const tipoRuta = tiposRuta.find((t) => t.id === tipoRutaId);

    setOrigenNombre(origen ? origen.nombreCiudad : "Desconocido");
    setDestinoNombre(destino ? destino.nombreCiudad : "Desconocido");
    setNombreTipoRuta(tipoRuta ? tipoRuta.nombreTipoRuta : "Desconocido");
  }, [origenId, destinoId, tipoRutaId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // cerrar menú si lo hubiera
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="card">
        {/* Header con datos principales */}
        <div className="card-header">
          <div className="ruta-info">
            <div className="subcodigo">
              <strong>{origenNombre}</strong> ➝ <strong>{destinoNombre}</strong>
            </div>
            <p className="duracion">Duración: {duracion}</p>
            <p className="tipo">Tipo Ruta: {nombreTipoRuta}</p>
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

        {/* Footer con acciones */}
        <div className="card-footer">
          <button className="btn editar" onClick={() => setOpenModalupdate(true)}>
            ✏️ Editar
          </button>
        </div>
      </div>

      {/* Modal actualizar */}
      {openModalupdate && (
        <ModalActualizarRuta
          id={id}
          origenInicial={origenId}
          destinoInicial={destinoId}
          duracionInicial={duracion}
          tipoRutaIdInicial={tipoRutaId}
          estadoInicial={estado}
          onClose={() => setOpenModalupdate(false)}
        />
      )}
    </>
  );
}
