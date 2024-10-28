import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPage, setFilter } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

import qs from 'qs';

import Categories from '../components/Categories';
import Sort, { sortBy as sortData } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../components/Pagination';
import NotFound from '../components/NotFound';

export default function Home() {
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const pizzasData = useSelector((store) => store.pizza);
  const { activeCategory, activeSort, ascendSort, selectedPage, visiblePizzas } = useSelector(
    (store) => store.filter,
  );
  const searchValue = useSelector((store) => store.filter.searchValue);

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
      dispatch(
        fetchPizzas({
          activeCategory,
          activeSort,
          selectedPage,
          visiblePizzas,
          ascendSort,
          searchValue,
        }),
      );
      window.scrollTo(0, 0);
    }
    isSearch.current = false;
  }, [activeCategory, activeSort, ascendSort, searchValue, selectedPage]);

  const skeleton = [...Array(visiblePizzas)].map((_, skeletonID) => (
    <PizzaSkeleton key={skeletonID} />
  ));
  const pizzas = pizzasData.items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <>
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort activeSort={activeSort} ascendSort={ascendSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {pizzasData.status === 'error' ? (
        <NotFound fetchError={true} />
      ) : (
        <div className="content__items">{pizzasData.status === 'loading' ? skeleton : pizzas}</div>
      )}
      <div className="content__items">{}</div>
      <Pagination
        paginationCount={pizzasData.totalPages}
        selectedPage={selectedPage}
        setSelectedPage={(number) => dispatch(setSelectedPage(number))}
      />
    </>
  );
}
