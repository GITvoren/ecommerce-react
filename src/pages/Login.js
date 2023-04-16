import login from '../assets/css/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../utilities/UserContext.js'
import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login(){
     const navigate = useNavigate();
     const notify = () => toast.success('Login success', {
          
          position: "top-center",
          autoClose: 750,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          });

     const {user, setUser} = useContext(UserContext)
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [errorMessage, setErrorMessage] = useState("")
     const [isActive, setIsActive] = useState(true)

     useEffect(() => {

          if(email !== "" && password !== ""){
               setIsActive(true);
          } else {
               setIsActive(false);
          }

     }, [email, password])

     

     function loginUser(e){
          e.preventDefault();

          fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
               method: 'POST',
               headers: {
                    'Content-type': 'application/json'
               },
               body: JSON.stringify({

                    email: email,
                    password: password

               })
     })
     .then(res => res.json())
     .then(data => {
          console.log(data)
          if(typeof data.access !== "undefined"){

               localStorage.setItem('token', data.access)
               retrieveUserDetails(data.access);
               notify();
               navigate('/');
          } else {
               
               setErrorMessage("Incorrect email or password. Please try again.")
               
          }
     })

     setEmail("");
     setPassword("");


}

const retrieveUserDetails = (dataDotAccess_usertoken) => {
     fetch(`${process.env.REACT_APP_API_URL}/users/userdetails`, {
          headers: {
               Authorization: `Bearer ${dataDotAccess_usertoken}`
          }
     })
     .then(res => res.json())
     .then(data => {
          console.log(data); 

          setUser({
               id: data._id,
               isAdmin: data.isAdmin
          })

     })
}

 

     return(
     <div className="container">
          <div className="login-container">
               <h1>Account Login</h1>

            <form className="login-form">
            {
            errorMessage 
            && 
            (<p className="error"> {errorMessage} </p>)
            }
               <div>
                    <label htmlFor="email"> EMAIL</label><br />
                    <input 
                    type="email"
                    value= {email}
                    onChange = {e => setEmail(e.target.value)}
                    required
                    id="email"
                    />
               </div>
                 
               <div>
                    <label htmlFor="password">PASSWORD</label><br />
                    <input 
                    type="password" 
                    value= {password}
                    onChange = {e => setPassword(e.target.value)}
                    required
                    id="password"
                    /> 
                    <br /><br />
               </div>

               <div>
                    {
                    isActive
                    ?
                     <button onClick={loginUser}> SIGN IN</button>
                    :
                     <button disabled id="disabled-btn2"> SIGN IN</button>
                    }
                     <Link to="/accounts/register"><button>CREATE AN ACCOUNT</button></Link>
              </div>  
            </form>
          </div>
      </div>
  
     )
}

export default Login;