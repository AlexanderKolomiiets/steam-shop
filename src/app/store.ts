import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import productsSlice from '../features/productsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
