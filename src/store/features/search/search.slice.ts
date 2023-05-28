import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchState {
  value: string;
}

const initialState: ISearchState = {
  value: '',
};

export const searchSlice = createSlice({
  initialState,
  name: 'searchState',
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { setSearch } = searchSlice.actions;
