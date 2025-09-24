import { Search, Bell } from "lucide-react"
import Logo from "@/assets/logo.png"
import "../Diseños/encabezado.css"

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo + Título */}
        <div className="header-left">
          <img src={Logo} alt="SkyConnections Logo" className="header-logo" />
          <h1 className="header-title">SkyConnections</h1>
        </div>

        {/* Acciones */}
        <div className="header-actions">
          {/* Buscador (desktop) */}
          <div className="header-search">
            <Search className="header-search-icon" />
            <input type="text" placeholder="Buscar..." />
          </div>

          {/* Botón buscar (mobile) */}
          <button className="header-button">
            <Search className="header-icon" />
          </button>

          {/* Notificaciones */}
          <button className="header-button">
            <Bell className="header-icon" />
            <span className="header-badge"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
