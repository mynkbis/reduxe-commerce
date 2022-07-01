import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";


const initialState = {
    products: [],
    singleProduct:{},
    status: 'idle',
    error: null,
   }

export const fetchProducts = createAsyncThunk('pages/fetchProducts', async () => {
    try {
           const response = await axios.get(baseURL)
      
        return [...response.data];
       
    } catch (error) {
        return error.message;
    }
})


export const fetchSingleProduct = createAsyncThunk('redux/fetchProducts', async (id) => {
  try {
         const response = await axios.get(`${baseURL}/${id}`)
        console.log("prodcut single productSLice ln 29", response)
        return response.data;
       
    } catch (error) {
        return error.message;
    }
})

const productSlice = createSlice({
    name: "products", 
    initialState,
    // reducers: {
    //   singleProduct: (state, { payload }) => {
    //   state.singleProduct = payload;
    //   }
    // },

    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status="loading"   // data didn't loaded
        },
        
        [fetchProducts.rejected]: (state, action) => {
            state.status = "failed"
        },          
        [fetchProducts.fulfilled]: (state, {payload}) => {
         return ({
            ...state, products:payload,
        })
    },
       [fetchSingleProduct.fulfilled]: (state, {payload}) => {
        return ({
              ...state, singleProduct:payload
          }) }  ,            
       
    },
   
});


export const getselectedProduct = (state) => state.products.singleProduct
export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer; 


















//  export const singleProductSlice = createSlice({
//   name: "product", 
//  initialState,
    
//  extraReducers: {
//         [fetchSingleProduct.pending]: (state, action) => {
//             state.status="loading"   // data didn't loaded
//      },
//       [fetchSingleProduct.fulfilled]: (state, {payload}) => {
//         return ({
//               ...state, singleProduct:payload
//           }) }  ,               
//            [fetchSingleProduct.rejected]: (state, action) => {
//          state.status = "failed"
//      },
//               [fetchSingleProduct.fulfilled]: (state, {payload}) => {
//         return ({
//               ...state, singleProduct:payload
//           }) }  ,            
//     }

//  });


// export const { singleProduct } = productSlice.actions;