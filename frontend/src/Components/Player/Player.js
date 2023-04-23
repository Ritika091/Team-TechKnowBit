import React, { useContext, useRef, useState } from 'react'
import './Player.css'
import thumbnail from '../../assets/podcast.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseIcon from '@mui/icons-material/Pause';
import { playerContext } from '../../context';

export default function Player({audioref,showPlayer,setShowPlayer,data}) {
  const{isplaying,setIsplaying}=useContext(playerContext)
  const clickRef = useRef()
  const play=()=>{
    audioref.current.play()
    setIsplaying(true)
  }
  const pause=()=>{
    audioref.current.pause()
    setIsplaying(false)
  }
  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = offset / width * 100;
    audioref.current.currentTime = divprogress / 100 * data.length;

  }
  return (
    <div className='Player'>
        <div className='Player_name'>
            <img className='album_cover' src={thumbnail}></img>
            <div class="track-info">
            <span class="track-title">{data.title}</span>
            <span class="artist-name">{data.speaker}</span>
            </div>

        </div>
        <div className="resume">
            <FastRewindIcon fontSize='large' onClick={()=>{
              if(audioref.current.currentTime<5){
                audioref.current.currentTime=0;
              }
              else{
                audioref.current.currentTime=audioref.current.currentTime-5;
              }
            }}/>
            {isplaying ? 
           <PauseIcon onClick={()=>pause()} fontSize='large' />
            :
            <PlayArrowIcon fontSize='large' onClick={()=>play()}  />
          
            }
          <FastForwardIcon fontSize='large' onClick={()=>{
            if((audioref.current.duration-audioref.current.currentTime)<5){
              audioref.current.currentTime=0;
            }
            else{
              audioref.current.currentTime=audioref.current.currentTime+5;
            }
          }}/>
        </div>

        <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}></div>
        <div className="seek_bar" style={{width: `${data.progress+"%"}`}}></div>
        {/* <progress className='Progress'  ></progress> */}
        </div>
        
    </div>
  )
}