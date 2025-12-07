import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Header from './components/Header/header.jsx';
import Inicio from './routes/Inicio/Inicio.jsx';
import Receitas from './routes/Receitas/Receitas.jsx';
import Receita from './routes/Receitas/Receita.jsx';
import Criar from './routes/Criar/Criar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" replace/>} />

          <Route path='/inicio' element={<Inicio />} />

          <Route path='/receitas'>
            <Route index element={<Receitas />}/>
            <Route path=':idReceita' element={<Receita />}/>
          </Route>

          <Route path='/editar'>
            <Route path=':idReceita' element={<Criar />} />
          </Route>
          
          <Route path='/favoritos' element={<Receitas tipo="favoritos" />}/>

          <Route path='/criar' element={<Criar />}/>
        </Routes>
    </BrowserRouter>
);