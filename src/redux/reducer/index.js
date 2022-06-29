// multiple reducer in on file

import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./productReducer";
 
const reducers = combineReducers({
    allProducts: ProductReducer,
    product:SelectedProductReducer,
})

export default reducers;