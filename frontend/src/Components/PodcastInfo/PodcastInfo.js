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
    console.log(podcastid)

    useEffect(()=>{
        fetch(`http://localhost:5000/podcast/${podcastid}`,{
            headers:{
                'Content-Type':'application/json',
                'Authorization':"Bearer "+localStorage.getItem("jwt")
            },
        })
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result)
            setPod(result.pod)
        })
    })

  return (
    <div className='PodcastInfo'>
            <Sidebar/>
        <div className="Podcast_rightContent">
            <UpperNav/>
            <div className="PodcastDetail">
                <div className="PodImgDetail">
                    <img src={Pic} alt="" />
                    <div className="det">
                    <p>Type</p>
                    <h1>Title</h1>
                    <h4 className='speak'>Speaker</h4>
                    <h4 className='cat'>Category</h4>
                    </div>
                    <PlayCircleFilledIcon className='playIcon' />
                </div>
                <div className="PostcardDescription">
                    <h1>Description</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas id nobis omnis, vitae ea officiis ab in praesentium veniam voluptatibus? Consequatur quia libero dolore non facere tenetur odit, saepe eligendi enim molestiae rerum quos accusantium quam nobis suscipit magnam ratione. Assumenda molestiae sequi quos sit dolores architecto debitis accusamus, similique impedit recusandae natus doloribus, porro consequuntur labore nostrum, nisi fugiat! Dolores, laudantium veritatis ipsum minus beatae reprehenderit laboriosam atque iusto est deleniti explicabo quae maiores temporibus quas ex doloribus officia? Id ex asperiores quas deserunt quos inventore suscipit culpa dicta expedita illum magni odio voluptates eveniet omnis qui, voluptatum maiores hic doloremque ut doloribus? Esse pariatur asperiores assumenda, molestias praesentium dolor earum, velit explicabo culpa aliquid numquam voluptas sit optio necessitatibus totam aut vitae! Autem, sed animi.</p>
                </div>
            </div>
            <Player/>
        </div>
    </div>
  )
}
