import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NordicaPage from './Pages/NordicaPage/NordicaPage'
import {IndexPages} from './Pages/IndexPage/IndexPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Pages/Header/Header'
import {Footer} from './Pages/Footer/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<IndexPages/>}/>
        <Route path="/nordica" element={<NordicaPage/>}/>
        <Route  path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </BrowserRouter>
);

