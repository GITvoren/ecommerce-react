import { Navigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import UserContext from './UserContext';
import CartContext from './CartContext';


function Logout(){
     const {unsetUser, setUser} = useContext(UserContext);
     const {setCartItems} = useContext(CartContext);
    
     unsetUser();
     
     useEffect(() => {
   
          setUser({id: null, isAdmin: null});
          setCartItems([]);
          
     })

     return (
     
               
          <Navigate to = "/accounts/login" />
          
          
     )
}

export default Logout;