import React from 'react'
import './Like.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'
import {Link} from 'react-router-dom'
import albumpic from '../../assets/podcast.jpg'
export default function Like() {
  return (
    <div className='Like'>
        <Sidebar/>
        <div className="LikeRightpart">
       <UpperNav/>
       <div className="LikeContent">       
        <div className="Likepodcast_audio">
            <img src={albumpic}></img>
        <p className='Likepodtitle'>Title</p>
        <p className='Likepodspeaker'>Speaker</p>
        <p className='Likepodtype'>Type</p>
        
        <button className='Likepodbtn'>Show details</button>
        
        <br />
        </div>
       </div>
       </div>
    </div>
  )
}
