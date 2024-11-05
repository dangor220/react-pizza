import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setActiveCategory(store, action) {
      store.activeCategory = action.payload;
    },
    setActiveSort(store, action) {
      store.activeSort = action.payload;
    },
    setAscendSort(store) {
      store.ascendSort = !store.ascendSort;
    },
    setSelectedPage(store, action) {
      store.selectedPage = action.payload;
    },
    setFilter(store, action) {
      store.selectedPage = Number(action.payload.page);
      store.visiblePizzas = Number(action.payload.limit);
      store.activeCategory = Number(action.payload.category);
      store.activeSort = action.payload.sortBy;
      store.ascendSort = action.payload.ascendSort;
    },
    setSearchValue(store, action) {
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
  setVisiblePizzas,
  setFilter,
  setSearchValue,
  clearSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
