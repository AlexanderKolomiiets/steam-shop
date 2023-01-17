import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderBy } from '../types/orderBy';
import { SortBy } from '../types/sortBy';

type State = {
  query: string;
  queryStatus: boolean;
  orderBy: OrderBy;
  sortBy: SortBy;
};

const initialState: State = {
  query: 'Counter',
  queryStatus: false,
  orderBy: OrderBy.toLower,
  sortBy: SortBy.Price,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    query: (state, action: PayloadAction<string>) => (
      { ...state, query: action.payload }
    ),
    queryStatus: (state, action: PayloadAction<boolean>) => (
      { ...state, queryStatus: action.payload }
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
