import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getproduct = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products/${id}');
      setProduct(await response.json());
      setLoading(false);
    }
    getproduct()
  })

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
        <img src={product.image } alt={product.title} />
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