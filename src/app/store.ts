import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import productsSlice from '../features/productsSlice';
import favouritesSlice from '../features/favouritesSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsSlice,
    favourites: favouritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
