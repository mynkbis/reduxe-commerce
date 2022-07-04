import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './cart.css'
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/cartSlice'

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart  = useSelector((state) => state.cart)
  // console.log("from cart", cart);

  useEffect(() => {
    dispatch(getTotals());
  },[dispatch,cart])
  
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleClear = () => {
    // localStorage.clear();
    dispatch(clearCart());
    navigate('/')
    alert("cart is cleared continue shopping")
  }
  
  const handleDecreaseCart = (cartItem) => {
  dispatch(decreaseCart(cartItem))
  }
  
  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  
  return (
    <div className='cart-containter' >  
     <h2>Your cart</h2>{
        cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <div className="start-shopping">
            <Link to="/">              
              <button>Continue shopping</button>
              </Link>
            </div>
            </div>)
          : (
            <div >
            <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
            </div>
              <div className="cardItems">
                {cart.cartItems &&
                  cart.cartItems.map((cartItem, id) => (
                    <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.title.substring(0,12)}/>
                    <div>
                      <h3>{cartItem.title.toString().substring(0,20)}...</h3>
                        <p>{cartItem.description.toString().substring(0,30)}....</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button> 
                      </div>
                      </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      - </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="cart-summary">
                {/* <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div> */}
                  <button onClick={() => handleClear()}>Clear Cart</button>
                  <div className="continue-shopping">
                    <Link to='/'>
                       <span>Continue Shopping</span>
                    </Link>
</div>

          </div>
           
                  
           
      
              </div>
      </div>) }
      </div>
  )
}

export default Cart