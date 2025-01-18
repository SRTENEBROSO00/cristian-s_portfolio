import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import SideNav from "./components/SideNav";
import "./App.css";
import Load_page from "./components/Load_page";
import Maincontent from "./components/Maincontent";


function App() {
  return (

      <div className="flex h-screen">
        <SideNav/>
        <Maincontent/>
      </div>

  );
}

export default App;
