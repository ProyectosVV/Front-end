import { MapPin, Navigation, Timer } from "lucide-react";
import "../../Diseños/Tarjetas_de_metricas.css";

const metrics = [
  {
    title: "Total rutas",
    value: "50",
    icon: MapPin,
    color: "bg-primary",
  },
  {
    title: "Rutas activas",
    value: "38",
    icon: Navigation,
    color: "bg-green",
  },
  {
    title: "Rutas inactivas",
    value: "12",
    icon: Timer,
    color: "bg-blue",
  }
];

export function Tarjetas_datos_ruta() {
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
