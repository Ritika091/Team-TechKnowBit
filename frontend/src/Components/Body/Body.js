import React, { useEffect, useState } from 'react'
import './Body.css'
import {Link} from 'react-router-dom'
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
    <div className="all_podcasts">
    

    {podcasts.map((pods)=>(
       
       
        <div className="podcast_audio">
        <p>{pods.title}</p>
        <p>{pods.category}</p>
        <p>{pods.speaker}</p>
        <Link to={pods.audioFile?pods.audioFile:pods.videoFile}>Click Me!</Link>
        <br />
        </div>
  
    
        
    ))}
    </div>
    </div>
  )
}

export default Body