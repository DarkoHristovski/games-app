import { useState } from "react";
import * as gameService from '../../services/gameServices'

const CreateGame = ({addGame}) =>{
 

const[newGame, setNewGame]= useState({
    title:'',
    category:'',
    maxLevel:'',
    imageUrl:'',
    summary:'',

});


const addEventhandler = (e) =>{
e.preventDefault();
gameService.create(newGame)
.then(result=>addGame(result))
}

const onChange=(e)=>{
    setNewGame((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
}


    return(
        <section id="create-page" className="auth">
  <form id="create" onSubmit={addEventhandler}>
    <div className="container">
      <h1>Create Game</h1>
      <label htmlFor="leg-title">Legendary title:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter game title..."
        onChange={onChange}
        value={newGame.title}
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter game category..."
        onChange={onChange}
        value={newGame.category}
      />
      <label htmlFor="levels">MaxLevel:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min={1}
        placeholder={1}
        onChange={onChange}
        value={newGame.maxLevel}
      />
      <label htmlFor="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
        onChange={onChange}
        value={newGame.imageUrl}
      />
      <label htmlFor="summary">Summary:</label>
      <textarea
       name="summary"
        id="summary"
        onChange={onChange}
        value={newGame.summary} />
      <input className="btn submit" type="submit" defaultValue="Create Game" />
    </div>
  </form>
</section>

    )
}

export default CreateGame;