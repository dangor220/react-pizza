import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../components/Pagination';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue] = useOutletContext();

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    sort: 'rating',
  });
  const [ascendSort, setAscendSort] = useState(true);

  const [totalPages, setTotalPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [visiblePizzas, setVisiblePizzas] = useState(1);

  useEffect(() => {
    let urlBySort =
      activeCategory === 0
        ? `https://91819ac0547a360f.mokky.dev/items?page=${selectedPage}&limit=${visiblePizzas}&sortBy=${
            ascendSort ? '' : '-'
          }${activeSort.sort}&title=*${searchValue}`
        : `https://91819ac0547a360f.mokky.dev/items?page=${selectedPage}&limit=${visiblePizzas}&sortBy=${
            ascendSort ? '' : '-'
          }${activeSort.sort}&category=${activeCategory}&title=*${searchValue}`;
    getPizzas(urlBySort);
  }, [activeCategory, activeSort, ascendSort, searchValue, selectedPage]);

  const getPizzas = async (url = 'https://91819ac0547a360f.mokky.dev/items') => {
    try {
      setIsLoading(true);
      const request = await fetch(url);
      const data = await request.json();

      setTotalPages(data.meta.total_pages || 1);
      setPizzasData(data.items);
      setIsLoading(false);
    } catch (e) {
      console.log('Ошибка получения данных: ' + e);
    } finally {
      window.scrollTo(0, 0);
    }
  };

  const skeleton = [...Array(10)].map((_, skeletonID) => <PizzaSkeleton key={skeletonID} />);
  const pizzas = pizzasData.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const renderPizzaBlock = () => {
    return isLoading ? skeleton : pizzas;
  };

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setSelectedPage={setSelectedPage}
        />
        <Sort
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          ascendSort={ascendSort}
          setAscendSort={setAscendSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{renderPizzaBlock()}</div>
      <Pagination
        paginationCount={totalPages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
}
