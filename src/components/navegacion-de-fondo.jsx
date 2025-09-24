import { Button } from "@/components/ui/button"
import { LayoutDashboard, Plane, Calendar, Settings } from "lucide-react"
import "../Diseños/navegacion-de-fondo.css"
const navItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Vuelos",
    icon: Plane,
    active: false,
  },
  {
    title: "Reservas",
    icon: Calendar,
    active: false,
  },
  {
    title: "Admin",
    icon: Settings,
    active: false,
  },
]

export function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={item.active ? "active" : ""}
        >
          <item.icon />
          <span>{item.title}</span>
        </button>
      ))}
    </nav>
  )
}
