import { createSlice } from '@reduxjs/toolkit';
import { InitialPizzaProps, Status } from './types';
import { fetchPizza, fetchPizzas } from './asyncActions';

const initialState: InitialPizzaProps = {
  items: [],
  pizzaItem: {},
  pizzaProps: {},
  pizzaStatus: Status.LOADING,
  status: Status.LOADING,
  error: '',
  totalPages: 1,
  pizzaTypes: ['тонкое', 'традиционное', 'другое'],
  pizzaSizes: [26, 30, 40],
};

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
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
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
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.pizzaStatus = Status.LOADING;
      state.pizzaItem = {};
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizzaItem = action.payload;
      state.pizzaProps[action.payload.id] = {
        activeSize: 0,
        activeType: 0,
        resultPrice: action.payload.price[0],
      };

      state.pizzaStatus = Status.SUCCESS;
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.pizzaStatus = Status.ERROR;
      state.error = action.error.message;
      state.pizzaItem = {};
    });
  },
});

export const { setPizzasData, setActiveSize, setResultPrice, setActiveType } = pizzaSlice.actions;
export default pizzaSlice.reducer;
