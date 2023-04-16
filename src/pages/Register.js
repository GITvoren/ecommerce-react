import register from '../assets/css/register.css';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){
     const notify= () => toast.success("Account created successfully" , {
          transition: Slide,
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          });

     const [email, setEmail] = useState("")
     const [firstName, setFirstName] = useState("")
     const [lastName, setLastName] = useState("")
     const [mobileNo, setMobileNo] = useState("")
     const [password1, setPassword1] = useState("")
     const [password2, setPassword2] = useState("")
     const [isActive, setIsActive] = useState(true)
     const [errorMessage, setErrorMessage] = useState("")
     const [hasError, setHasError] = useState(false)

     const navigate= useNavigate();

     useEffect(() => {

          if((email !== "" && password1 !== "" && password2 !== "" && firstName !== "" && lastName !== "" && mobileNo !== "" && ( password1 === password2) && (password1.length > 7) && (mobileNo.length >= 11) && (email.length >= 10)))
          {
               setIsActive(true);
          } else {
               setIsActive(false);
          }

     }, [email, password1, password2, firstName, lastName, mobileNo])

     function checkEmailThenRegister(e){
          e.preventDefault()

          fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
               method: 'POST',
               headers: {
                    'Content-type': 'application/json'
               },
               body: JSON.stringify({
                    email: email
               })
               
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
          if(data === true){
          setHasError(true)
          setErrorMessage("An account with this email address already exists.")
          setEmail("")
          setPassword1("")
          setPassword2("")
          } else{
          registerUser();
          
          }
      })           
 }

     function registerUser(){
          fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
               method: 'POST',
               headers: {
                    'Content-type': 'application/json'
               },
               body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    mobileNo: mobileNo,
                    password: password1
               })
               
          })

          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data === true){
                    notify();

                    navigate('/accounts/login');

               } else {
                    alert("Something went wrong. Please try again later. ")
               }
          })
     }


     return(
               <div className="container">
                    <div className="register-container">
                         <h1>Create an Account</h1>
                         <form className="register-form">
                              
                              <div>
                                   <label htmlFor="firstName">FIRST NAME</label><br />
                                   <input type="text" 
                                   value={firstName} 
                                   onChange= {e => setFirstName(e.target.value)}
                                   required
                                   
                                   id="firstName"
                                   />   
                              </div>
                              <div>
                                   <label htmlFor="lastName">LAST NAME</label><br />
                                   <input type="text" 
                                   value={lastName} 
                                   onChange= {e => setLastName(e.target.value)}
                                   required
                                   id="lastName"
                                   />
                                   
                              </div>
                              <div>
                                   <label htmlFor="email">EMAIL</label><br />
                                   <input type="email" 
                                   value={email} 
                                   onChange= {e => setEmail(e.target.value)}
                                   required
                                   id="email"
                                   placeholder="name@example.com" 
                                   className={hasError ? "text-field-with-error" : " "}
                                   />
                              </div>
                              {
                              errorMessage 
                              && (<p className="error2"> {errorMessage} </p>)
                              
                              }
                              <div>
                                   <label htmlFor="mobileNo">MOBILE NO.</label><br />
                                   <input type="number" 
                                   value={mobileNo} 
                                   onChange= {e => setMobileNo(e.target.value)}
                                   id="mobileNo"
                                   placeholder="0909-808-7070"
                                   required/>
                              </div>
                              <div>
                                   <label htmlFor="password1">PASSWORD</label><br />
                                   <input type="password" 
                                   value={password1} 
                                   onChange= {e => setPassword1(e.target.value)}
                                   id="password1"
                                   placeholder="Enter a minimum of 8 characters"
                                   required
                                   />
                              </div>
                              <div>
                                   <label htmlFor="password2">CONFIRM PASSWORD</label><br />
                                   <input type="password" 
                                   value={password2} 
                                   onChange= {e => setPassword2(e.target.value)}
                                   required
                                   id="password2"
                                   placeholder="Confirm password"
                                   /><br /><br />
                              </div>
                              <div>
                              
                              {
                              isActive
                              ?
                              <button onClick={checkEmailThenRegister}>CREATE ACCOUNT</button>
                              :
                              <button id="disabled-btn" disabled>CREATE ACCOUNT</button>
                              }
                                   <label>Already have an account?</label> <Link to="/accounts/login" className="login-here-link">Sign in</Link>
                              </div>  
                         </form>         
                    </div>
               </div>
          )
}

export default Register;