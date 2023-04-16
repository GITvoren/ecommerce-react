import { Navigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import UserContext from './UserContext';


function Logout(){
     const {unsetUser, setUser} = useContext(UserContext)
    
     unsetUser();
     
     useEffect(() => {
   
          setUser({id: null, isAdmin: null})
          
     })

     return (
     
               
          <Navigate to = "/accounts/login" />
          
          
     )
}

export default Logout;