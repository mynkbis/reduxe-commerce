import { ActionTypes } from "../contants/actionTypes"

const initialState = {
    // products: [{
    //     id: 1, 
    //     title: "shirts",
    //     category: "cloths"
    // }]
products:[  ]

}


export const ProductReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.productSet:
    return{ ...state, products:payload}
            // return state;
        default: return state;
      }
}


export const SelectedProductReducer = (state={}, { type, payload }) => {
    switch (type) {
        case ActionTypes.ProductsSelected:
    return{ ...state, ...payload}
            // return state;
        default: return state;
      }
}

