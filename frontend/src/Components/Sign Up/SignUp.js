import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import googleimg from '../../assets/google.png'
import logo from '../../assets/logo.png'

export default function SignUp() {
  return (
    <div className='SignUp'>
          <img src={logo} alt=""  className='logo'/>
        <div className="SignUpForm">
            <div className="Google">
                <button className='Googlebtn'>
                <img src={googleimg} alt="" />
                    Sign up with Google </button>
            </div>
            <div>
           <input type="name" name='name' id='name' placeholder='Enter username' />
         </div>
        <div>
           <input type="email" name='email' id='email' placeholder='Enter email' />
         </div>
         <div>
           <input type="password" name='password' id='password' placeholder='Enter Password' />
         </div>
         <button className='SignUpBtn' >Sign Up</button>
           <p className='acct'>Already have an account? <Link to='/login'><span>Login</span></Link></p>
         </div>
    </div>
  )
}

