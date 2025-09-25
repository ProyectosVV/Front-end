import "../../Diseños/Modal_agregar_pais.css";
import React, { useState, useEffect } from "react";

export function ModalAgregarRuta({ onClose }) {
  const [origenId, setOrigenId] = useState("");
  const [destinoId, setDestinoId] = useState("");
  const [duracion, setDuracion] = useState("");
  const [tipoRutaId, setTipoRutaId] = useState("");
  const [estado, setEstado] = useState(1);

  const [ciudades, setCiudades] = useState([]);
  const [tiposRuta, setTiposRuta] = useState([]);

  // Cargar ciudades y tipos de ruta del sessionStorage
  useEffect(() => {
    const dataCiudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];
    setCiudades(dataCiudades);

    const dataTipos = JSON.parse(sessionStorage.getItem("tiposRuta")) || [];

    setTiposRuta(dataTipos);
  }, []);

  // Registro de ruta
  const handleRegistroRuta = (e) => {
    e.preventDefault();

    const rutas = JSON.parse(sessionStorage.getItem("rutas")) || [];

    // Validar que no exista ya la misma ruta origen-destino
    if (
      rutas.find(
        (r) =>
          r.origenId === parseInt(origenId) &&
          r.destinoId === parseInt(destinoId)
      )
    ) {
      alert("La ruta ya está registrada");
      return;
    }

    const nuevaRuta = {
      id: rutas.length > 0 ? rutas[rutas.length - 1].id + 1 : 1,
      origenId: parseInt(origenId),
      destinoId: parseInt(destinoId),
      duracion,
      tipoRutaId: parseInt(tipoRutaId),
      estado,
    };

    rutas.push(nuevaRuta);
    sessionStorage.setItem("rutas", JSON.stringify(rutas));

    alert("✅ Ruta registrada con éxito");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Agregar Nueva Ruta</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleRegistroRuta}>
            {/* Origen */}
            <div className="form-group">
              <label>Origen</label>
              <select
                value={origenId}
                onChange={(e) => setOrigenId(e.target.value)}
                required
              >
                <option value="">-- Selecciona una ciudad --</option>
                {ciudades.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombreCiudad}
                  </option>
                ))}
              </select>
            </div>

            {/* Destino */}
            <div className="form-group">
              <label>Destino</label>
              <select
                value={destinoId}
                onChange={(e) => setDestinoId(e.target.value)}
                required
              >
                <option value="">-- Selecciona una ciudad --</option>
                {ciudades.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombreCiudad}
                  </option>
                ))}
              </select>
            </div>

            {/* Duración */}
            <div className="form-group">
              <label>Duración</label>
              <input
                type="text"
                placeholder="Ej: 2h 30m"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
                required
              />
            </div>

            {/* Tipo de Ruta */}
            <div className="form-group">
              <label>Tipo de Ruta</label>
              <select
                value={tipoRutaId}
                onChange={(e) => setTipoRutaId(e.target.value)}
                required
              >
                <option value="">-- Selecciona un tipo --</option>
                {tiposRuta.map((t) => (
  <option key={t.id} value={t.id}>
    {t.nombreTipoRuta}
  </option>
))}

              </select>
            </div>

            {/* Estado */}
            <div className="form-group">
              <label>Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(parseInt(e.target.value))}
                required
              >
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
              </select>
            </div>

            {/* Botones */}
            <div className="actions">
              <button type="submit" className="btn btn-primary">
                Agregar Ruta
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
