import { useNavigate, useParams, Link } from "react-router-dom";
import product from '../assets/images/product.PNG';
import '../assets/css/modal.css'
import React, {useState, useEffect, useContext} from 'react';
import CheckOut from '../pages/CheckOut.js'
import CartContext from '../utilities/CartContext.js'



function ViewProductDetails(){
     const navigate = useNavigate();
     const [name, setName] = useState("")
     const [description, setDescription] = useState("")
     const [price, setPrice] = useState(0)
     const [url, setUrl] = useState("")
     const [id, setId] = useState("")
     const [ modal, setModal ] = useState(true);
     const {addToCart, cartItems} = useContext(CartContext)
     const [product, setProduct] = useState({})

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
     

 
    

     const toggleModal = () => {
          setModal(false)
          if(modal){
               document.body.classList.remove('active-modal')
          }  else{
               document.body.classList.remove('active-modal')
          }
     }

     const {productId} = useParams();
     
     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
          .then(res => res.json())
          .then(data => {
               setName(data.name)
               setPrice(data.price)
               setUrl(data.url)
               setDescription(data.description)
               setId(data._id)
               setProduct(data)
          })

     }, [productId])


     return(
          <>
               {modal &&(
                    <div className="modal">
                         <div className="overlay" onClick={ () => {navigate(-1); toggleModal(); }}></div>
                              {/* content start */}
                                   <div className="modal-card">
                                   <i className="modal-close fa fa-times" onClick={ () => {navigate(-1); toggleModal(); }}></i>
                                   <div className="view-panel">
                                        <img className="view-product-image" src={url} alt="product"></img>
                                        <div className="view-right-panel">
                                             <h5 className="view-product-style">&nbsp;&nbsp;&nbsp;&nbsp;{name}</h5>
                                             <p>
                                                  {description}
                                             </p>
                                             <h3 className="view-product-style">&#8369;{price}</h3> 

                                             <div className="increment-div">
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
                                                  ></input>
                                                  <i className="increment-btn fa fa-plus" onClick={addQuantity}></i>
                                             </div>
                                             
                                             <div className="buy-btns">
                                                  <Link to={`/products/${id}/${quantity}/order`}><button className="add-to-cart-btn" onClick={() =>toggleModal()}>BUY NOW</button></Link>   
                                                  <Link to={`/products`}><button className="add-to-cart-btn" onClick={() =>{addToCart(product); toggleModal()}}>ADD TO CART</button></Link>   
                                             </div>
                                          
                                        </div>
                                   </div>         
                              {/* content end */}
                         </div>
                    </div>
               )}
          </>
     )
}


export default ViewProductDetails;