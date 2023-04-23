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

    const likePodcast = (id)=>{
        fetch('http://localhost:5000/like',{
            method:"put",
            headers:{
                'Content-Type':'application/json',
                'Authorization':"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
                 //   console.log(result)
        //   const newData = pod.map(pods=>{
        //       if(pods._id===result._id){
        //           return result
        //       }else{
        //           return pods
        //       }
        //   })
          setPod(result)
        }).catch(err=>{
            console.log(err)
        })
    }

    const unlikePodcast = (id)=>{
        fetch('http://localhost:5000/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
          //   console.log(result)
        //   const newData = pod.map(pods=>{
        //       if(pods._id===result._id){
        //           return result
        //       }else{
        //           return pods
        //       }
        //   })
          setPod(result)
        }).catch(err=>{
          console.log(err)
      })
  }

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
                <div className="Likes">
                <h6>{pod?.likes?.length} likes</h6>
                {pod?.likes?.includes(JSON.parse(localStorage.getItem("users"))._id)? 
                <FavoriteIcon fontSize='large' color='error' onClick={()=>{unlikePodcast(pod._id)}}/>
                :
                <FavoriteBorderIcon fontSize='large' onClick={()=>{likePodcast(pod._id)}}/>
                }
                </div>
                <div className="listen">
                <h2>Listen to this podcast: </h2>
                {
                    pod.audioFile?
                    <audio controls>
                    <source src={pod.audioFile}/>
                    </audio>
                    :
                
                    <video src={pod.videoFile} controls width='640' height='320'>
                
                    </video>
              
                
                }
                </div>
            </div>
            <Player/>
        </div>
    </div>
  )
}
