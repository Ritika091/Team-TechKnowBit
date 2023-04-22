import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
        <Sidebar/>
        <UpperNav/>
    </div>
  )
}
