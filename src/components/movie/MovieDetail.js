import React from "react";
import { imgBaseUrl } from "../../config/imageUrl";
import { calcTime } from "../../utility_functions/calcTime";

const MovieDetail = ({ data }) => {
  const arr = data.genres || [];

  return (
    <div className="container  mt-3">
      <div className="movie-container">
        <div className="movie-img">
          <img src={`${imgBaseUrl}${data.backdrop_path}`} alt="img" />
          <h2 className="movie-title">{data.title}</h2>
        </div>
        <div className="movie-info">
          <div className="small-info">
            <p className="movie-release">{data.release_date}</p>
            <p className="runtime">{calcTime(data.runtime)}</p>
            <p className="rating">{data.vote_average}</p>
          </div>
          <div className="movie-overview">
            <p>{data.overview}</p>
          </div>
          <div className="movie-genre">
            <p>
              <span style={{ color: "darkgrey" }}>Genre:</span>
              {arr.map((genre, index) => {
                return index !== arr.length - 1
                  ? `${genre.name},`
                  : `${genre.name}`;
              })}
            </p>
          </div>
        </div>
        <div className="watch">
          <a href="#">Watch Now</a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
