import { useState,useEffect } from "react";
import { ModalAgregarPais } from "../../components/Modales/Modal_agregar_pais"; 
import "../../Diseños/Paises.css"
import { Tarjetas_datos_pais } from "../../components/Pais/Tarjetas_datos_pais";
import { CardPais } from "../../components/Pais/CardPais ";


export function Paises() {
  const [openModal, setOpenModal] = useState(false);
  const [paises, setPaises] = useState([]);

   useEffect(() => {
    const data = sessionStorage.getItem("paises");
    
    

    if (data) {
      setPaises(JSON.parse(data));
    }
  }, []);

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

 <div >
        <Tarjetas_datos_pais />
        </div>

       <div className="cards-container">
  {paises.length > 0 ? (
    paises.map((pais, index) => (
      <CardPais
        key={index}
        id={pais.id}
        nombre={pais.nombre}
        estado={pais.estado}
      />
    ))
  ) : (
    <p className="sin-registros">No hay países registrados</p>
  )}
</div>

      {/* Modal */}
      {openModal && <ModalAgregarPais onClose={() => setOpenModal(false)} />}
    </div>
  );
}
