import { useEffect, useState } from 'react'


import * as services from '../../services/gameServices';
import LatestGames from './LatestGame/LatestGame';

const Home = () =>{
  const [games, setGames] = useState([]);
  useEffect(()=>{
    services.getAll()
    .then(data=>setGames(data));
  
  },[]);
  

    return(
             
      <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        <h1>Latest Games</h1>

       {games.length > 0 
       ? games.map(x=><LatestGames key={x._id} game={x}/>)
       :<p className="no-articles">No games yet</p> }
       
      </div>
    </section>
    )
}

export default Home