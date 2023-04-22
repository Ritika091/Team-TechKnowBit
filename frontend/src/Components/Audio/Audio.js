import React, { useEffect, useState } from 'react'
import './Audio.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'

export default function Audio() {
    const[audioUrl,setAudioUrl]=useState('');
    const[audio,setAudio]=useState('');
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[category,setCategory]=useState('');
    const[type,setType]=useState('');
    const[speaker,setSpeaker]=useState('');
    const getPostDetails = () => {
        console.log(audio);
        const data = new FormData();
        data.append("file", audio);
        data.append("upload_preset", "podcast_app");
        data.append("cloud_name", "markus0509");
        fetch("https://api.cloudinary.com/v1_1/markus0509/video/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setAudioUrl(data.url);
            console.log(data.url);
          })
          .catch((err) => console.log(err));
      };
      const addAudioPodcast=()=>{
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
                audioFile:audioUrl
            })
        }).then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
      }
      useEffect(()=>{
        if(audioUrl){
addAudioPodcast();
        }
      },[audioUrl])
  return (
    <div className='Audio'>
        <Sidebar/>
        <div className="right_part">
       <UpperNav/>
       <div className="audio_details">
       <div className="aud_left">
       <div>
        <h2>Title</h2>
       <input type="text" placeholder='Enter the title....' onChange={(e)=>setTitle(e.target.value)}/>
       </div>
       <div>
       <h2>Description</h2>
         <input type="text" placeholder='Enter the description....' onChange={(e)=>setDescription(e.target.value)}/>
         </div>
         <div>
         <h2>Category</h2>
           <input type="text" placeholder='Enter the category....' onChange={(e)=>setCategory(e.target.value)}/>
           </div>
           <div>
           <h2>Type</h2>
             <input type="text" placeholder='Enter the type....' onChange={(e)=>setType(e.target.value)}/>
             </div>
             <div>
             <h2>Speaker</h2>
               <input type="text" placeholder='Enter the speaker....' onChange={(e)=>setSpeaker(e.target.value)}/>
               </div>
               </div>
               <div className='Aud_right'>
               <div className="Audio-choose" >
               <h2>Choose a file</h2>
               <input type="file" accept='audio/*' onChange={(e)=>{setAudio(e.target.files[0]);
            }}/>
               </div>
               
               <button className="Uploadbtn" onClick={()=>getPostDetails()}>Upload</button>
               
       </div>
       
        </div>
     </div>
     </div>
  )
}
