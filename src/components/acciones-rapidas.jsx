"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, BarChart3, Calendar, Settings } from "lucide-react"
import "../Diseños/QuickActions.css"

const actions = [
  {
    title: "Vuelos",
    icon: Plane,
  },
  {
    title: "Analítica",
    icon: BarChart3,
  },
  {
    title: "Reservas",
    icon: Calendar,
  },
  {
    title: "Mantenimiento",
    icon: Settings,
  },
]

export function QuickActions() {
  const [selected, setSelected] = useState("Vuelos")

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => {
            const isSelected = selected === action.title
            return (
              <Button
  key={index}
  onClick={() => setSelected(action.title)}
  className={`action-button ${isSelected ? "selected" : "unselected"}`}
>
  <action.icon />
  <span>{action.title}</span>
</Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
