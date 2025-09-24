import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane } from "lucide-react"

const flights = [
  {
    id: "SC101",
    route: "MAD → BCN",
    time: "14:30",
    status: "En vuelo",
    statusColor: "bg-primary text-primary-foreground",
  },
  {
    id: "SC102",
    route: "BCN → MAD",
    time: "16:45",
    status: "A tiempo",
    statusColor: "bg-success text-success-foreground",
  },
  {
    id: "SC103",
    route: "MAD → VLC",
    time: "18:20",
    status: "Retrasado",
    statusColor: "bg-destructive text-destructive-foreground",
  },
]

export function RecentFlights() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Vuelos Recientes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {flights.map((flight) => (
          <div key={flight.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plane className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{flight.id}</p>
                <p className="text-sm text-muted-foreground">{flight.route}</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className={`${flight.statusColor} mb-1`}>{flight.status}</Badge>
              <p className="text-sm text-muted-foreground">{flight.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
