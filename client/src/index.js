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
        <Route path="/nordica" element={<NordicaPage/>}/>
        <Route path="/AgregarMitos" element={<div>ss</div>}></Route>
        <Route path="/nordica/:nordica_id" element={<NordicaDetails/>}/>
        
      </Routes>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </BrowserRouter>
);

