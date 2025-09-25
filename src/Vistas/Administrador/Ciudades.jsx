import { useState, useEffect } from "react";

import "../../Diseños/Paises.css"; // Asegúrate de tener este archivo


export function Ciudades() {
  const [openModal, setOpenModal] = useState(false);
 

  return (
    <div className="ciudades-container">
      
          <p className="subtitle">
            Gestiona las ciudades disponibles para rutas de vuelo
          </p>
        
    </div>
  );
}
