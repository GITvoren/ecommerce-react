import {Link, useNavigate} from 'react-router-dom';
import {toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect} from 'react';
import admin from '../assets/css/admin.css';





function AdminSetUserAdmin(){
     const navigate = useNavigate();
     const [isActive, setIsActive] = useState(false);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [adminEmail, setAdminEmail] = useState("");

     const notify = (data) => toast.success(data, {
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

          if(email !== "" && adminEmail !== "" && password !== ""){
               setIsActive(false);
          } else {
               setIsActive(true);
          }

     }, [email, adminEmail, password]);

     

          const setAdmin = async (e) => {
               e.preventDefault();
     try{
          const result = await fetch(`${process.env.REACT_APP_API_URL}/users/setadmin`, {
               headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
               },
               method: 'PATCH',
               body: JSON.stringify({
                    email: email,
                    adminEmail: adminEmail,
                    password: password
               })
          })

          const data = await result.json();

          if(!result.ok){
               setPassword("");
               notifyerror(data);
          } else{
               setEmail("");
               setPassword("");
               setAdminEmail("");
               notify(data);
               navigate('/admin');
          }
     }catch{
          notifyerror('Fetch Error');
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
                                        <label className="console-title">&nbsp;</label><br />
                                        
                                   </div>
                                   <label className="console-label2">Enter Email of the User you want to be an Admin</label>
                                   <div>
                                        <label className="console-label">user's email:</label><br/>
                                        <input 
                                        type="text" 
                                        className="edit-product-input"
                                        placeholder="Input Email Address of User"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}                                  
                                        />
                                   </div>       
                                   <div>
                                        <label className="console-label">admin email:</label><br/>
                                        <input 
                                        type="text" 
                                        className="edit-product-input"
                                        placeholder="Input your Email Address"
                                        value={adminEmail}
                                        onChange={e => setAdminEmail(e.target.value)}                                  
                                        />
                                   </div>       
                                   <div>
                                        <label className="console-label">admin password:</label><br/>
                                        <input 
                                        type="password" 
                                        className="edit-product-input"
                                        placeholder="Enter your Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}                                  
                                        />
                                   </div>       
                              </div>
                              <div>
                              <button onClick={() => navigate(-1)} className="admin-product-btn">&nbsp;&nbsp;CANCEL&nbsp;&nbsp;</button>

                              {isActive
                              ?
                              <button disabled id ="disabledbutton1" className="admin-product-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                              :
                              <button  onClick={setAdmin} className="admin-product-btn">OK</button>
                              }
                              </div>
                         </div>    
                    </div>
               </div>
          </div>
     )
}

export default AdminSetUserAdmin;