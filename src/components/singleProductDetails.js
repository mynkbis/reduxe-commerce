
import React from "react"
import { useSelector } from "react-redux"
import { getselectedProduct } from "../redux/productSlice"
import './singelProductDetails.css'
export const SingleProductDetails = () => {
  const productSingle=useSelector(getselectedProduct)
console.log(productSingle)
  return (
      <div className="singleProductContainer">      
          <div className="singleProductContainer1">
              <div>Product Id: {productSingle.id}</div>
              <div>{productSingle.title}</div>
             
              <div><img className="singleProductimg" src={productSingle.image} alt={productSingle.title} /></div>
          </div>
          <div>Price: ${productSingle.price}</div>
              <div>{productSingle.description}</div>
              <div>Category: {productSingle.category}</div>
              <button>Add to cart</button>
         
      </div>
  )
}
