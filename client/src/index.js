import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {App} from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route  path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </main>
    <footer>
    </footer>
  </BrowserRouter>
);

