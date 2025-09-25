import "../../Diseños/Modal_agregar_pais.css";
import React, { useState, useEffect } from "react";

export function ModalActualizarRuta({
  id,
  origenInicial,
  destinoInicial,
  duracionInicial,
  tipoRutaIdInicial,
  estadoInicial,
  onClose,
  
}) {
  const [origenId, setOrigenId] = useState(origenInicial || "");
  const [destinoId, setDestinoId] = useState(destinoInicial || "");
  const [duracion, setDuracion] = useState(duracionInicial || "");
  const [tipoRutaId, setTipoRutaId] = useState(tipoRutaIdInicial || "");
  const [estado, setEstado] = useState(estadoInicial || 1);

  const [ciudades, setCiudades] = useState([]);
  const [tiposRuta, setTiposRuta] = useState([]);

  useEffect(() => {
    // Cargar ciudades y tipos de ruta desde sessionStorage
    const ciudadesData = JSON.parse(sessionStorage.getItem("ciudades")) || [];
    const tiposData = JSON.parse(sessionStorage.getItem("tiposRuta")) || [];

    setCiudades(ciudadesData);
    setTiposRuta(tiposData);
  }, []);

  const handleActualizarRuta = (e) => {
    e.preventDefault();

    let rutas = JSON.parse(sessionStorage.getItem("rutas")) || [];
    const index = rutas.findIndex((r) => r.id === id);

    if (index === -1) {
      alert("La ruta no existe en los registros");
      return;
    }

    rutas[index] = {
      ...rutas[index],
      origenId: parseInt(origenId),
      destinoId: parseInt(destinoId),
      duracion,
      tipoRutaId: parseInt(tipoRutaId),
      estado: parseInt(estado),
    };

    sessionStorage.setItem("rutas", JSON.stringify(rutas));

    alert("✅ La ruta se actualizó correctamente");
    onClose();
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <h2>Actualizar Ruta</h2>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          <form onSubmit={handleActualizarRuta}>
            {/* Origen */}
            <div className="form-group">
              <label>Origen</label>
              <select
                value={origenId}
                onChange={(e) => setOrigenId(e.target.value)}
                required
              >
                <option value="">-- Selecciona ciudad --</option>
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
                <option value="">-- Selecciona ciudad --</option>
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
                placeholder="Ej: 2h 30min"
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
                <option value="">-- Selecciona tipo --</option>
                {tiposRuta.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.nombreTipoRuta} {/* Aquí mostramos el nombre real */}
                  </option>
                ))}
              </select>
            </div>

            {/* Estado */}
            <div className="form-group">
              <label>Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              >
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
              </select>
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
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
