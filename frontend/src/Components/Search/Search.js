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
          <div className="SearchComp">
         <div className="SearchSec">
       <SearchIcon className='searchIcon' />
       <input type="text" placeholder="What do you want to listen?" name="search"></input>
       </div>
       <button className='searchbtn'>Search</button>
       </div>
      
       <div className="profile">
       <Avatar alt="Remy Sharp" src=""  className='Ava'/>
       <h3>{JSON.parse(localStorage.getItem("users")).userName}</h3>
       </div>
    </div>
    </div>
  )
}
