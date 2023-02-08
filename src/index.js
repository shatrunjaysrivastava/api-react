import axios from "axios";
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [text_s, setText_s] = useState("call");
    const [likedMovies, setLikedMovies] = useState([]);
    

    const getMovies = async () => {
        {text_s === "" ? setText_s() : text_s = text_s}
        const surl = `https://www.omdbapi.com/?s=${text_s}&apikey=48710dad`;
        const moviesRequest = await axios.get(
            surl
        );
        console.log(moviesRequest.data.Search);
        setMovies(moviesRequest.data.Search);
        // console.log({movies});
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <input type = "text"
                value = {text_s}
                onChange = {(e) => {setText_s(e.target.value)}}
                placeholder = "Search Movies"
            />
            <button onClick = { getMovies }> Search </button>

            {movies.length > 0 ? movies.map(movie => {
                return (
                    <div>
                        <div>
                            <div>
                                <img alt = "Search" src = { movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } />
                            </div>
                            <div>
                                <span>{ movie.Type }</span>
                                <h3>{ movie.Title }</h3>
                                <button onClick = { setLikedMovies() }> Search </button>
                            </div>
                        </div>
                    </div>

                )
            }): ''}
        </div> 
    )
}
ReactDOM.render(<App />, document.getElementById('root'));