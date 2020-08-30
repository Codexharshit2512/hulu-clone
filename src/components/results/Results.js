import React from "react";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

const Results = (props) => {
  return (
    <div className="results">
      <FlipMove className="row justify-content-center">
        {props.results.map((result) => (
          <VideoCard key={result.id} data={result} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
