import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getcats } from "./catAPI";

// State - data (init)
const initialState = {
  cats: [],
  mm: "ttttttt",
};
// async (1)
// simple async method (component can call it...)
export const getcatsAsync = createAsyncThunk("cat/getcats", async () => {
  const response = await getcats();
  return response.data;
});

export const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    test: (state, action) => {
      console.log(state);
    },
  },
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    builder.addCase(getcatsAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cats = action.payload;
    });
  },
});

// export sync method
export const { test } = catSlice.actions;

// export any part of the state
export const selectcats = (state) => state.cat.cats;
// export the reducer to the applicaion
export default catSlice.reducer;
