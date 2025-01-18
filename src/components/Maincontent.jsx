import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";



const Maincontent = () => {
    return (
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />

        
      </Routes>
    )
}

export default Maincontent