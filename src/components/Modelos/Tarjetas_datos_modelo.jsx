import { Users, Box, CheckCircle } from "lucide-react";
import "../../Diseños/Tarjetas_de_metricas.css";
import { Plane } from "lucide-react";

const metrics = [
  {
    title: "Total modelos",
    value: "10",
    icon: Plane,
    color: "bg-primary",
  },
  {
    title: "Modelos activos",
    value: "7",
    icon: CheckCircle,
    color: "bg-green",
  },
  {
    title: "Modelos inactivos",
    value: "3",
    icon: Box,
    color: "bg-blue",
  }
];

export function Tarjetas_datos_modelo() {
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
