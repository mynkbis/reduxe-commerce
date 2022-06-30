import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import '../App.css'

const ListPage = () => {
  const dispatch = useDispatch();

    const  products = useSelector((state) => state.products.product);
console.log("list page",products)

    useEffect(() => {
      dispatch(fetchProducts())
    
      },[dispatch])


  return (
    <div>
      from listing pages
   
      <div className='container'>
        {products && products.map((prod, id) => {
          return (
               <NavLink to={`/listing/${prod.id}`} className='card' >
                   <h2>{prod.title.substring(0,20)}...</h2>
                   <img className='imageBox' height="280px" src={prod.image} alt="pro img" />
                   <h5>${prod.price}</h5>
                  <button>Add to cart</button>
                          </NavLink>)              
        })}
      </div>
    </div>
  )
}

export default ListPage