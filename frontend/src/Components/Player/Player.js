import React, { useContext, useState } from 'react'
import './Player.css'
import thumbnail from '../../assets/podcast.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseIcon from '@mui/icons-material/Pause';
import { playerContext } from '../../context';

export default function Player({audioref,showPlayer,setShowPlayer,data}) {
  const{isplaying,setIsplaying}=useContext(playerContext)

  const play=()=>{
    audioref.current.play()
    setIsplaying(true)
  }
  const pause=()=>{
    audioref.current.pause()
    setIsplaying(false)
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
            <SkipPreviousRoundedIcon fontSize='large'/>
            {isplaying ? 
           <PauseIcon onClick={()=>pause()} fontSize='large' />
            :
            <PlayArrowIcon fontSize='large' onClick={()=>play()}  />
          
            }
          <SkipNextRoundedIcon fontSize='large'/>
        </div>
        <progress className='Progress' value="100" max="100"></progress>
        
    </div>
  )
}