import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActiveSortProps = {
  name: string;
  sort: 'rating' | 'price' | 'title';
};

export type FilterSortProps = {
  page: string;
  limit: string;
  sortBy: ActiveSortProps;
  category: string;
  title: string;
  ascendSort: boolean;
};

interface InitialFilterProps {
  activeCategory: number;
  activeSort: ActiveSortProps;
  ascendSort: boolean;
  selectedPage: number;
  visiblePizzas: number;
  searchValue: string;
}

const initialState: InitialFilterProps = {
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sort: 'rating',
  },
  ascendSort: true,
  selectedPage: 1,
  visiblePizzas: 8,
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory(store, action: PayloadAction<number>) {
      store.activeCategory = action.payload;
    },
    setActiveSort(store, action: PayloadAction<ActiveSortProps>) {
      store.activeSort = action.payload;
    },
    setAscendSort(store) {
      store.ascendSort = !store.ascendSort;
    },
    setSelectedPage(store, action: PayloadAction<number>) {
      store.selectedPage = action.payload;
    },
    setFilter(store, action: PayloadAction<FilterSortProps>) {
      store.selectedPage = Number(action.payload.page);
      store.visiblePizzas = Number(action.payload.limit);
      store.activeCategory = Number(action.payload.category);
      store.activeSort = action.payload.sortBy;
      store.ascendSort = action.payload.ascendSort;
    },
    setSearchValue(store, action: PayloadAction<string>) {
      store.searchValue = action.payload;
      store.selectedPage = 1;
    },
    clearSearchValue(store) {
      store.searchValue = '';
      store.selectedPage = 1;
    },
  },
});

export const {
  setActiveCategory,
  setActiveSort,
  setAscendSort,
  setSelectedPage,
  setFilter,
  setSearchValue,
  clearSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
