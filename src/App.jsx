import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';

import './scss/app.scss';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
