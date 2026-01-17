import { useContext,useEffect,useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'

import { GameContext } from "../../context/GameContext";
import * as gameService from '../../services/gameServices'


const EditGame = () =>{
    const [currentGame, setCurrentGame]= useState({});
    const {editGameHandler } = useContext(GameContext)
    const {gameId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        gameService.getOne(gameId)
        .then(gameData=>{
            setCurrentGame(gameData)
        })
    },[]);

    const onChange=(e)=>{
        setCurrentGame((state) => ({
            ...state,
            [e.target.name]: e.target.value,
          }));
    }


    const onSubmitHandler = (e) =>{

        e.preventDefault();
        
        gameService.edit(gameId,currentGame)
        .then(result=>{
            editGameHandler(gameId,result)
            navigate(`/catalog/${gameId}`)
        }).catch(err => {
            console.error(err);
        });

      
        
            }


return(
<section id="edit-page" className="auth">
  <form id="edit" onSubmit={onSubmitHandler}>
    <div className="container">
      <h1>Edit Game</h1>
      <label htmlFor="leg-title">Legendary title:</label>
      <input type="text" id="title" name="title" onChange={onChange} defaultValue={currentGame.title} />
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" onChange={onChange} defaultValue={currentGame.category} />
      <label htmlFor="levels">MaxLevel:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min={1}
        onChange={onChange}
        defaultValue={currentGame.maxLevel}
      />
      <label htmlFor="game-img">Image:</label>
      <input type="text" id="imageUrl" onChange={onChange} name="imageUrl" defaultValue={currentGame.imageUrl} />
      <label htmlFor="summary">Summary:</label>
      <textarea name="summary" id="summary" defaultValue={currentGame.summary} />
      <input className="btn submit" type="submit" defaultValue="Edit Game" />
    </div>
  </form>
</section>

)


}


export default EditGame;