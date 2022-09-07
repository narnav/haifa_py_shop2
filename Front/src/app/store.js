import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catSlice";
import loginReducer from "./loginSlice";
import noteReducer from "./noteSlice";
import orderReducer from "./orderSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    note: noteReducer,
    cat: catReducer,
    product: productReducer,
    order: orderReducer,
  },
});
