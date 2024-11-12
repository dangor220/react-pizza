import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getCartData from '../../utils/getCartData';

export type CartItem = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
};

export type CartItems = {
  [id: number]: CartItem[];
};

export interface InitialCartProps {
  totalCount: number;
  totalPrice: number;
  items: CartItems;
}

const initialState: InitialCartProps = getCartData();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const { id, ...props } = action.payload;

      if (state.items[id]) {
        let added = false;
        state.items[id].forEach((item) => {
          if (item.type === props.type && item.size === props.size && item.count) {
            item.count++;
            added = true;
          }
        });

        if (!added) {
          state.items[id].push({ ...props, count: 1 } as CartItem);
        }
      } else {
        state.items[id] = [{ ...props, count: 1 } as CartItem];
      }

      state.totalCount += 1;
      state.totalPrice += props.price;
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const { id, ...props } = action.payload;

      if (state.items[id]) {
        state.items[id].forEach((item) => {
          const isCurrentItem = item.type === props.type && item.size === props.size;
          if (isCurrentItem && item.count === 1) {
            state.items[id] = state.items[id].filter(
              (obj) => obj.type !== props.type || obj.size !== props.size,
            );

            state.items[id].length === 0 && delete state.items[id];
          }
          if (isCurrentItem && item.count) {
            item.count--;
          }
        });
      }

      state.totalCount -= 1;
      state.totalPrice -= props.price;
    },
    removeItemById(state, action: PayloadAction<number>) {
      state.items[action.payload].forEach((item) => {
        if (item.count) {
          state.totalCount -= item.count;
          state.totalPrice -= item.price * item.count;
        }
      });
      delete state.items[action.payload];
    },
    clearItems(state) {
      (state.totalCount = 0), (state.totalPrice = 0), (state.items = {});
    },
  },
});

export const { addItem, removeItem, removeItemById, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
