import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../components/Pagination';
import { useOutletContext } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Home() {
  const { activeCategory, activeSort, ascendSort } = useSelector((store) => store.filter);

  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue] = useOutletContext();

  const [totalPages, setTotalPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [visiblePizzas, _] = useState(8);

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
      const { data } = await axios.get(url);

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
        <Categories activeCategory={activeCategory} setSelectedPage={setSelectedPage} />
        <Sort activeSort={activeSort} ascendSort={ascendSort} />
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
