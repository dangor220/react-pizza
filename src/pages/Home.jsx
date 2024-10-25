import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setTotalPages, setSelectedPage, setFilter } from '../redux/slices/filterSlice';

import axios from 'axios';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort, { sortBy as sortData } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../components/Pagination';

export default function Home() {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [searchValue] = useOutletContext();
  const { activeCategory, activeSort, ascendSort, totalPages, selectedPage, visiblePizzas } =
    useSelector((store) => store.filter);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      let sortBy;
      if (params.sortBy[0] === '-') {
        sortBy = sortData.find((obj) => obj.sort === params.sortBy.substring(1));
        params.ascendSort = false;
      } else {
        sortBy = sortData.find((obj) => obj.sort === params.sortBy);
        params.ascendSort = true;
      }

      isSearch.current = true;
      dispatch(setFilter({ ...params, sortBy }));
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: selectedPage,
        limit: visiblePizzas,
        sortBy: ascendSort ? activeSort.sort : '-' + activeSort.sort,
        category: activeCategory,
        title: '*' + searchValue || '*',
      });

      navigate('?' + queryString);
    }
    isMounted.current = true;
  }, [activeCategory, activeSort, ascendSort, searchValue, selectedPage]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [activeCategory, activeSort, ascendSort, searchValue, selectedPage]);

  const getPizzas = async () => {
    try {
      let url =
        activeCategory === 0
          ? `https://91819ac0547a360f.mokky.dev/items?page=${selectedPage}&limit=${visiblePizzas}&sortBy=${
              ascendSort ? '' : '-'
            }${activeSort.sort}&title=*${searchValue}`
          : `https://91819ac0547a360f.mokky.dev/items?page=${selectedPage}&limit=${visiblePizzas}&sortBy=${
              ascendSort ? '' : '-'
            }${activeSort.sort}&category=${activeCategory}&title=*${searchValue}`;
      setIsLoading(true);
      const { data } = await axios.get(url);

      dispatch(setTotalPages(data.meta.total_pages || 1));
      setPizzasData(data.items);
      setIsLoading(false);
    } catch (e) {
      console.log('Ошибка получения данных: ' + e);
    } finally {
      window.scrollTo(0, 0);
    }
  };

  const skeleton = [...Array(visiblePizzas)].map((_, skeletonID) => (
    <PizzaSkeleton key={skeletonID} />
  ));
  const pizzas = pizzasData.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const renderPizzaBlock = () => {
    return isLoading ? skeleton : pizzas;
  };

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort activeSort={activeSort} ascendSort={ascendSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{renderPizzaBlock()}</div>
      <Pagination
        paginationCount={totalPages}
        selectedPage={selectedPage}
        setSelectedPage={(number) => dispatch(setSelectedPage(number))}
      />
    </>
  );
}
