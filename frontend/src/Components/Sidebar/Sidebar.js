import React from 'react'
import logo from '../../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import './Sidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <img src={logo} alt="" className='Logo' />
        <ul className='List'>
            <li>
                <HomeIcon className='icon'/>
                Home
            </li>
            <li>
                <SearchIcon className='icon'/>
                Search
            </li>
            <li>
                <AddCircleIcon className='icon'/>
                Create
            </li>
            <li>
                <ThumbUpOffAltOutlinedIcon className='icon'/>
                My Likes
            </li>
        </ul>
      <Link to='/logout'> <button className='logoutbtn'>Logout</button></Link> 
    </div>
  )
}
