import React from 'react'
import './Logout.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Logout() {
    const navigate=useNavigate();
  return (
    <div className="darkBg">
    <div className="centered">
    <div className='Logout'>
    <div className="Header">
        <img src={logo} alt="" />
            <h3 className='heading'>Log out ?</h3>
        </div>
        <div className="ModalContent">
        You can always log back in at any time. 
        </div>
        <div className="modalActions">
            <div className="actionsContainer">
                <button className='logoutbtn1' onClick={()=>{
                    localStorage.clear()
                    navigate('/login')
                }}>Log out</button>
                <button className='cancelbtn' onClick={()=>{navigate('/'); }}>Cancel</button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
