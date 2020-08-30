import React, { useEffect, useState } from "react";
import { requests } from "../config/configration";
import VideoCard from "../components/results/VideoCard";
import Loader from "../components/loader/Loader";
import FlipMove from "react-flip-move";
import axios from "axios";

const SearchResults = (props) => {
  let [results, setResult] = useState([]);
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${requests.search}&query=${props.value}`
        );
        if (mounted) {
          setLoading(false);
          setResult(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, [props]);

  return (
    <>
      {isLoading === true ? (
        <Loader />
      ) : (
        <div className="search-results">
          <FlipMove className="row mt-3">
            {results.map((result) => (
              <VideoCard key={result.id} data={result} />
            ))}
          </FlipMove>
        </div>
      )}
    </>
  );
};

export default SearchResults;
