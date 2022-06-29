import React, { useEffect, useState } from 'react'
import "./listPage.css"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponents from '../components/productComponents'
import {ProductsSet} from '../redux/actions/productActions'


const ListPage = () => {

  const products = useSelector((state) => state);
const dispatch=useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get(" https://fakestoreapi.com/products").catch(error => {
      console.log(error.message)
    }) 
    dispatch(ProductsSet(response.data))
  }

  useEffect(() => {
    fetchProducts()
  })
console.log("products from api",products)
  return (
    <>
      <div>
       <ProductComponents />
      </div>
  </>
)
}

export default ListPage







  //   const [data, setData] = useState('')
  //   const [loading, setLoading]=useState(false)
  //   let componentMounted = true;
  //   useEffect(() => {
  //     const getproducts = async () => {
  //       setLoading(true);
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       if (componentMounted) {
  //         setData(await response.clone().json())
  //         setLoading(false)
  //         console.log(data);  
  //       }
  //       return () => {
  //            componentMounted=false
  //          }

  //     }
  //     getproducts();
  //   },[])

  //   const Loading = () => {
  //     return (
  //       <>
  //         Loading...
  //       </>
  //     )
     
  //   }

  //   const ShowProducts = () => {
  //     return (
  //       <>
  //         <div>
  //           {data.map((product) => {
  //             return (
  //               <NavLink to={`/listing/${product.id}`} className='card' >
  //                 <h2>{product.title.substring(0,20)}...</h2>
  //                 <img className='imageBox' height="280px" src={product.image} alt="pro img" />
  //                 <h5>${product.price}</h5>
  //                 <button>Add to cart</button>
  //                         </NavLink>)
  //       })}
  // </div>
  //       </>
     
  // )   }

  //   return (
  //     <div>
  //       <div>
  //         {loading ? <Loading/> : <ShowProducts/>}
  //       </div>
  //     </div>
  //   )
  // }
