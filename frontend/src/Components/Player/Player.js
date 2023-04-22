import React from 'react'
import './Player.css'
import thumbnail from '../../assets/thumbnail.jpg'


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
        
    </div>
  )
}
