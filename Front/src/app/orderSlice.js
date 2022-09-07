import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendOrders } from "./orderAPI";
import jwt_decode from "jwt-decode";

// State - data (init)
const initialState = {
  myOrders: [],
};

export const sendOrderAsync = createAsyncThunk(
  "order/sendOrders",
  async (obj) => {
    // console.log("bef");
    // console.log(obj);
    // console.log("aft");
    // let token = "";
    // let myCart = "";
    const response = await sendOrders(obj.myCart, obj.token);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state);
      console.log(action.payload);
    },
    setFullScreen: (state, action) => {
      console.log(action.payload);
      state.fullScreen = action.payload;
    },
  },
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    // builder.addCase(illed, (state, action) => {
    //   console.log(action.payload);
    //   if (action.payload.access) {
    //     state.token = action.payload.access;
    //     state.logged = true;
    //     state.userName = jwt_decode(action.payload.access).username;
    //     state.email = jwt_decode(action.payload.access).eeemail;
    //     // console.log( state.email)
    //   }
    // });
  },
});

// export sync method
export const { addToCart, setFullScreen } = orderSlice.actions;

// export any part of the state
export const selectLogged = (state) => state.order.logged;
export const selectFullScreen = (state) => state.order.fullScreen;
export const selectEmail = (state) => state.order.email;
export const selectUserName = (state) => state.order.userName;
export const selectToken = (state) => state.order.token;
// export the reducer to the applicaion
export default orderSlice.reducer;
