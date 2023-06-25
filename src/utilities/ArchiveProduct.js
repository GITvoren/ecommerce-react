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

     fetch(`${process.env.REACT_APP_API_URL}/${productId}/archive`, {
          method: 'PATCH',
          headers: {
               'Content-type': 'Application/json',
               Authorization : `Bearer ${localStorage.getItem('token')}`
          }
     })
     .then(res => {
          if(!res.ok)
          throw Error("Something went wrong.");

          return res.json();
     })
     .then(data => {
               notify()
               navigate("/admin/inventory")
               /* const timeout = setTimeout(() => {
                    window.location.reload(false);    
                  }, 2000);
                  return () => {
                    clearTimeout(timeout);
                  };  */
          })
     .catch(err => alert(err))
}, [])

     return(
          <div>
             {/*  <Navigate to="/admin/inventory" /> */}
          </div>
     )
}

export default ArchiveProduct;