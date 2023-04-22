import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Sidebar from '../Sidebar/Sidebar';
import './Search.css'

export default function Search() {
  return (
    <div className='Search'>
        <Sidebar/>
        <div className="nav">
         <div className="SearchSec">
       <SearchIcon className='searchIcon' />
       <input type="text" placeholder="What do you want to listen?" name="search"></input>
       </div>
       <div className="profile">
       <Avatar alt="Remy Sharp" src=""  className='Ava'/>
       <h3>Username</h3>
       </div>
    </div>
    </div>
  )
}
