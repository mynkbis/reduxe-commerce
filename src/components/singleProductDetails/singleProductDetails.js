
import React from "react"
import { useSelector } from "react-redux"
import { getselectedProduct } from "../../redux/productSlice"
import './singelProductDetails.css'
import { addToCart } from '../../redux/cartSlice';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const SingleProductDetails = () => {
  const prod=useSelector(getselectedProduct)
  // console.log("from single page",prod)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleAddToCart = (prod) => {
    console.log("add cart clicked")
    dispatch(addToCart(prod))
    navigate('/cart')
  }



  return (
      <div className="singleProductContainer">      
          <div className="singleProductContainer1">
              <div>Product Id: {prod.id}</div>
              <div>{prod.title}</div>
             
              <div><img className="singleProductimg" src={prod.image} alt={prod.title} /></div>
          </div>
          <div>Price: ${prod.price}</div>
              <div>{prod.description}</div>
              <div>Category: {prod.category}</div>
              <button onClick={()=>handleAddToCart(prod)}>Add to cart</button>
         
      </div>
  )
}
