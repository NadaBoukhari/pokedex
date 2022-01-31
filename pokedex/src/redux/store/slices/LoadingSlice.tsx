import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoadingPokemonList: (state, action: PayloadAction<LoadingState>) => {
      state = action.payload;
    },
    stopLoadingPokemonList: (state, action: PayloadAction<LoadingState>) => {
      state = action.payload;
    },
  },
});

export const { startLoadingPokemonList, stopLoadingPokemonList } =
  loadingSlice.actions;

export default loadingSlice.reducer;
