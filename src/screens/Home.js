import React, { useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import Results from "../components/results/Results";
import Loader from "../components/loader/Loader";
import { requests } from "../config/configration";
import axios from "axios";

const Home = (props) => {
  const [requestUrl, changeUrl] = useState(requests.trending);
  const [results, changeResults] = useState([]);
  let [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(requestUrl)
      .then((res) => {
        setLoading(false);
        changeResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [requestUrl]);

  const fetchData = (url) => changeUrl(url);
  return (
    <>
      <Nav fetchMovies={fetchData} />
      {isLoading === true ? <Loader /> : <Results results={results} />}
    </>
  );
};

export default Home;
