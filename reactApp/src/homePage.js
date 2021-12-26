import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
//import {getMovies} from '../api/tmdb-api';


 const HomePage = () => {
    

    const context = useContext(MoviesContext);
    return <>
        <h2>Movies New Data </h2>
        {/* <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title},{movie.backdrop_path}<br /></> })}
        </div> */}
    </>
}

export default HomePage

