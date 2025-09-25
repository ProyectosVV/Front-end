import { LayoutDashboard, Plane, Calendar, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../Diseños/navegacion-de-fondo.css";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Vuelos", icon: Plane, path: "/vuelos" },
  { title: "Reservas", icon: Calendar, path: "/reservas" },
  { title: "Admin", icon: Settings, path: "/admin" },
];

export function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `nav-button ${isActive ? "active" : ""}`
          }
        >
          <item.icon className="nav-icon" />
          <span className="nav-text">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
}
