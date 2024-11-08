import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type PizzaItemProps = {
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
interface InitialStateProps {
  items: PizzaItemProps[];
  pizzaItem: PizzaItemProps | {};
  pizzaProps: {
    [id: number]: {
      activeSize: number;
      activeType: number;
      resultPrice: number;
    };
  };
  pizzaStatus: Status;
  status: Status;
  error: string | undefined;
  totalPages: number;
  pizzaTypes: string[];
  pizzaSizes: number[];
}

const initialState: InitialStateProps = {
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

type FetchPizzasProps = {
  activeCategory: number;
  activeSort: { name: string; sort: string };
  selectedPage: number;
  visiblePizzas: number;
  ascendSort: boolean;
  searchValue: string;
};
type PizzaDataProps = {
  meta: {
    current_page: number;
    per_page: number;
    remaining_count: number;
    total_items: number;
    total_pages: number;
  };
  items: PizzaItemProps[];
};

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
