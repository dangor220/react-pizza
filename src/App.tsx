import Header from './components/Header';
import { Outlet } from 'react-router-dom';

import './scss/app.scss';
import React from 'react';

export default function App(): React.ReactNode {
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
