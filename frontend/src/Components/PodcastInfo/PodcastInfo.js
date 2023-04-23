import React, { useEffect, useRef, useState } from 'react'
import './PodcastInfo.css'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav'
import Pic from '../../assets/podcast.jpg'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Player from '../Player/Player';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function PodcastInfo() {
    const[showPlayer,setShowPlayer]=useState(false)
    const audioref=useRef()
    const[pod,setPod]=useState("")
    const {podcastid} = useParams();
    console.log(podcastid)

    useEffect(()=>{
        fetch(`http://localhost:5000/podcasts/${podcastid}`,{
            headers:{
                'Content-Type':'application/json',
                'Authorization':"Bearer "+localStorage.getItem("jwt")
            },
        })
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result)
            setPod(result)
        })
    },[])

  return (
    <div className='PodcastInfo'>
            <Sidebar/>
        <div className="Podcast_rightContent">
            <UpperNav/>
            <div className="PodcastDetail">
                <div className="PodImgDetail">
                    <img src={Pic} alt="" />
                    <div className="det">
                    <p>{pod.type}</p>
                    <h1>{pod.title}</h1>
                    <h4 className='speak'>{pod.speaker}</h4>
                    <h4 className='cat'>{pod.category}</h4>
                    </div>
                    <PlayCircleFilledIcon className='playIcon' onClick={()=>{audioref.current.play()
                    setShowPlayer(true)    
                }
                    } />
                </div>
                <div className="PostcardDescription">
                    <h1>Description</h1>
                    <p>{pod.description}</p>
                </div>
                <div className="Likes">
                <FavoriteBorderIcon fontSize='large'/>
                <FavoriteIcon fontSize='large' color='error'/>
                </div>
                <div className="listen">
                <h2>Listen to this podcast: </h2>
                {
                    pod.audioFile?
                    <audio  ref={audioref}>
                    <source src={pod.audioFile}/>
                    </audio>
                    :
                
                    <video src={pod.videoFile} controls width='640' height='320'>
                
                    </video>
              
                
                }
                </div>
            </div>
            {
                showPlayer?
            <Player data={pod} showPlayer={showPlayer} setShowPlayer={setShowPlayer} audioref={audioref}/>
            :
            <p></p>
}
        </div>
    </div>
  )
}