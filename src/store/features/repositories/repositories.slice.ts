import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository } from "@/types/global";

export interface IRepositoriesState {
  repositories: Repository[];
  totalCount: number;
}

const initialState: IRepositoriesState = {
  repositories: [],
  totalCount: 0,
};

export const repositoriesSlice = createSlice({
  initialState,
  name: "repositoriesState",
  reducers: {
    setRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.repositories = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

export default repositoriesSlice.reducer;

export const { setRepositories, setTotalCount } = repositoriesSlice.actions;
