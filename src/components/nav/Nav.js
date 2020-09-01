import React, { useState } from "react";
import { genres } from "../../config/genres";
import { requests } from "../../config/configration";

const Nav = ({ fetchMovies }) => {
  let [selected, setSelected] = useState("trending");

  const handleClick = (url, activeLink) => {
    fetchMovies(url);
    setSelected(activeLink);
  };

  return (
    <div className="nav-container">
      <div className="nav-item">
        <p
          onClick={() => handleClick(requests.trending, "trending")}
          className={
            selected === "trending" ? "nav-link active-navlink" : "nav-link"
          }
        >
          Trending
        </p>
      </div>
      <div className="nav-item">
        <p
          onClick={() => handleClick(requests.topRated, "top rated")}
          className={
            selected === "top rated" ? "nav-link active-navlink" : "nav-link"
          }
        >
          Top Rated
        </p>
      </div>
      {genres.map((genre) => {
        return (
          <div key={genre.id} className="nav-item">
            <p
              onClick={() =>
                handleClick(
                  `${requests.genre}&with_genres=${genre.id}`,
                  genre.name
                )
              }
              data-genre-id={genre.id}
              className={
                selected === genre.name ? "nav-link active-navlink" : "nav-link"
              }
            >
              {genre.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
