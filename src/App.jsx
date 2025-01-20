import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import SideNav from "./components/SideNav";
import "./App.css";
import Load_page from "./components/Load_page";
import Maincontent from "./components/Maincontent";

//Logica
function App() {
  // Logica de la animacion
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Oculta el splash después de 3 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  return (
    <div className="flex h-screen w-screen">
      {showSplash ? (
        <Load_page />
      ) : (
        <>
          <SideNav />
          <Maincontent />
        </>
      )}
    </div>
  );
}

export default App;
