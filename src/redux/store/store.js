import productReducer from '../productSlice'
import  cartReducer from '../cartSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart:cartReducer
        
    },
    
});
