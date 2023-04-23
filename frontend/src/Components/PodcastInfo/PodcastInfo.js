import React, { useEffect, useState } from 'react'
import './PodcastInfo.css'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import UpperNav from '../UpperNav/UpperNav'
import Pic from '../../assets/podcast.jpg'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Player from '../Player/Player';

export default function PodcastInfo() {
    const[pod,setPod]=useState("")
    const {podcastid} = useParams();
    const[videoLink,setVideoLink]=useState("");
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
            if(!result.audioFile){
                setVideoLink(result.videoFile)
            }
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
                    <PlayCircleFilledIcon className='playIcon' />
                </div>
                <div className="PostcardDescription">
                    <h1>Description</h1>
                    <p>{pod.description}</p>
                </div>
                <div className="listen">
                <h2>Listen to this podcast: </h2>
                {
                    pod.audioFile?
                    <audio controls>
                    <source src={pod.audioFile}/>
                    </audio>
                    :
                    <video width='640' height='320' controls>
                    <source src={videoLink} type='video/mp4'/>
                    </video>
                }
                </div>
            </div>
            <Player/>
        </div>
    </div>
  )
}
