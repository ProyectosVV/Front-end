import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Vistas/Login";
import { Menuadmin } from "./Vistas/Menus/MenuAdmin";
import { Home } from "./Home";
import { PanelDeControl } from "./Vistas/Administrador/Panel-de-control";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("sesionActiva");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<Menuadmin />}>
             <Route index element={<PanelDeControl />} />
         </Route>


        <Route path="*" element={<Navigate to={user ? (user.rol === 1 ? "/admin" : "/pasajero") : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
