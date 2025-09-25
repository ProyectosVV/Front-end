import { useState, useEffect } from "react";
import { ModalAgregarAeropuerto } from "../../components/Modales/Modal_agregar_aeropuerto";
import "../../Diseños/Paises.css";
import { Tarjetas_datos_aeropuerto } from "../../components/Aeropuertos/Tarjetas_datos_Aeropuertos";
import { CardAeropuerto } from "../../components/Aeropuertos/CardAeropuerto";

export function Aeropuertos() {
  const [openModal, setOpenModal] = useState(false);
  const [aeropuertos, setAeropuertos] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("aeropuertos");
    if (data) {
      setAeropuertos(JSON.parse(data));
    }
  }, []);

  // Obtener ciudades y tipos de aeropuerto desde sessionStorage
  const ciudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];
  const tiposAeropuerto = JSON.parse(sessionStorage.getItem("tiposAeropuerto")) || [];

  return (
    <div className="paises-container">
      <div className="headerPais">
        <div>
          <h1 className="title">Aeropuertos</h1>
          <p className="subtitle">
            Gestiona los aeropuertos disponibles para rutas de vuelo
          </p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="btn-agregar"
        >
          + Agregar Aeropuerto
        </button>
      </div>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar aeropuertos..."
          className="input-buscar"
        />
        <div className="btn-group">
          <button className="btn btn-activo">Todos</button>
          <button className="btn">Activos</button>
          <button className="btn">Inactivos</button>
        </div>
      </div>

      <div>
        <Tarjetas_datos_aeropuerto />
      </div>

      <div className="cards-container">
        {aeropuertos.length > 0 ? (
          aeropuertos.map((aeropuerto, index) => {
            const ciudad = ciudades.find((c) => c.id === aeropuerto.ciudadId);
            const tipo = tiposAeropuerto.find((t) => t.id === aeropuerto.tipoAeropuertoId);

            return (
              <CardAeropuerto
                key={index}
                id={aeropuerto.id}
                nombreAeropuerto={aeropuerto.nombreAeropuerto}
                ciudadNombre={ciudad ? ciudad.nombreCiudad : "Sin ciudad"}
                tipoAeropuertoNombre={tipo ? tipo.nombreTipo : "Sin tipo"}
                ciudadid={aeropuerto.ciudadId}
                tipoAeropuertoid={aeropuerto.tipoAeropuertoId}
                estado={aeropuerto.estado}
              />
            );
          })
        ) : (
          <p className="sin-registros">No hay aeropuertos registrados</p>
        )}
      </div>

      {/* Modal */}
      {openModal && <ModalAgregarAeropuerto onClose={() => setOpenModal(false)} />}
    </div>
  );
}
