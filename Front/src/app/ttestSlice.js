import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getcats } from "./ttestAPI";

// State - data (init)
const initialState = {
  myAr: [2, 3, 4],
  mmm: "mmmmm",
};
// async (1)
// simple async method (component can call it...)
// export const getttestsAsync = createAsyncThunk("ttest/getttests", async () => {
//   const response = await getttests();
//   return response.data;
// });

export const ttestSlice = createSlice({
  name: "ttest",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.mmm);
      console.log(state);
    },
  },
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    // builder.addCase(getttestsAsync.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.ttests = action.payload;
    // });
  },
});

// export sync method
export const { addToCart } = ttestSlice.actions;

// export any part of the state
export const selectttests = (state) => state.ttest.ttests;
// export the reducer to the applicaion
export default ttestSlice.reducer;
