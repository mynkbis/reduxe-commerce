import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './productComponents.css';
import { Link } from 'react-router-dom';

const ProductComponents = () => {
    const product = useSelector((state) => state.allProducts.products);  
    
    // const { id, title } = product[0];
    const productRender = product.map((prod) => {
        const { id, title, price, image, category } = prod;
        return (
            <div className='container'>
                <Link to={`/listing/${id}`}>
             <div className='mainBox' key={id}>
              <div className='secondaryBox'>
                    <div className='titleBox'>{prod.title.substring(0,20)}...</div>
                    <div className='imagebox'>
                        
                        <img src={ image } alt={title} />
                  </div>
                    <div className='priceBox'>${price}</div>
                     <div>{category }</div>
                      </div>        
              </div>
          </Link>
            </div>
        )
    })

  return (
      <div>
          {productRender}        
    </div>
  )
}

export default ProductComponents