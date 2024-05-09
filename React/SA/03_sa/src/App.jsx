import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/CompLogin//login';
import Recuperacao from './components/CompRecuperacao/recuperacao';
import Registro from './components/CompRegistro/registro';
import Inicio from './components/CompInicio/inicio';

import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/recuperacao" element={<Recuperacao/>} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
