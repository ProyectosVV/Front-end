import { Users, DollarSign, Calendar } from "lucide-react"
import "../Diseños/Tarjetas_de_metricas.css"

const metrics = [
  {
    title: "Vuelos Hoy",
    value: "24",
    icon: Calendar,
    color: "bg-primary",
  },
  {
    title: "Reservas",
    value: "156",
    icon: Users,
    color: "bg-green",
  },
  {
    title: "Ingresos",
    value: "$45.2K",
    icon: DollarSign,
    color: "bg-blue",
  },
  {
    title: "Pasajeros",
    value: "1,234",
    icon: Users,
    color: "bg-yellow",
  },
]

export function MetricsCards() {
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
