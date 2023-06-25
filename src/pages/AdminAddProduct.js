import admin from '../assets/css/admin.css'
import AdminProductCard from '../components/AdminProductCard.js'
import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import {toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminAddProduct(){

     const [name, setName] = useState("")
     const [description, setDescription] = useState("")
     const [price, setPrice] = useState(0)
     const navigate = useNavigate();
     const [isActive, setIsActive] = useState(true)
     const notify = () => toast.success('Successfully added a new product', {
          transition: Slide,
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          });


     useEffect(() => {
          if(name !== "" && description !== "" && price > 0){
               setIsActive(false)
          } else{
               setIsActive(true)
          }
    }, [name, description, price])


    function addProduct(){
     fetch(`${process.env.REACT_APP_API_URL}/products/`, {
          method: 'POST',
          headers:{
               'Content-type': 'Application/json',
               Authorization : `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
               name: name,
               description: description,
               price: price
          })

     })
     .then(res => {
          if(!res.ok)
          throw Error("Something went wrong");

          return res.json();
     })
     .then(data => {
          notify();
          navigate('/admin/inventory');
     })
     .catch(err => alert(err));

    }

     return(
          <div className="container">
               <h1 className="admin-page-title">ADMIN DASHBOARD</h1>
               <div className="admin-product-container">
                    <div className="admin-buttons">
                         &nbsp;<Link to="/admin/addproduct"><button>ADD PRODUCT</button>&ensp;</Link>
                         <Link to="/admin/inventory"><button>VIEW ALL PRODUCTS</button>&ensp;</Link>
                         <Link to="/admin"><button>SET AN ADMIN</button>&ensp;</Link>
                          <Link to="/admin"><button>VIEW ORDERS</button></Link>
                    </div>
                    <div>
                         <div className="admin-edit-add-product-card">
                              <div>
                                   <div>
                                        <label className="console-title">&nbsp;</label><br />
                                        
                                   </div>   
                                   <div>
                                        <label className="console-label">name:</label><br/>
                                        <input 
                                        type="text" 
                                        className="edit-product-input"
                                        value={name} 
                                        onChange= {e => setName(e.target.value)}
                                        />
                                   </div>
                                   <div>
                                        <label className="console-label">description:</label><br/>
                                        <textarea 
                                        type="text" 
                                        className="edit-product-input"
                                        value={description}
                                        onChange= {e => setDescription(e.target.value)}
                                        />
                                        input
                                   </div>  
                                   <div>
                                        <label className="console-label">price:</label><br/>
                                        <input 
                                        className="edit-product-input" 
                                        type="number" 
                                        value={price} 
                                        onChange= {e => setPrice(e.target.value)}
                                        />
                                   </div>          
                              </div>
                              <div>
                              <button onClick={() => navigate(-1)} className="admin-product-btn">&nbsp;&nbsp;CANCEL&nbsp;&nbsp;</button>

                              {isActive
                              ?
                              <button disabled id ="disabledbutton1" className="admin-product-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> 
                              :
                              <button onClick={addProduct} className="admin-product-btn">OK</button>
                              }
                              </div>
                         </div>    
                    </div>
               </div>
          </div>
     )
}

export default AdminAddProduct;