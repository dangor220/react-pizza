import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  items: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, ...props } = action.payload;

      if (state.items[id]) {
        let added = false;
        state.items[id].forEach((item) => {
          if (item.type === props.type && item.size === props.size) {
            item.count++;
            added = true;
          }
        });

        if (!added) {
          state.items[id].push({ ...props, count: 1 });
        }
      } else {
        state.items[id] = [{ ...props, count: 1 }];
      }

      state.totalCount += 1;
      state.totalPrice += props.price;
    },
    removeItem(state, action) {},
    clearItems(state) {
      (state.totalCount = 0), (state.totalPrice = 0), (state.items = {});
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
