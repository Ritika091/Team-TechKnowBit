import React, { useEffect, useState } from 'react'
import './Like.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'
import {Link} from 'react-router-dom'
import albumpic from '../../assets/podcast.jpg'
export default function Like() {
  const[likePods,setLikePods]=useState([])
  useEffect(()=>{
   fetch('http://localhost:5000/likedpodcasts',{
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer '+localStorage.getItem('jwt')
  },
   })
   .then(res=>res.json())
   .then(result=>{
    console.log(result)
    setLikePods(result)
   })
   .catch(err=>console.log(err)) 
  },[])
  return (
    <div className='Like'>
        <Sidebar/>
        <div className="LikeRightpart">
       <UpperNav/>
       <div className="LikeContent">   
       {likePods.map(like=>(
        <div className="Likepodcast_audio">
            <img src={albumpic}/>
        <p className='Likepodtitle'>{like.title}</p>
        <p className='Likepodspeaker'>{like.speaker}</p>
        <p className='Likepodtype'>{like.type}</p>
        <h4 className='podlik'>{like?.likes?.length} likes</h4>
        
  <Link to={`/podcasts/${like._id}`}><button className='Likepodbtn'>Show details</button></Link>
        <br />
        </div>
        ))    }
       </div>
       </div>
    </div>
  )
}
