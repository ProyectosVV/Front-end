import { useState, useEffect } from "react";
import { ModalAgregarCiudades } from "../../components/Modales/Modal_agregar_ciudades"; 
import "../../Diseños/Ciudades.css";
import { Tarjetas_datos_ciudad } from "../../components/Ciudad/Tarejtas_datos_Ciudades";
import { CardCiudad } from "../../components/Ciudad/CardCiudad";

export function Ciudades() {
  const [openModal, setOpenModal] = useState(false);
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("ciudades");
    if (data) {
      setCiudades(JSON.parse(data));
    }
  }, []);

  return (
    <div className="ciudades-container-unique">
      <div className="ciudades-header">
        <div>
          <h1 className="ciudades-title">Ciudades</h1>
          <p className="ciudades-subtitle">
            Gestiona las ciudades disponibles para rutas de vuelo
          </p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="ciudades-btn-agregar"
        >
          + Agregar Ciudad
        </button>
      </div>

      <div className="ciudades-filtros">
        <input
          type="text"
          placeholder="Buscar ciudades..."
          className="ciudades-input-buscar"
        />
        <div className="ciudades-btn-group">
          <button className="ciudades-btn ciudades-btn-activo">Todos</button>
          <button className="ciudades-btn">Activos</button>
          <button className="ciudades-btn">Inactivos</button>
        </div>
      </div>

      <div>
        <Tarjetas_datos_ciudad />
      </div>

      <div className="ciudades-cards-container">
        {ciudades.length > 0 ? (
          ciudades.map((ciudad, index) => (
            <CardCiudad
              key={index}
              id={ciudad.id}
              nombreCiudad={ciudad.nombreCiudad}
              paisId={ciudad.paisId}
              estado={ciudad.estado}
            />
          ))
        ) : (
          <p className="ciudades-sin-registros">No hay ciudades registradas</p>
        )}
      </div>

      {/* Modal */}
      {openModal && <ModalAgregarCiudades onClose={() => setOpenModal(false)} />}
    </div>
  );
}
