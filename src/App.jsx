import Header from './components/Header';
import { Outlet } from 'react-router-dom';

import './scss/app.scss';

export default function App() {
  // https://91819ac0547a360f.mokky.dev/items

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
