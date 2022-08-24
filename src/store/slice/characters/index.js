import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    data: [],
    characters: [],
    loading: false,
  },
  reducers: {
    setCharacters: (state, action) => {
      state.data = action.payload;
      state.characters = action.payload.results;
      state.loading = true;
    },
    randomPage: (state, action) => {
      state.data = action.payload;
      state.characters = action.payload.results;
      state.loading = true;
    },
    changePage: (state, action) => {
      state.data = action.payload;
      state.characters = action.payload.results;
      state.loading = true;
    },
  },
});

export const { setCharacters, randomPage, changePage } =
  charactersSlice.actions;

export default charactersSlice.reducer;
