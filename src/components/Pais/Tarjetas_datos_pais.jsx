import { Users, DollarSign, Calendar } from "lucide-react"
import "../../Diseños/Tarjetas_de_metricas.css"
import { Globe } from "lucide-react";

const metrics = [
  {
    title: "Total paises",
    value: "24",
    icon: Globe,
    color: "bg-primary",
  },
  {
    title: "Paises activos",
    value: "156",
    icon: Users,
    color: "bg-green",
  },
  {
    title: "Paises inactivos",
    value: "$45.2K",
    icon: DollarSign,
    color: "bg-blue",
  }
]

export function Tarjetas_datos_pais() {
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
  )
}
