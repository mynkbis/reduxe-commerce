import React, { useEffect, useState } from 'react'
import "./listPage.css"
const ListPage = () => {

  const [data, setData] = useState('')
  const [loading, setLoading]=useState(false)
  let componentMounted = true;
  useEffect(() => {
    const getproducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json())
        setLoading(false)
        console.log(data);  
      }
      return () => {
           componentMounted=false
         }

    }
    getproducts();
  },[])

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
     
  }

  const ShowProducts = () => {
    return (
      <>
        <div>
          {data.map((product) => {
            return (
              <div className='card'>
                <h2>{product.title}</h2>
                <img className='imageBox' src={product.image} />
                <h5>${product.price}</h5>
                <button>Add to cart</button>
                
        </div>)
      })}
</div>
      </>
     
)   }

  return (
    <div>
      <div>
        {loading ? <Loading/> : <ShowProducts/>}
      </div>
    </div>
  )
}

export default ListPage
