import { Button } from "@/components/ui/button"
import { LayoutDashboard, Plane, Calendar, Settings } from "lucide-react"

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
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-2 md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`flex-col gap-1 h-auto py-2 px-3 ${
              item.active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.title}</span>
          </Button>
        ))}
      </div>
    </nav>
  )
}
