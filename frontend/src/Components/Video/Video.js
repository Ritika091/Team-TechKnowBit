import React, { useEffect, useState } from 'react'
import './Video.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import { useNavigate } from 'react-router-dom';

export default function Audio() {
    const[videoUrl,setVideoUrl]=useState('');
    const[video,setVideo]=useState('');
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[category,setCategory]=useState('');
    const[type,setType]=useState('video');
    const[speaker,setSpeaker]=useState('');
    const navigator=useNavigate();
    const getPostDetails = () => {
        console.log(video);
        const data = new FormData();
        data.append("file", video);
        data.append("upload_preset", "podcast_app");
        data.append("cloud_name", "markus0509");
        fetch("https://api.cloudinary.com/v1_1/markus0509/video/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setVideoUrl(data.url);
            console.log(data.url);
          })
          .catch((err) => console.log(err));
      };
      const addVideoPodcast=()=>{
        fetch('http://localhost:5000/createpodcasts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                title,
                description,
                category,
                type,
                speaker,
                videoFile:videoUrl
            })
        }).then(res=>res.json())
        .then(data=>{console.log(data);
        if(data.message){
          navigator('/')
        }
        })
        .catch(err=>console.log(err))
      }
      useEffect(()=>{
        if(videoUrl){
addVideoPodcast();
        }
      },[videoUrl])
  return (
    <div className='Video'>
      
        <Sidebar/>
        <div className="right_part">
       <UpperNav/>
       <div className="video_details">
       <div className="vid_left">
       <div>
     <h2>Title</h2>
       <input type="text" placeholder='Enter the title....' onChange={(e)=>setTitle(e.target.value)}/>
       </div>
       <div>
       <h2>Description</h2>
       <textarea type="text" name="text" id="" cols="30" rows="7" placeholder='Enter the description....' onChange={(e)=>setDescription(e.target.value)}></textarea>
         {/* <input type="text" placeholder='Enter the description....' onChange={(e)=>setDescription(e.target.value)}/> */}
         </div>
         <div>
         <h2>Category</h2>
           <input type="text" placeholder='Enter the category....' onChange={(e)=>setCategory(e.target.value)}/>
           </div>
           <div>
           <h2>Type</h2>
             <input type="text" placeholder=''  value={"video"} />
             </div>
             <div>
             <h2>Speaker</h2>
               <input type="text" placeholder='Enter the speaker....' onChange={(e)=>setSpeaker(e.target.value)}/>
               </div>
               </div>
               <div className='vid_right'>
               <div className="Video-choose" >
               <h2>Choose a file</h2>
               <input type="file" accept='video/*' onChange={(e)=>{setVideo(e.target.files[0]);
            }}/>
               </div>
               
               <button className='Uploadbtn'  onClick={() => getPostDetails()}> <CloudUploadRoundedIcon/> Upload </button>
               
       </div>
        </div>
     </div>
     </div>
  )
}
