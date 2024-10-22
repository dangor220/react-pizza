import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';

import './scss/app.scss';

export const SearchContext = createContext('');

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Outlet context={[searchValue]} />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}
