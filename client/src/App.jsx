import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

import './App.css'
import { useEffect, useState } from 'react'


import * as services from '../src/services/gameServices'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [games, setGames] = useState([]);
  useEffect(()=>{
    services.getAll()
    .then(data=>setGames(data));
  
  },[]);



  return (
    <>

    <div id="box">
    <Header/>
      <main id="main-content">
        <Routes>
        <Route path='/' element={<Home games={games} />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/catalog' element={<Catalog games={games} />}/>
        </Routes>
      
      </main>
      </div>
      </>

  )
}

export default App
