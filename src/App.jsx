import './App.css';
import Login from "./Vistas/Login";
import { PanelDeControl } from "./Vistas/Administrador/Panel-de-control";  // Home para admin
import { Home } from "./Home"; // Home para pasajero
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("sesionActiva");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      
    }
  }, [user]);

  // Decide qué panel renderizar según el rol
  const renderPanel = () => {
    if (!user) return <Login setUser={setUser} />;

    switch(user.rol) { // si guardaste rol como número (1=admin, 2=pasajero)
      case 1:
        return <PanelDeControl user={user} />;
      case 2:
        return <Home user={user} />;
      default:
        return <Login setUser={setUser} />; // fallback por si el rol no existe
    }
  }

  return (
    <div className="App">
      {renderPanel()}
    </div>
  )
}

export default App;
