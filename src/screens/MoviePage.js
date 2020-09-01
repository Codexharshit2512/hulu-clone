import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { requests } from "../config/configration";
import MovieDetail from "../components/movie/MovieDetail";
import Loader from "../components/loader/Loader";

const MoviePage = (props) => {
  let [moviedata, setData] = useState({});
  let [dataLoading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${requests.discover}${id}?api_key=${process.env.API_KEY}&language=en-US`
      )
      .then(({ data }) => {
        setTimeout(() => {
          setLoading(false);
          setData(data);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>{dataLoading === true ? <Loader /> : <MovieDetail data={moviedata} />}</>
  );
};

export default MoviePage;
