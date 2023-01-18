import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import productsSlice from '../features/productsSlice';
import favouritesSlice from '../features/favouritesSlice';
import pageSlice from '../features/pageSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsSlice,
    favourites: favouritesSlice,
    pages: pageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
