import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 1;

const productsSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<number>) => action.payload,
  },
});

export default productsSlice.reducer;
export const { actions } = productsSlice;
