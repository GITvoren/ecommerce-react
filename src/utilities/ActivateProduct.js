import { useNavigate, Navigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ActivateProduct(){

     const {productId} = useParams();
     const navigate = useNavigate();
     const notify = () => toast.success(`Successfully activated product ${productId}`, {
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

     useEffect(()=> {
          fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/activate`, {
               method: 'PUT',
               headers: {
                    'Content-type': 'Application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
               }
          })
          .then(res => res.json())
          .then(data => {
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
     })
     return(
          <div>
               {/* <Navigate to="/admin/inventory" /> */}
          </div>
     )
}

export default ActivateProduct;