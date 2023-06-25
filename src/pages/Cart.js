import '../assets/css/cart.css';
import CartContext from '../utilities/CartContext.js';
import {useContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CartItem from '../components/CartItem.js';
import {toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cart(){
     const navigate = useNavigate();
     const {cartItems, setCart} = useContext(CartContext);
     const notify = () => toast.info('Currently making a new and better Ecommerce API. Coming soon 🙏', {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

     const totalPrice = cartItems.reduce((price, item) => price + (item.quantity * item.price), 0)

     useEffect(() => {
          console.log(cartItems)
          console.log(totalPrice)
     })
     




     return(
                    <div className="modal2">
                    <div className="overlay2" onClick = {()=> navigate(-1)}></div>  
                         <div className="cart-container">
                         <i className="cart-close fa fa-times" onClick={() => navigate(-1)} />
                              <h2>Cart</h2>
                              <br />
                                   {
                                   cartItems.length === 0 && 
                                   <div className="empty-cart">
                                        <h1>Cart is Empty</h1>
                                   </div>
                                   }

                                   <div className="cart-itemlist">
                                        {cartItems.map((item) => (
                                             <CartItem key={item._id} cartitemdata= {item}/>
                                        ))}
                                   </div>
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />
                                   <br />

                                   <div className="cart-bottom">
                                        <h3>Total: <span>&#8369;{totalPrice}</span></h3>
                                        <div className="checkout-btn-cart">
                                             {cartItems.length === 0 ?
                                             <button disabled id="disabledbutton5">CHECKOUT</button>
                                             :
                                             <button onClick={()=> navigate('/checkout')}>CHECKOUT</button>
                                             }
                                             
                                        </div>
                                   </div>    
                         </div>
                    </div>
                 
                    
     
              
     )
}




export default Cart;