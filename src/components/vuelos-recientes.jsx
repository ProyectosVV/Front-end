import { Plane } from "lucide-react"
import "../Diseños/Vuelos_recientes.css"


const flights = [
  {
    id: "SC101",
    route: "MAD → BCN",
    time: "14:30",
    status: "En vuelo",
    statusClass: "badge-en-vuelo",
  },
  {
    id: "SC102",
    route: "BCN → MAD",
    time: "16:45",
    status: "A tiempo",
    statusClass: "badge-a-tiempo",
  },
  {
    id: "SC103",
    route: "MAD → VLC",
    time: "18:20",
    status: "Retrasado",
    statusClass: "badge-retrasado",
  },
]

export function RecentFlights() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Vuelos Recientes</h2>
      </div>
      <div className="card-content">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-item">
            <div className="flight-info">
              <div className="flight-icon">
                <Plane />
              </div>
              <div className="flight-text">
                <p className="flight-id">{flight.id}</p>
                <p className="flight-route">{flight.route}</p>
              </div>
            </div>
            <div className="flight-status">
              <span className={`badge ${flight.statusClass}`}>{flight.status}</span>
              <p className="flight-time">{flight.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
