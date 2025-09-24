import { useState } from "react";
import { ModalAgregarPais } from "../../components/Modales/Modal_agregar_pais"; 
import "../../Diseños/Paises.css"
export function Paises() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="paises-container">
      <div className="headerPais">
        <div>
          <h1 className="title">Países</h1>
          <p className="subtitle">
            Gestiona los países disponibles para rutas de vuelo
          </p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="btn-agregar"
        >
          + Agregar País
        </button>
      </div>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar países..."
          className="input-buscar"
        />
        <div className="btn-group">
          <button className="btn btn-activo">Todos</button>
          <button className="btn">Activos</button>
          <button className="btn">Inactivos</button>
        </div>
      </div>

      {/* Modal */}
      {openModal && <ModalAgregarPais onClose={() => setOpenModal(false)} />}
    </div>
  );
}
