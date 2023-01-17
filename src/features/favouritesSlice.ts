import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

const initialState: Product[]
  = JSON.parse(localStorage.getItem('favourites') || '[]');

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (favourites, action: PayloadAction<Product>) => {
      favourites.push(action.payload);
    },
    remove: (favourites, action: PayloadAction<string>) => {
      return favourites.filter(fav => fav.appId !== action.payload);
    },
  },
});

export default favouritesSlice.reducer;
export const { actions } = favouritesSlice;
