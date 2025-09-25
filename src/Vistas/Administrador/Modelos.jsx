import { useState, useEffect } from "react";
import { ModalAgregarModelo } from "../../components/Modales/Modal_agregar_modelo"; 
import "../../Diseños/Paises.css";
import { Tarjetas_datos_modelo } from "../../components/Modelos/Tarjetas_datos_modelo";
import { CardModelo } from "../../components/Modelos/CardModelo";

export function Modelos() {
  const [openModal, setOpenModal] = useState(false);
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("modelosAvion");
    if (data) {
      setModelos(JSON.parse(data));
    }
  }, []);

  return (
    <div className="paises-container">
      <div className="headerPais">
        <div>
          <h1 className="title">Modelos</h1>
          <p className="subtitle">
            Gestiona los modelos de avión disponibles
          </p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="btn-agregar"
        >
          + Agregar Modelo
        </button>
      </div>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar modelos..."
          className="input-buscar"
        />
        <div className="btn-group">
          <button className="btn btn-activo">Todos</button>
          <button className="btn">Activos</button>
          <button className="btn">Inactivos</button>
        </div>
      </div>

      <div>
        <Tarjetas_datos_modelo />
      </div>

      <div className="cards-container">
        {modelos.length > 0 ? (
          modelos.map((modelo, index) => (
            <CardModelo
              key={index}
              id={modelo.id}
              nombre={modelo.nombre}
              capacidadId={modelo.capacidadId}
              estado={modelo.estado}
            />
          ))
        ) : (
          <p className="sin-registros">No hay modelos registrados</p>
        )}
      </div>

      {/* Modal */}
      {openModal && <ModalAgregarModelo onClose={() => setOpenModal(false)} />}
    </div>
  );
}
