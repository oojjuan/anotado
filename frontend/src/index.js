import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Header from './components/Header/header';
import Inicio from './routes/Inicio/Inicio.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes exact path="/">
          <Route path='/' element={<Navigate to="/inicio" replace/>} />

          <Route path='/inicio' element={<Inicio/>} />

          <Route path='/receitas' element={"Receitas"}/>
          
          <Route path='/favoritos' element={"Favoritos"}/>

          <Route path='/criar' element={"Criar"}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);