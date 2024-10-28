import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  totalPages: 1,
  status: 'loading',
};

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (props) => {
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

  const { data } = await axios.get(url);
  return data;
});

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzasData(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload.items;
      state.totalPages = action.payload.meta.total_pages || 1;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setPizzasData } = pizzaSlice.actions;
export default pizzaSlice.reducer;
