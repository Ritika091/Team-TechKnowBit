import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'
import './Home.css'
import Player from '../Player/Player'

export default function Home() {
  return (
    <div className='Home'>
        <Sidebar/>
        <UpperNav/>
        <Player/>
    </div>
  )
}
