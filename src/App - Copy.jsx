import React from 'react'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Player from './pages/player/Player';
import { Routes,Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='player/:id' element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App
