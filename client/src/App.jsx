import { useEffect, useState} from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Catalog from './components/Catalog/Catalog'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
import GameDetails from './components/GameDetails/GameDetails'
import CreateGame from './components/CreateGame/CreateGame'
import * as services from '../src/services/gameServices'
import { AuthContext } from './context/AuthContext'
import './App.css'


function App() {
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});
 

const navigate = useNavigate();

const userLogin = (authData) =>{
setAuth(authData)
}

const userLogout = () =>{
  setAuth({})
  }

  const addComment =(gameId, comment) =>{

    setGames(state=>{
      const game = state.find(x=> x._id == gameId);
      const comments = game.comments || [];
      comments.push(comment);

      return[
        ...state.filter(x=> x._id !== gameId),
        {...game, comments:comments}
      ]
    })
  }
  
  const addGame=(newGameData)=>{
const newGame={
  _ownerId:crypto.randomUUID(),
  _id:crypto.randomUUID(),
  ...newGameData,
}
    setGames(state=>([
      newGame,
      ...state
    ]))
    navigate('/');
  }



  useEffect(() => {
    services.getAll()
      .then(data => setGames(data));

  }, []);



  return (
    <>
<AuthContext.Provider value={{user:auth, userLogin, userLogout}}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment}  />} />
            <Route path='/create' element={<CreateGame addGame={addGame} />} />
          </Routes>

        </main>
      </div>
      </AuthContext.Provider>
    </>

  )
}

export default App
