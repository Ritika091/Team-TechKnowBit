import React from 'react'
import './Player.css'
import thumbnail from '../../assets/thumbnail.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';

export default function Player() {
  return (
    <div className='Player'>
        <div className='Player_name'>
            <img className='album_cover' src={thumbnail}></img>
            <div class="track-info">
            <span class="track-title">Song Title</span>
            <span class="artist-name">Artist Name</span>
            </div>

        </div>
        <div className="resume">
            <SkipPreviousRoundedIcon fontSize='large'/>
            <PlayArrowIcon fontSize='large'/>
            <SkipNextRoundedIcon fontSize='large'/>
        </div>
        <progress className='Progress' value="100" max="100"></progress>
        
    </div>
  )
}
