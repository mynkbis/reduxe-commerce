import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";


const initialState = {
    product: [],
    status: 'idle',
    error: null,
}

export const fetchProducts = createAsyncThunk('pages/fetchProducts', async (dispatch, getState) => {
      try {
        const response = await axios.get(baseURL)
      
        return [...response.data];
       
    } catch (error) {
        return error.message;
    }
})

const productSlice = createSlice({
    name: "product", 
    initialState,
    // reducers: {
    //     addProduct: (state, { payload }) => {
    //         state.product = payload;
        
    //     }
    // },

    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status="loading"   // data didn't loaded
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = "success"
            state.product=action.payload   // data loaded from api
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status="failed"}
    }
});



export const { addProduct } = productSlice.actions;
export const getAllProducts=(state)=>state.products.product
export default productSlice.reducer; 