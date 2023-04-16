import {Outlet} from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../utilities/UserContext.js';
import Home from '../pages/Home.js';



const AdminRoutes = () =>{

     const {user, setUser} = useContext(UserContext)

     return(

          ((user.id !== null) && (user.isAdmin === true))
          ?
          <Outlet />
          :       
          <Home />
     )
}




export default AdminRoutes;