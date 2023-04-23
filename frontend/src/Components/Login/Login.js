import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function Login() {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const Navigate=useNavigate();
  const[message,setMessage]=useState("");

  const LoginData=()=>{
    fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
        setMessage(data.error);
       console.log(data.error);
      }
      else{
        setMessage(data.message);
        console.log(data)
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("users",JSON.stringify(data.userDetails))
        Navigate('/');
       console.log(data.message);
  }
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='Login'>
          <img src={logo} alt=""  className='logo'/>
        <div className="LoginForm">
          <div className='logoDiv'>
          <img src={logo} alt=""  className='logoform'/>
          </div>
       
            <p className='message'>{message}</p>
        <div>
           <input type="email" name='email' id='email' placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/>
         </div>
         <div>
           <input type="password" name='password' id='password' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
         </div>
         <button className='LoginBtn' onClick={LoginData}>Login</button>
           <p className='noacct'>Don't have an account? <Link to='/signup'><span>SignUp</span></Link></p>
         </div>
    </div>
  )
}
