import Navbar from './components/Navbar.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Admin from './pages/Admin.js'
import Products from './pages/Products.js'
import Home from './pages/Home.js'
import { Route, Routes} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import UserContext from './utilities/UserContext.js';
import {useState, useEffect} from 'react';
import Logout from './utilities/Logout';
import NonMemberRoutes from './utilities/NonMemberRoutes.js'
import AdminRoutes from './utilities/AdminRoutes.js'
/* toastify alert start*/
import React from 'react';
import { ToastContainer, toast, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* end */
import AdminViewProducts from './pages/AdminViewProducts.js';
import AdminAddProduct from './pages/AdminAddProduct.js';
import AdminEditProduct from './pages/AdminEditProduct.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import ArchiveProduct from './utilities/ArchiveProduct.js'
import ActivateProduct from './utilities/ActivateProduct.js'
import ViewProductDetails from './components/ViewProductDetails.js'
import CheckOut from './pages/CheckOut.js'
import OrderSuccess from './utilities/OrderSuccess.js'
import MemberRoutes from './utilities/MemberRoutes.js'
import Cart from './pages/Cart.js'
import {CartProvider} from './utilities/CartContext.js'



function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const [user, setUser] = useState({
      id: null,
      isAdmin: null
  })

  const notify = () => toast.success('Logged out', {
    transition: Flip,
    position: "top-center",
    autoClose: 750,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
 
  
  const unsetUser = () => {
    localStorage.clear();
    notify();

  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/userdetails`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      /* console.log(data)
      console.log(window.localStorage.length)
      console.log(window.localStorage) */
      if(typeof data._id !== "undefined"){
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })


      } else{
         setUser({
            id: null,
            isAdmin: null
         })
      }

    })
  }, []);

  
  

  useEffect(() => {
   function checkLocalStorage(){
      const item = localStorage.getItem('token');
      if (item === null){
        window.location.reload(false);
      }
    }
    window.addEventListener('storage', checkLocalStorage)

    return () => {
    window.removeEventListener('storage', checkLocalStorage)
    }

  }, [])

  
  return (
 
     <>
      <UserContext.Provider value={{user, setUser, unsetUser}}>
        <CartProvider>
        
          <Navbar />
            <Routes location={background || location}>
              <Route exact path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              <Route element={<AdminRoutes/>}>
                    <Route exact path="/admin" element={<Admin />}/>
                    <Route path="/admin/inventory" element={<AdminViewProducts />} />
                    <Route path="/admin/addproduct" element={<AdminAddProduct />} />
                    <Route path="/admin/inventory/:productId" element={<AdminEditProduct />} />
                    <Route path="/admin/inventory/:productId/archive" element={<ArchiveProduct />} />
                    <Route path="/admin/inventory/:productId/activate" element={<ActivateProduct />} />
              </Route>  

              

              <Route element={<NonMemberRoutes/>}>
                  <Route path="/accounts/login" element={<Login/>} />
                  <Route path="/accounts/register" element={<Register/>} />
              </Route>
              <Route exact path="/products" element={<Products/>} />
             
             
      
              
              <Route path="/logout" element={<Logout />}/>
            </Routes>
            
             
                
           
              <Routes>
                <Route element={<MemberRoutes/>}>
                      <Route path="/products/:productId/:quantity/order" element={<CheckOut />} />
                      <Route path="/ordersuccess" element={<OrderSuccess />} />
                </Route>
              </Routes>
          
            
              <Routes>
                  <Route path="/products/:productId" element={<ViewProductDetails />} />     
              </Routes>

              

              <Routes>
               <Route path="/cart" element={<Cart/>} />
              </Routes>
         

        </CartProvider>
      </UserContext.Provider>
      <ToastContainer
        className="toastBody"
        position="top-right"
        autoClose={750}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        />
    </>
  );
}

export default App;