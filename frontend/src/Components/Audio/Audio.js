import React from 'react'
import './Audio.css'
import Sidebar from '../Sidebar/Sidebar'
import UpperNav from '../UpperNav/UpperNav'

export default function Audio() {
  return (
    <div className='Audio'>
        <Sidebar/>
        <section className='Aud'>
        <UpperNav/>
        <div className='Audio_content'>
            <div>
                title
            </div>
            <div>
                description
            </div>
            <div>
                category
        
            </div>
            <div>
                type
            </div>
            <div>
                speaker
        
            </div>
            <div>
                audioFile
            </div>
        </div>
        </section>
    </div>
  )
}
