import { useState, useEffect } from "react";
import { ModalAgregarRuta } from "../../components/Modales/Modales_agregar_rutas"; 
import "../../Diseños/Paises.css";
import { Tarjetas_datos_ruta } from "../../components/Rutas/Tarjetas_datos_rutas";
import { CardRuta } from "../../components/Rutas/CardRutas";

export function Rutas() {
  const [openModal, setOpenModal] = useState(false);
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("rutas");

    if (data) {
      setRutas(JSON.parse(data));
    }
  }, []);

  return (
    <div className="paises-container">
      {/* Header */}
      <div className="headerPais">
        <div>
          <h1 className="title">Rutas</h1>
          <p className="subtitle">Gestiona las rutas disponibles</p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="btn-agregar"
        >
          + Agregar Ruta
        </button>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar rutas..."
          className="input-buscar"
        />
        <div className="btn-group">
          <button className="btn btn-activo">Todos</button>
          <button className="btn">Activos</button>
          <button className="btn">Inactivos</button>
        </div>
      </div>

      {/* Tarjetas datos generales */}
      <div>
        <Tarjetas_datos_ruta />
      </div>

      {/* Cards */}
      <div className="cards-container">
        {rutas.length > 0 ? (
          rutas.map((ruta, index) => (
            <CardRuta
              key={index}
              id={ruta.id}
              origenId={ruta.origenId}
              destinoId={ruta.destinoId}
              duracion={ruta.duracion}
              tipoRutaId={ruta.tipoRutaId}
              estado={ruta.estado}
            />
          ))
        ) : (
          <p className="sin-registros">No hay rutas registradas</p>
        )}
      </div>

      {/* Modal */}
      {openModal && <ModalAgregarRuta onClose={() => setOpenModal(false)} />}
    </div>
  );
}
