import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import {toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function ArchiveProduct(){

     const {productId} = useParams();
     const navigate = useNavigate();
     const notify = () => toast.success(`Successfully archived product ${productId}`, {
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

          

     useEffect( () => {

     console.log(productId)
     fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/archive`, {
          method: 'PUT',
          headers: {
               'Content-type': 'Application/json',
               Authorization : `Bearer ${localStorage.getItem('token')}`
          }
     })
     .then(res => res.json())
     .then(data => {
          console.log(data);
          if(data === true){
               
               notify()
               navigate("/admin/inventory")
               /* const timeout = setTimeout(() => {
                    window.location.reload(false);    
                  }, 2000);
                  return () => {
                    clearTimeout(timeout);
                  };  */
          } else{
               alert('Something went wrong. Try again or contact us to let us know.')
          }
     })
}, [])

     return(
          <div>
             {/*  <Navigate to="/admin/inventory" /> */}
          </div>
     )
}

export default ArchiveProduct;