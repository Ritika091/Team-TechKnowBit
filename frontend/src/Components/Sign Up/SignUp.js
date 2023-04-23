import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function SignUp() {

  const[userName,setUserName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState("");
  const Navigate=useNavigate();
  const postData=()=>{
    fetch("http://localhost:5000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName:userName,
        email:email,
        password:password
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        setMessage(data.error);
        console.log(data.error);
      }
      else{
        console.log(data.message);
        setMessage(data.message);
        Navigate('/login');
      }
    })
    .catch(err=>console.log(err))
  }


  return (
    <div className='SignUp'>
          <img src={logo} alt=""  className='logo'/>
        <div className="SignUpForm">
       <p className='message1'>{message}</p>
            <div>
           <input type="name" name='name' id='name'  placeholder='Enter username' onChange={(e)=>{setUserName(e.target.value)}} />
         </div>
        <div>
           <input type="email" name='email' id='email' placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}/>
         </div>
         <div>
           <input type="password" name='password' id='password' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
         </div>
         <button className='SignUpBtn' onClick={postData} >Sign Up</button>
           <p className='acct'>Already have an account? <Link to='/login'><span>Login</span></Link></p>
         </div>
    </div>
  )
}

