import {ActionTypes} from '../contants/actionTypes'

export const ProductsSet = (products) => {
    return {
        type: ActionTypes.productSet,
        payload: products
    }
}

export const ProductsSelected = (product) => {
    return {
        type: ActionTypes.productSelected,
        payload: product
    }
}