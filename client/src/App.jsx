import { useEffect, useState} from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import GameDetails from './components/GameDetails/GameDetails';
import CreateGame from './components/CreateGame/CreateGame';
import EditGame from './components/EditGame/EditGame';

import * as services from '../src/services/gameServices';
import { AuthContext } from './context/AuthContext';
import { GameContext } from './context/GameContext';

import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'


function App() {
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useLocalStorage('auth',{});
 

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

  const editGameHandler = (id,game) =>{
    setGames(state=>state.map(x=>x._id === game._id ? game : x));
  }
  
  const addGame=(newGameData)=>{
const newGame={
  
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
        <GameContext.Provider value={{games,addGame, editGameHandler}}>
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment}  />} />
            <Route path='/games/:gameId/edit' element={<EditGame />} />
            <Route path='/create' element={<CreateGame addGame={addGame} />} />
          </Routes>
        </main>
        </GameContext.Provider>
      </div>
      </AuthContext.Provider>
    </>

  )
}

export default App
