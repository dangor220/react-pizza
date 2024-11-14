import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchPizzasProps, PizzaDataProps, PizzaItemProps } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (props: FetchPizzasProps) => {
    const { activeCategory, activeSort, selectedPage, visiblePizzas, ascendSort, searchValue } =
      props;

    let url =
      activeCategory === 0
        ? `https://91819ac0547a360f.mokky.dev/items?page=${selectedPage}&limit=${visiblePizzas}&sortBy=${
            ascendSort ? '' : '-'
          }${activeSort.sort}&title=*${searchValue}`
        : `https://91819ac0547a360f.mokky.dev/items?page=${selectedPage}&limit=${visiblePizzas}&sortBy=${
            ascendSort ? '' : '-'
          }${activeSort.sort}&category=${activeCategory}&title=*${searchValue}`;

    const { data } = await axios.get<PizzaDataProps>(url);

    return data as PizzaDataProps;
  },
);

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizza',
  async (pizzaID: string | undefined) => {
    const { data } = await axios.get<PizzaItemProps>(
      `https://91819ac0547a360f.mokky.dev/items/${pizzaID}`,
    );

    return data as PizzaItemProps;
  },
);
