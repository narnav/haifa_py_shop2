import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getproducts } from './productAPI';

// State - data (init)
const initialState = {
    products: []
};
// async (1)
// simple async method (component can call it...)
export const getproductsAsync = createAsyncThunk(
    'product/getproducts',
    async (cid) => {
        const response = await getproducts(cid);
        return response.data;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(getproductsAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.products= action.payload
            });
    },
});

// export sync method
export const { logout } = productSlice.actions;

// export any part of the state
export const selectproducts = (state) => state.product.products;
// export the reducer to the applicaion
export default productSlice.reducer;
