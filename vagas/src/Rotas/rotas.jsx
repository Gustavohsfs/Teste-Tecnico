import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackPage from "../paginas/BackVagas";
import FrontPage from "../paginas/FrontVagas";
import Home from "../paginas/Home";
import Pagina404 from "../paginas/Pagina404";




function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/front" element={<FrontPage />} />
        <Route path="/back" element={<BackPage />} />
        <Route path="*" element={<Pagina404 />} />
        
      </Routes>
    </Router>
  );
}

export default Rotas;
