import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';

export default function Home() {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sort: 'rating',
    increase: true,
  });

  useEffect(() => {
    let urlBySort =
      activeCategory === 0
        ? `https://91819ac0547a360f.mokky.dev/items?sortBy=${activeSort.increase ? '' : '-'}${
            activeSort.sort
          }`
        : `https://91819ac0547a360f.mokky.dev/items?sortBy=${activeSort.increase ? '' : '-'}${
            activeSort.sort
          }&category=${activeCategory}`;
    getPizzas(urlBySort);
  }, [activeCategory, activeSort]);

  const getPizzas = async (url = 'https://91819ac0547a360f.mokky.dev/items') => {
    try {
      setIsLoading(true);
      const request = await fetch(url);
      const data = await request.json();
      setPizzasData(data);
      setIsLoading(false);
    } catch (e) {
      console.log('Ошибка получения данных: ' + e);
    } finally {
      window.scrollTo(0, 0);
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
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{renderPizzaBlock()}</div>
    </>
  );
}
