import React from 'react'
import './UpperNav.css'
import Avatar from '@mui/material/Avatar';

export default function UpperNav() {
  return (
    <div className='UpperNav'>
       <div className="profile1">
       <Avatar alt="Remy Sharp" src=""  className='Ava'/>
       <h3>{JSON.parse(localStorage.getItem("users"))?.userName}</h3>
       </div>
    </div>
  )
}
