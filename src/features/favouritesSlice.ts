import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

const initialState: Product[]
  = JSON.parse(localStorage.getItem('favourites') || '[]');

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter(fav => fav.appId !== action.payload);
    },
  },
});

export default favouritesSlice.reducer;
export const { actions } = favouritesSlice;
