import CatlogItem from "./CatalogItem/CatalogItem";

const Catalog = ({games}) =>{

    return(<section id="catalog-page">
        <h1>All Games</h1>    
      {games.length>0 ?games.map(x=><CatlogItem key={x._id} games={x}/>):<h3 className="no-articles">No articles yet</h3>}   
      </section>
      )


}

export default Catalog;