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
  },
});

export const {
  setActiveCategory,
  setActiveSort,
  setAscendSort,
  setTotalPages,
  setSelectedPage,
  setVisiblePizzas,
} = filterSlice.actions;
export default filterSlice.reducer;
