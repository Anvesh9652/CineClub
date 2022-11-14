import axios from "./axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Banner.css";
import requests from "./Request";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isTv = true;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const idx = Math.floor(Math.random() * (request.data.results.length - 1));
      setMovie(request.data.results[idx]);
      setLoading(true)
      return request;
    };
    fetchData();
  }, []);

  // console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const imgBase = "https://image.tmdb.org/t/p/original/";
  return (
    <header
      className="banner"
      onClick={() => navigate(`/movie/${movie.id}/${isTv}`)}
      style={{
        backgroundSize: `cover`,
        // https://i.imgur.com/e1hLQ2m.png
        backgroundImage: loading && `url(${imgBase}${(movie?.backdrop_path) ? movie?.backdrop_path : movie?.poster_path})`,
        backgroundPosition: `center 33%`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || truncate(movie?.name, 20) || truncate(movie?.original_name, 20)}
        </h1>
        <div className="banner__buttons">
          <button
            onClick={() => navigate(`/movie/${movie.id}/${isTv}`)}
            className="banner__button"
          >
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {" "}
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
