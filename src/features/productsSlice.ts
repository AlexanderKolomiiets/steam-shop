import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (products, action: PayloadAction<Product[]>) => {
      action.payload.forEach((item => products.push(item)));
    },
    clear: () => [],
  },
});

export default productsSlice.reducer;
export const { actions } = productsSlice;
