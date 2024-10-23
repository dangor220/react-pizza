import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sort: 'rating',
  },
  ascendSort: true,
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
  },
});

export const { setActiveCategory, setActiveSort, setAscendSort } = filterSlice.actions;
export default filterSlice.reducer;
