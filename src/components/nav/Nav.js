import React from 'react';
import {genres} from '../../config/genres';
import {requests} from '../../config/configration';


const Nav = ({fetchMovies}) => {
    return(
        <div className="nav-container">
            <div className="nav-item"><p onClick={() => fetchMovies(requests.trending)}  className="nav-link">Trending</p></div>
            <div className="nav-item"><p onClick={() => fetchMovies(requests.topRated)}  className="nav-link">Top Rated</p></div>
            {genres.map(genre => {
                return(
                  <div key={genre.id} className="nav-item"><p onClick={() => fetchMovies(`${requests.genre}&with_genres=${genre.id}`)}  data-genre-id={genre.id} className="nav-link">{genre.name}</p></div>
                )
            })}
        </div>
    )
}

export default Nav;