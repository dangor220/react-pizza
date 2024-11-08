import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {
  setSelectedPage,
  setFilter,
  ActiveSortProps,
  FilterSortProps,
} from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

import qs from 'qs';

import Categories from '../components/Categories';
import Sort, { sortBy as sortData } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaSkeleton';
import Pagination from '../components/Pagination';
import NotFound from '../components/NotFound';
import { useAppDispatch } from '../redux/store';

type FilterStore = {
  filter: {
    activeCategory: number;
    activeSort: ActiveSortProps;
    ascendSort: boolean;
    selectedPage: number;
    visiblePizzas: number;
    searchValue: string;
  };
};

type PizzaItemProp = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
};
type PizzaDataProps = {
  pizza: {
    items: PizzaItemProp[];
    status: string;
    totalPages: number;
  };
};

export default function Home(): React.ReactNode {
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const pizzasData = useSelector((store: PizzaDataProps) => store.pizza);
  const { activeCategory, activeSort, ascendSort, selectedPage, visiblePizzas, searchValue } =
    useSelector((store: FilterStore) => store.filter);

  useEffect(() => {
    if (window.location.search) {
      const params: qs.ParsedQs = qs.parse(window.location.search.substring(1));

      let sortBy: ActiveSortProps | undefined;

      if (params.sortBy[0] === '-') {
        sortBy = sortData.find((obj) => obj.sort === params.sortBy.substring(1));

        params.ascendSort = false;
      } else {
        sortBy = sortData.find((obj) => obj.sort === params.sortBy);
        params.ascendSort = true;
      }

      isSearch.current = true;
      dispatch(setFilter({ ...params, sortBy } as FilterSortProps));
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
        <div className="content__items">
          {pizzasData.status === 'loading'
            ? skeleton
            : pizzasData.items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
        </div>
      )}
      <div className="content__items">{}</div>
      <Pagination
        paginationCount={pizzasData.totalPages}
        selectedPage={selectedPage}
        setSelectedPage={(num: number) => dispatch(setSelectedPage(num))}
      />
    </>
  );
}
