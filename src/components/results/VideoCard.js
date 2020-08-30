import React, { forwardRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { imgBaseUrl } from "../../config/imageUrl";
import TextTruncate from "react-text-truncate";

const VideoCard = forwardRef((props, ref) => {
  const { data } = props;
  let history = useHistory();
  let location = useLocation();

  const checkRoute = () => {
    if (location.pathname === "/searchresults")
      history.replace(`/movie/${data.id}`);
    else history.push(`/movie/${data.id}`);
  };

  return (
    <div
      ref={ref}
      className="col-sm-12 col-md-4"
      style={{ marginBottom: "1rem" }}
    >
      <div className="card-container" onClick={checkRoute}>
        <div className="card-image">
          <img
            src={`${imgBaseUrl}${data.backdrop_path || data.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="card-content">
          <TextTruncate
            line={2}
            element="p"
            truncateText="..."
            text={data.overview}
          />
          <h3 className="card-header">{data.title}</h3>
          <div className="hidden">
            <p className="release-date">{data.release_date}</p>
            <div className="movie-stats">
              <ThumbUpIcon />
              <span className="likes">{data.vote_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoCard;
