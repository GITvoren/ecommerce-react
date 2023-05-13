import '../assets/css/cart.css'
import pr300x200 from '../assets/images/pr300x200.png';
import {useState} from 'react'

function CartItem(){
     const [quantity, setQuantity] = useState(1)
     const addQuantity = () =>{
          if(quantity > 0)
          setQuantity(quantity + 1)
     }

     const subtractQuantity = () => {
          if(quantity > 1){
               setQuantity(quantity -1)
          }
     }

     return(
          <div className="cart-item">
               <h4>Product Name</h4>
               <div className="image-increment-flexrow">     
                 <img src={pr300x200} alt="item-img" />   
                    <div className="increment-div2">
                      <i className="increment-btn fa fa-minus" onClick={subtractQuantity}></i>
                    <input
                         onKeyDown= {function(e) {
                         e.preventDefault();
                         return false;
                         }}
                         type="number" 
                         className="quantity-btn" 
                         value={quantity}
                         onChange={e => setQuantity(e.target.value)}
                         />
                         <i className="increment-btn fa fa-plus" onClick={addQuantity}></i>
                    </div>
               </div>
               <h4>P1231</h4>
               

          </div>
     )
}

export default CartItem;