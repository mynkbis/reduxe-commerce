import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productSlice'
import singleProductReducer from '../redux/productSlice'
import  cartReducer from '../redux/cartSlice'

//  const reducer = combineReducers(productReducer,singleProductReducer)

// export const store = configureStore({
//     reducer: {
//         reducer
//     }
// });



export const store = configureStore({
    reducer: {
        products: productReducer,
        cart:cartReducer
        
    },
    
});
