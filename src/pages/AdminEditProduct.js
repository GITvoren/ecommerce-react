import '../assets/css/admin.css'
import {Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import {toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminEditProduct(){
     const {productId} = useParams();

     const [name, setName] = useState("")
     const [description, setDescription] = useState("")
     const [price, setPrice] = useState(0)

     const [isActive, setIsActive] = useState(true)

     const navigate = useNavigate();
     const notify = () => toast.success(`Successfully updated details of product ${productId}`, {
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

     const notifyerror = (data) => toast.error(data, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
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

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
          .then(res => res.json())
          .then(data => {

                    setName(data.name);
                    setDescription(data.description);
                    setPrice(data.price);

               })
          }, [productId])


     async function editDetails(){
          const result = await fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
               method: 'PUT',
               headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               },
               body: JSON.stringify({
                    name: name,
                    description: description,
                    price: price
               })
          })

          const data = await result;

          if(!result.ok){
               notifyerror(data)
          } else{
               notify();
               navigate("/admin/inventory");
          }
     }

     return(
          <div className="container">
               <h1 className="admin-page-title">ADMIN DASHBOARD</h1>
               <div className="admin-product-container">
                    <div className="admin-buttons">
                    &nbsp;<Link to="/admin/addproduct"><button>ADD PRODUCT</button>&ensp;</Link>
                         <Link to="/admin/inventory"><button>VIEW ALL PRODUCTS</button>&ensp;</Link>
                         <Link to="/admin/setadmin"><button>SET AN ADMIN</button>&ensp;</Link>
                          <Link to="/admin/orders"><button>VIEW ORDERS</button></Link>
                    </div>
                    <div>
                         <div className="admin-edit-add-product-card">
                              <div>
                                   <div>
                                        <label className="console-label">_id:</label><br/>
                                        <span className="console-string">'{productId}'</span>
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
                              <button disabled id ="disabledbutton2" className="admin-product-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> 
                              :
                              <button onClick={editDetails}className="admin-product-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                              }
                              
                              </div>
                         </div>            
                    </div>
               </div>
          </div>
     )
}

export default AdminEditProduct;