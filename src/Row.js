import axios from "./axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Row.css";
import { useNavigate } from "react-router-dom";

const Row = ({ title, fetchUrl, isLargeRow = false , isTv = false}) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, []);

  const imgBase = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
                <img
                  onClick={() => navigate(`/movie/${movie.id}/${isTv}`)}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`${imgBase}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
