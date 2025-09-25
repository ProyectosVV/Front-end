import { Users, Globe, Slash } from "lucide-react"; // Slash lo usamos para inactivos
import React, { useState, useEffect } from "react";
import "../../Diseños/Tarjetas_de_metricas.css";


export function Tarjetas_datos_ciudad() {
  const [metrics, setMetrics] = useState([
    { title: "Total ciudades", value: 0, icon: Globe, color: "bg-primary" },
    { title: "Ciudades activas", value: 0, icon: Users, color: "bg-green" },
    { title: "Ciudades inactivas", value: 0, icon: Slash, color: "bg-blue" },
  ]);

  useEffect(() => {
    const ciudades = JSON.parse(sessionStorage.getItem("ciudades")) || [];

    const total = ciudades.length;
    const activas = ciudades.filter(c => c.estado === 1).length;
    const inactivas = ciudades.filter(c => c.estado !== 1).length;

    setMetrics([
      { title: "Total ciudades", value: total, icon: Globe, color: "bg-primary" },
      { title: "Ciudades activas", value: activas, icon: Users, color: "bg-green" },
      { title: "Ciudades inactivas", value: inactivas, icon: Slash, color: "bg-blue" },
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
