import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NordicaPage from './Pages/NordicaPage/NordicaPage'
import {IndexPages} from './Pages/IndexPage/IndexPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Pages/Header/Header'
import {Footer} from './Pages/Footer/Footer'
import  NordicaDetails  from './Pages/NordicaDetails/NordicaDetails';
import InsertHistory from './Pages/InsertHistory/InsertHistory'
import DeleteHistory from './Pages/DeleteHistory/DeleteHistory'
import UpdateHistory from './Pages/UpdateHistory/UpdateHistory'
import Login from './Pages/Login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<IndexPages/>}/>
        <Route path="/AgregarHistoria" element={<InsertHistory/>}></Route>
        <Route path="/:TituloMito" element={<NordicaPage/>}/>
        <Route path="/AgregarMitos" element={<div>ss</div>}></Route>
        <Route path="/:TituloMito/:nordica_id" element={<NordicaDetails/>}/>
        <Route path="/:TituloMito/:nordica_id/update" element={<UpdateHistory/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/BorrarHistoria" element={<DeleteHistory/>} />
      </Routes>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </BrowserRouter>
);

