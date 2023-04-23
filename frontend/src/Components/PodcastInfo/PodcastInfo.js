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
import { useContext } from 'react';
import { playerContext } from '../../context';
export default function PodcastInfo() {
    const{setIsplaying}=useContext(playerContext)
    const[pod,setPod]=useState("")
    const {podcastid} = useParams();
    const[showPlayer,setShowPlayer]=useState(false);
    const audioref=useRef();
    const videoRef=useRef();
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

  const onPlaying = () => {
    const duration = audioref.current.duration;
    const ct = audioref.current.currentTime;

    setPod({ ...pod, "progress": ct / duration * 100, "length": duration })
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
                    <PlayCircleFilledIcon className='playIcon' onClick={()=>{
                        if(pod.audioFile){
                        setShowPlayer(true);
                        audioref.current.play();
                    setIsplaying(true)
                        }
                        else{
                            videoRef.current.play();
                            const elem = videoRef.current
      if(elem){ 
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /*  for Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /*  for IE11 */
          elem.msRequestFullscreen();
        }
      }
                        }
                    }}/>
                </div>
                <div className="PostcardDescription">
                    <h1>Description</h1>
                    <p>{pod.description}</p>
                </div>
                <div className="Likes">
                <h4>{pod?.likes?.length} likes</h4>
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
                    <audio  ref={audioref}  onTimeUpdate={onPlaying}>
                    <source src={pod.audioFile}/>
                    </audio>
                    :
                
                    <video src={pod.videoFile} controls width='640' height='320' ref={videoRef}>
                
                    </video>
              
                
                }
                </div>
            </div>
            {showPlayer?
            <Player data={pod} setShowPlayer={setShowPlayer} showPlayer={showPlayer} audioref={audioref}/>
            :
            <p></p>
            }
        </div>
    </div>
  )
}
