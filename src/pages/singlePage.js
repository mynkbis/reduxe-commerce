import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsSelected } from '../redux/actions/productActions';

const SinglePage = () => {
  const product= useSelector((state)=>state.products)
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const getProductDetails = () => {
    const response = axios.get(`https://fakestoreapi.com/products/${id}`).catch(error => {
    console.log(error)
    })
    
dispatch(ProductsSelected(response.data))
} 

  

  const Loading = () => {
    return (
      <>
        loading...
    </>
  )
}

  const ShowProduct = () => {
    return (
      <>
      </>
    )
  
}
  
  return (
    <div>
      <div>
        {loading? <Loading/> : <ShowProduct/>}
      </div>
    </div>
  )
}

export default SinglePage