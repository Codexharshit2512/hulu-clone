import React, { useEffect, useState } from "react";
import { requests } from "../config/configration";
import VideoCard from "../components/results/VideoCard";
import Loader from "../components/loader/Loader";
import FlipMove from "react-flip-move";
import axios from "axios";

const SearchResults = (props) => {
  let [results, setResult] = useState([]);
  let [isLoading, setLoading] = useState(true);
  let [errorMsg, setError] = useState("");

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
          if (data.results.length === 0) setError("No movies found");
          else setResult(data.results);
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
      ) : errorMsg !== "" ? (
        <h2 className="search-error">{errorMsg}</h2>
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
