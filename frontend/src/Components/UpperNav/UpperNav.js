import React from 'react'
import './UpperNav.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

export default function UpperNav() {
  return (
    <div className='UpperNav'>
       <div className="Search">
       <SearchIcon className='searchIcon' />
       <input type="text" placeholder="What do you want to listen?" name="search"></input>
       </div>
       <div className="profile">
       <Avatar alt="Remy Sharp" src=""  className='Ava'/>
       <h3>Username</h3>
       </div>
    </div>
  )
}
