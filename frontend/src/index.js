import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes exact path="/">
          <Route path='/' element={<Navigate to="/inicio" replace/>} />

          <Route path='/receitas' element={"Receitas"}/>
          
          <Route path='/favoritos' element={"Favoritos"}/>

          <Route path='/criar' element={"Criar"}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);