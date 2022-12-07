import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//fdc310b6

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=fdc310b6'

const App = () =>
{

    const [movieState, setMovieState] = useState([]);
    const [searchState, setSearchState] = useState('');

    const searchMovies = async (title) =>
    {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovieState(data.Search);
    }

    useEffect(()=>{
         searchMovies('Spiderman');
    }, []);

    return(
       <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for Movies..." value={searchState} onChange={(e)=>setSearchState(e.target.value)}/>
                <img src={SearchIcon} alt="" onClick={()=> searchMovies(searchState)}/>
            </div>

            {
                movieState?.length > 0 ?
                    (
                        <div className="container">
                            {movieState.map((film)=>(
                                <MovieCard key={film.imdbID} movieProp={film}/>
                            ))}
                        </div>
                    )
                :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            };

       </div> 
    );
}

export default App;