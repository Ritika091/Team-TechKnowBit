import React from 'react'
import './Audio.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'

export default function Audio() {
  return (
    <div className='Audio'>
      <div className="left_part">
        <Sidebar/>
        </div>
        {/* <div className="right_part"> */}
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
               <input type="file" accept='audio/*'/>
               </div>
               <div>
               <button>Create</button>
               </div>
       </div>
        </div>
    // </div>
  )
}
