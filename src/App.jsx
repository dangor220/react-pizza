import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import PizzaSkeleton from './components/PizzaSkeleton';

export default function App() {
  // https://91819ac0547a360f.mokky.dev/items

  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      const request = await fetch('https://91819ac0547a360f.mokky.dev/items');
      const data = await request.json();
      setPizzasData(data);
      setIsLoading(false);
    } catch (e) {
      console.log('Ошибка получения данных: ' + e);
    }
  };

  const renderPizzaBlock = () => {
    return isLoading
      ? [...Array(10)].map((skeleton, skeletonID) => <PizzaSkeleton key={skeletonID} />)
      : pizzasData.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{renderPizzaBlock()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
