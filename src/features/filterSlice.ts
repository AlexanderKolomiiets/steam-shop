import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderBy } from '../types/orderBy';
import { SortBy } from '../types/sortBy';

type State = {
  query: string;
  orderBy: OrderBy | null;
  sortBy: SortBy | null;
};

const initialState: State = {
  query: '',
  orderBy: null,
  sortBy: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    query: (state, action: PayloadAction<string>) => (
      { ...state, query: action.payload }
    ),
    orderBy: (state, action: PayloadAction<OrderBy>) => (
      { ...state, orderBy: action.payload }
    ),
    sortBy: (state, action: PayloadAction<SortBy>) => (
      { ...state, sortBy: action.payload }
    ),
  },
});

export default filterSlice.reducer;
export const { actions } = filterSlice;
