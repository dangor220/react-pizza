import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const nameSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
});

export const {} = nameSlice.actions;
export default nameSlice.reducer;
