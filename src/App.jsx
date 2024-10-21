import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import './scss/app.scss';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <div className="container">
            <Outlet context={[searchValue]} />
          </div>
        </div>
      </div>
    </>
  );
}
