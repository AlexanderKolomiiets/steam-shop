/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

type ProductsState = {
  products: Product[],
  loading: boolean,
  error: string;
};

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    add: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach((item => state.products.push(item)));
    },
    clear: (state) => {
      state.products = [];
    },
  },
});

export default productsSlice.reducer;
export const { actions } = productsSlice;
