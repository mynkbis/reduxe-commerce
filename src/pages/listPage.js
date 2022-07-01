import React, { useEffect } from 'react'
import { fetchProducts, getAllProducts } from '../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import ProductCard from '../components/productCard';

const ListPage = () => {
  const dispatch = useDispatch();
  const  products = useSelector(getAllProducts);
console.log("listPage ln 11 ",products)

    useEffect(() => {
      dispatch(fetchProducts())
      
    }, [dispatch])
  
 return (
    <div> 
      from listing pages
   
      <div className='container'>
        {products && products.map((prod, id) => (
          <ProductCard key={id} prod = {prod} />))}
      </div>
    </div>
  )
}

export default ListPage


































// {products && products.map((prod, id) => {
//           return (
//             <div className='card' key={id} onClick={() => handleCard(prod.id)}  >
//               {/* <NavLink to={`/listing/${prod.id}`}  > */}
//                    <h2>{prod.title.substring(0,20)}...</h2>
//                    <img className='imageBox' height="280px" src={prod.image} alt="pro img" />
//                    <h5>${prod.price}</h5>
//                   <button >Add to cart</button>
//               {/* </NavLink> */}
//             </div>)              
//         })}