import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  items: [],
  pizzaItem: {},
  pizzaProps: {},
  pizzaStatus: 'loading',
  status: 'loading',
  error: '',
  totalPages: 1,
  pizzaTypes: ['тонкое', 'традиционное', 'другое'],
  pizzaSizes: [26, 30, 40],
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

export const fetchPizza = createAsyncThunk('pizza/fetchPizza', async (pizzaID: string | undefined) => {
  const { data } = await axios.get(`https://91819ac0547a360f.mokky.dev/items/${pizzaID}`);
  return data;
});

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzasData(state, action) {
      state.items = action.payload;
    },
    setActiveSize(state, action) {
      const { id, sizeID } = action.payload;

      if (state.pizzaProps[id]) {
        state.pizzaProps[id] = {
          ...state.pizzaProps[id],
          activeSize: sizeID,
        };
      }
    },
    setActiveType(state, action) {
      const { id, typeID } = action.payload;

      if (state.pizzaProps[id]) {
        state.pizzaProps[id] = {
          ...state.pizzaProps[id],
          activeType: typeID,
        };
      }
    },
    setResultPrice(state, action) {
      const { id, price } = action.payload;

      if (state.pizzaProps[id]) {
        state.pizzaProps[id] = {
          ...state.pizzaProps[id],
          resultPrice: price,
        };
      }
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
      action.payload.items.forEach((item) => {
        state.pizzaProps[item.id] = {
          activeSize: 0,
          activeType: 0,
          resultPrice: 0,
        };
      });
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.pizzaStatus = 'loading';
      state.pizzaItem = {};
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzaItem = action.payload;
      state.pizzaProps[action.payload.id] = {
        activeSize: 0,
        activeType: 0,
        resultPrice: action.payload.price[0],
      };

      state.pizzaStatus = 'success';
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.pizzaStatus = 'error';
      state.error = action.error.message;
      state.pizzaItem = {};
    });
  },
});

export const { setPizzasData, setActiveSize, setResultPrice, setActiveType } = pizzaSlice.actions;
export default pizzaSlice.reducer;
