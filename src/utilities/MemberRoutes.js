import {Outlet} from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../utilities/UserContext.js';
import Login from '../pages/Login.js';



const MemberRoutes = () =>{

     const {user} = useContext(UserContext)

     return(
          (user.id !== null)
          ?
          <Outlet/>
          :       
          <Login />
     )
}




export default MemberRoutes;