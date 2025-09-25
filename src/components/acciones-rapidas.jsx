"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, BarChart3, Calendar, Settings } from "lucide-react"
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

import "../Diseños/acciones_rapidas.css"

const actions = [
  { title: "Vuelos", icon: Plane },
  { title: "Analítica", icon: BarChart3 },
  { title: "Reservas", icon: Calendar },
  { title: "Mantenimiento", icon: Settings },
  { title: "Países", icon: Globe,path: "Paises" },
  { title: "Aeropuertos", icon: Globe,path: "Aeropuertos" },
  { title: "Rutas", icon: Globe,path: "Rutas" },
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
          {actions.map((action, index) => (
  <Link
    key={index}
    to={action.path}
    onClick={() => setSelected(action.title)}
    className={`quick-btn ${selected === action.title ? "quick-btn-selected" : "quick-btn-unselected"}`}
  >
    <action.icon className="quick-icon" />
    <span>{action.title}</span>
  </Link>
))}

        </div>
      </CardContent>
    </Card>
  )
}
