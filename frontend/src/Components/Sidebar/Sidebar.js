import React from 'react'
import logo from '../../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import './Sidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

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
                <ThumbUpOffAltOutlinedIcon className='icon'/>
                My Likes
            </li>
        </ul>
        <button className='logoutbtn'>Logout</button>
    </div>
  )
}
