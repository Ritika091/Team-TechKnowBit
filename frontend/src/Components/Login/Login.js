import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import googleimg from '../../assets/google.png'
import logo from '../../assets/logo.png'
export default function Login() {
  return (
    <div className='Login'>
          <img src={logo} alt=""  className='logo'/>
        <div className="LoginForm">
          
            <div className="Google">
                <button className='Googlebtn'>
                <img src={googleimg} alt="" />
                    Sign in with Google </button>
            </div>
        <div>
           <input type="email" name='email' id='email' placeholder='Enter email' />
         </div>
         <div>
           <input type="password" name='password' id='password' placeholder='Enter Password' />
         </div>
         <button className='LoginBtn' >Login</button>
           <p className='noacct'>Don't have an account? <Link to='/signup'><span>SignUp</span></Link></p>
         </div>
    </div>
  )
}
