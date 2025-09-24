import { Header } from "@/components/encabezado"
import { MetricsCards } from "@/components/tarjetas-de-metricas"
import { RecentFlights } from "@/components/vuelos-recientes"
import { QuickActions } from "@/components/acciones-rapidas"
import { BottomNavigation } from "@/components/navegacion-de-fondo"

export function PanelDeControl() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 space-y-6">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickActions />
        </div>
      </main>
    </div>
  )
}
