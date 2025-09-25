import { Users, Plane, Slash } from "lucide-react"; // Slash lo usamos para inactivos
import React, { useState, useEffect } from "react";
import "../../Diseños/Tarjetas_de_metricas.css";

export function Tarjetas_datos_aeropuerto() {
  const [metrics, setMetrics] = useState([
    { title: "Total aeropuertos", value: 0, icon: Plane, color: "bg-primary" },
    { title: "Aeropuertos activos", value: 0, icon: Users, color: "bg-green" },
    { title: "Aeropuertos inactivos", value: 0, icon: Slash, color: "bg-blue" },
  ]);

  useEffect(() => {
    const aeropuertos = JSON.parse(sessionStorage.getItem("aeropuertos")) || [];

    const total = aeropuertos.length;
    const activos = aeropuertos.filter(a => a.estado === 1).length;
    const inactivos = aeropuertos.filter(a => a.estado !== 1).length;

    setMetrics([
      { title: "Total aeropuertos", value: total, icon: Plane, color: "bg-primary" },
      { title: "Aeropuertos activos", value: activos, icon: Users, color: "bg-green" },
      { title: "Aeropuertos inactivos", value: inactivos, icon: Slash, color: "bg-blue" },
    ]);
  }, []);

  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="metric-content">
            <div className={`metric-icon ${metric.color}`}>
              <metric.icon size={22} />
            </div>
            <div>
              <p className="metric-title">{metric.title}</p>
              <p className="metric-value">{metric.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
