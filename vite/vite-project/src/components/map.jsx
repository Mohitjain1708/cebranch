import Movies from "./movies";
import "../components/movies.css";
function Map1(){
    return(
        <div className="movies">
            {
                Movies.map(Movies=>(
                    <div>
                        <h3>{Movies.id}</h3>
                        <img src={Movies.image} height={300}></img>
                        <h3>{Movies.title}</h3>
                        <h3>{Movies.language}</h3>
                        <h3>{Movies.cost}</h3>
                    </div>
                ))
            }
        </div>
    );
}
export default Map1;