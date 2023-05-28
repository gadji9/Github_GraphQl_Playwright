import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPageState {
  value: number;
}

const initialState: IPageState = {
  value: 1,
};

export const pageSlice = createSlice({
  initialState,
  name: "pageState",
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export default pageSlice.reducer;

export const { setPage } = pageSlice.actions;
