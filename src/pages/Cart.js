import '../assets/css/cart.css'
import CartContext from '../utilities/CartContext.js'
import {useContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import pr300x200 from '../assets/images/pr300x200.png';
import CartItem from '../components/CartItem.js'



function Cart(){
     const navigate = useNavigate();
     const [quantity, setQuantity] = useState(1)
     const {items} = useContext(CartContext)
     const [cartItems, setCartItems] = useState([])

     



     useEffect(()=>{
          setCartItems(items.map((item)=>{
               
               
               return(
                    <CartItem key={item._id} itemdata= {item} />
               )
          }))
     }, [])
   

 
 


     return(
                    <div className="modal2">
                    <div className="overlay2" onClick = {()=> navigate(-1)}></div>  
                         <div className="cart-container">
                         <i className="cart-close fa fa-times" onClick={() => navigate(-1)} />
                              <h2>Cart</h2>
                              <br />
                                   <div className="cart-itemlist">
       
                                        {cartItems}
               
                                    
                                   </div>
                                  
                             
                                   
                         </div>
                    </div>
                 
                    
     
              
     )
}




export default Cart;