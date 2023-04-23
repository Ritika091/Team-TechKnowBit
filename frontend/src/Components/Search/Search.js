import React, { useState,useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Sidebar from '../Sidebar/Sidebar';
import './Search.css'
import { Link } from 'react-router-dom';
import albumpic from '../../assets/podcast.jpg'

export default function Search() {
  const[searchInput,setSearchInput]=useState("");
  const[podcasts,setPodcasts]=useState([])
  const[result,setResult]=useState("");
  const[errMessage,setErrMessage]=useState("");
    const fetchPodcasts=()=>{
        fetch('http://localhost:5000/podcasts',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            }
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
         setPodcasts(data)   
        })
        .catch(err=>console.log(err))
    }
    const searchPodcasts=()=>{
      let res=podcasts.find(attr=>{
        return attr.title===searchInput||attr.speaker===searchInput||attr.category===searchInput 
      })
      if(!res){
        console.log('Not found')
        setResult('')
        setErrMessage('Not Found')
      }else{

      setResult(res)
      console.log(result)
      }
      setSearchInput('');
    }
    useEffect(()=>{
        fetchPodcasts();
    },[result]);
  return (
    <div className='Search'>
        <Sidebar/>
        <div className="nav">
          <div className="SearchComp">
         <div className="SearchSec">
       <SearchIcon className='searchIcon'/>
       <input type="text" placeholder="What do you want to listen?" value={searchInput} name="search" onChange={(e)=>setSearchInput(e.target.value)}></input>
       </div>
       <button className='searchbtn' onClick={()=>{searchPodcasts()}}>Search</button>
       </div>
      
       <div className="profile">
       <Avatar alt="Remy Sharp" src=""  className='Ava'/>
       <h3>{JSON.parse(localStorage.getItem("users")).userName}</h3>
       </div>
       
       <div className="search_results">
       <h1>Search Results</h1>
       
      {result?
      <div className="res_podcasts">
          <div className="result_card">
            <img src={albumpic}></img>
          <p className='restitle'>{result.title}</p>
          <p className='resspeaker'>{result.speaker}</p>
          <p className='rescat'>{result.category}</p>
          <Link to={result.audioFile?result.audioFile:result.videoFile}><button className='resbtn'>Show details</button></Link>
          </div>
          </div>
          :
          <p>{errMessage}</p>
          
      }
       </div>
    </div>
    </div>
  )
}
