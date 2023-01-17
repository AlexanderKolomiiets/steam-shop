import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

const initialState: Product[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    add: (favourites, action: PayloadAction<Product>) => {
      favourites.push(action.payload);
    },
    remove: (favourites, action: PayloadAction<Product>) => {
      return favourites.filter(fav => fav !== action.payload);
    },
  },
});

export default favouritesSlice.reducer;
export const { actions } = favouritesSlice;
