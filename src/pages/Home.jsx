import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';

export default function Home() {
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
      ? [...Array(10)].map((_, skeletonID) => <PizzaSkeleton key={skeletonID} />)
      : pizzasData.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  };

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{renderPizzaBlock()}</div>
    </>
  );
}
