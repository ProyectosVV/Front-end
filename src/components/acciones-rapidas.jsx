"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, BarChart3, Calendar, Settings } from "lucide-react"
import "../Diseños/acciones_rapidas.css"

const actions = [
  { title: "Vuelos", icon: Plane },
  { title: "Analítica", icon: BarChart3 },
  { title: "Reservas", icon: Calendar },
  { title: "Mantenimiento", icon: Settings },
]

export function QuickActions() {
  const [selected, setSelected] = useState("Vuelos")

  return (
    <Card className="quick-card">
      <CardHeader>
        <CardTitle className="quick-title">Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="quick-grid">
          {actions.map((action, index) => {
            const isSelected = selected === action.title
            return (
              <button
                key={index}
                onClick={() => setSelected(action.title)}
                className={`quick-btn ${isSelected ? "quick-btn-selected" : "quick-btn-unselected"}`}
              >
                <action.icon className="quick-icon" />
                <span>{action.title}</span>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
