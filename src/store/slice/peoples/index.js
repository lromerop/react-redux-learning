import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "peoples",
  initialState: {
    list: [],
    loading: false
  },
  reducers: {
    setPeopleList: (state, action) => {
      state.list = action.payload;
      state.loading = true;
    },
    changePageList: (state, action) => {
      state.list = action.payload;
      state.loading = true; 
    }
  },
});

export const { setPeopleList, changePageList } = peopleSlice.actions;

export default peopleSlice.reducer;