import React, { useState } from 'react'
import './Audio.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'

export default function Audio() {
    const[audioUrl,setAudioUrl]=useState('');
    const[audio,setAudio]=useState('');
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
  return (
    <div className='Audio'>
        <Sidebar/>
        <div className="right_part">
       <UpperNav/>
       <div className="audio_details">
       <div>
     <h2>Title</h2>
       <input type="text" placeholder='Enter the title....'/>
       </div>
       <div>
       <h2>Description</h2>
         <input type="text" placeholder='Enter the description....'/>
         </div>
         <div>
         <h2>Category</h2>
           <input type="text" placeholder='Enter the category....'/>
           </div>
           <div>
           <h2>Type</h2>
             <input type="text" placeholder='Enter the type....'/>
             </div>
             <div>
             <h2>Speaker</h2>
               <input type="text" placeholder='Enter the speaker....'/>
               </div>
               <div>
               <h2>Choose a file</h2>
               <input type="file" accept='audio/*' onChange={(e)=>setAudio(e.target.files[0])}/>
               </div>
               <div>
               <button onClick={()=>getPostDetails()}>Create</button>
               </div>
       </div>
        </div>
    </div>
  )
}
