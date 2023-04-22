import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/Sign Up/SignUp';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
import Search from './Components/Search/Search';
import { useEffect, useState } from 'react';

function App() {

  const[token,setToken]=useState("")
  const navigate=useNavigate();
  const checkToken=()=>{
    const token=localStorage.getItem('jwt');
    if(token){
      console.log('I have token');
      setToken(token);
    }
    else{
      console.log("I dont have token");
      navigate('/login')
    }
  }
  useEffect(()=>{
    checkToken();
  },[token])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/logout' element={<Logout/>}></Route>
        <Route exact path='/search' element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
