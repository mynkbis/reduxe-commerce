import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSingleProduct } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';
const ProductCard = (props) => {
    const { prod } = props;
    const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleCard = (id) => {
 dispatch(fetchSingleProduct(id))
      navigate(`/listing/${id}`)
      // console.log(id)
    }
  const handleAddToCart = (prod) => {
    console.log("add cart clicked")
    dispatch(addToCart(prod))
    navigate('/cart')
  }
  
  return (
    <div>  <div className='card' key={props.id} >        
                 <h2>{prod.title.substring(0,20)}...</h2>
                  <img className='imageBox' height="280px" src={prod.image} alt="pro img" onClick={() => handleCard(prod.id)} />
                   <h5>${prod.price}</h5>
                 <button onClick={()=>handleAddToCart(prod)} >Add to cart</button>
              </div></div>
  )
}

export default ProductCard