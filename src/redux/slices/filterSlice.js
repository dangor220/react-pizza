import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sort: 'rating',
  },
  ascendSort: true,
  totalPages: 1,
  selectedPage: 1,
  visiblePizzas: 8,
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
    setTotalPages(store, action) {
      store.totalPages = action.payload;
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
  },
});

export const {
  setActiveCategory,
  setActiveSort,
  setAscendSort,
  setTotalPages,
  setSelectedPage,
  setVisiblePizzas,
  setFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
