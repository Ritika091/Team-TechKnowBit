import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'
import './Home.css'
import Player from '../Player/Player'
import Body from '../Body/Body'
export default function Home() {
  return (
    <div className='Home'>
    <div className="home_sidebar">
    <Sidebar/>
    </div>
        <div className="home_rightcontent">
        <UpperNav/>
        <Body/>
        {/* <Player/> */}
        </div>
        
    </div>
  )
}
