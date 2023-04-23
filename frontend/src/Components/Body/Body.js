import React, { useEffect, useState } from 'react'
import './Body.css'
import {Link} from 'react-router-dom'
import albumpic from '../../assets/podcast.jpg'
function Body() {
    const[podcasts,setPodcasts]=useState([])
    const fetchPodcasts=()=>{
        fetch('http://localhost:5000/podcasts',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            }
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
         setPodcasts(data)   
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchPodcasts();

    },[]);
  return (
    <div className='Body'>
        <h2 className='welcome'>Hey There!</h2>
    <div className="all_podcasts">
    

    {podcasts.map((pods)=>(
       
       
        <div className="podcast_audio">
            <img src={albumpic}></img>
        <p className='podtitle'>{pods.title}</p>
        <p className='podspeaker'>{pods.speaker}</p>
        <p className='podtype'>{pods.type}</p>
        <h4 className='podlik'>{pods?.likes?.length} likes</h4>
        
        <Link to={`/podcasts/${pods._id}`}><button className='podbtn'>Show details</button></Link>
        
        <br />
        </div>
  
    
        
    ))}
    </div>
    </div>
  )
}

export default Body