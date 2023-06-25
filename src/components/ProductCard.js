import '../assets/css/products.css'
import PropTypes from 'prop-types'
import pr300x200 from '../assets/images/pr300x200.png';
import React, { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

function ProductCard({activeproductdata}){

     const location = useLocation();
     const [ modal, setModal ] = useState(false);
     const toggleModal = () => {
          setModal(true)
          if(modal === true){
               document.body.classList.add('active-modal')
          } else{
               document.body.classList.add('active-modal')
          }
     }

     const {name, price, _id, image} = activeproductdata


     return(

               <div className="product-card">
                    <img className="product-image" src={image} alt="product img"></img>

                    <h5 className="product-style">&nbsp;&nbsp;&nbsp;&nbsp;{name}</h5>
                    <div className="product-detail">        
                         
                         <h3 className="product-style">&#8369;{price}</h3>
                         <Link to ={`/products/${_id}`} state={{ background: location }}><button id="detail-btn" onClick={toggleModal}>DETAILS</button></Link>
                         <Outlet/>
                    </div>
                 </div>
                )
          }

ProductCard.propTypes = {
     product: PropTypes.shape({
         name: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired
     })
 }

export default ProductCard;


