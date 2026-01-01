import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

import './App.css'

import { Route, Routes } from 'react-router-dom'

function App() {




  return (
    <>

    <div id="box">
    <Header/>
      <main id="main-content">
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/catalog' element={<Catalog />}/>
        </Routes>
      
      </main>
      </div>
      </>

  )
}

export default App
