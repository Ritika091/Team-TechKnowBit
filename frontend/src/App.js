import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/Sign Up/SignUp';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
import Search from './Components/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/logout' element={<Logout/>}></Route>
        <Route exact path='/search' element={<Search/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
