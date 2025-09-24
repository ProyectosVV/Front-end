import { MetricsCards } from "@/components/tarjetas-de-metricas"
import { RecentFlights } from "@/components/vuelos-recientes"
import { QuickActions } from "@/components/acciones-rapidas"
import "../../Diseños/Panel_control.css"


export function PanelDeControl() {
  return (
    <div >
      <div >
        <MetricsCards />
        </div>
<div className="container">
  <div className="box">
    <RecentFlights />
  </div>
  <div className="box">
    <QuickActions />
  </div>
</div>

    </div>
  )
}
