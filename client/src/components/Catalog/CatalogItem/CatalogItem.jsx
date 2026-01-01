const CatlogItem = ({games}) =>{

    return(
        <div className="allGames">
        <div className="allGames-info">
          <img src={games.imageUrl} />
          <h6>{games.category}</h6>
          <h2>{games.title}</h2>
          <a href="#" className="details-button">
            Details
          </a>
        </div>
      </div>
    )
}

export default CatlogItem;