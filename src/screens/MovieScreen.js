import "./MovieScreen.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieScreen = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);
  const params = useParams();
  const movie_id = params.id;
  const tv = params.isTv;
  const myRating = false;

  useEffect(() => {
    const fetchMovie = async (id, isTv) => {
      const isSeries = isTv === "true" ? "tv" : "movie";

      const response = await axios.get(`/${isSeries}/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          append_to_response: "videos",
        },
      });
      setMovie(response.data);
      setLoading(true);
      return response;
    };
    fetchMovie(movie_id, tv);
  }, []);

  console.log(movie);

  const imgBase = "https://image.tmdb.org/t/p/original/";

  const renderTrailer = () => {
    const trailer = movie.videos.results.find((vid) => vid.type === "Trailer");
    const key = trailer ? trailer.key : movie.videos.results[0].key;

    return (
      <YouTube
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            // controls: 0
          },
        }}
        videoId={key}
        className="youtube"
      />
    );
  };
  const renderGenres = () =>
    movie.genres.map((genra) => <span key={genra.id}>{genra.name}</span>);

  const renderPlatforms = () =>
    movie.networks.map((network) => (
      <img
        key={network.id}
        src={`${imgBase}${network.logo_path}`}
        alt={network.name}
      />
    ));

  const renderProducers = () =>
    movie.production_companies.map((company) => (
      <>
        <img
          key={company.name}
          src={
            company.logo_path
              ? `${imgBase}${company.logo_path}`
              : "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png"
          }
          alt=""
        />
        <h3 key={company.id}>{company.name}</h3>
      </>
    ));

  return (
    <div className="container">
      {movie.videos && play ? (
        <>
          <div className="movie__trailer">{renderTrailer()}</div>
          <button onClick={() => setPlay(false)} className="movie__closeButton">
            Close
          </button>
        </>
      ) : (
        <div
          className="movieScreen"
          style={{
            backgroundSize: `cover`,
            backgroundImage:
              loading && `url(${imgBase}${movie?.backdrop_path})`,
            backgroundPosition: `center 33%`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <div className="movie__content">
            <button
              onClick={() => setPlay(true)}
              className="movie__playTrailer"
            >
              Play Trailer
            </button>

            <h1>{movie.name ? movie.name : movie.title}</h1>
            <h3 className="movie__info">{movie.overview}</h3>
          </div>
          <div className="movie__shading"></div>
        </div>
      )}
      <div className="movie__extraInfo">
        <div className="movie__tmdbRating">
          <h1>TMDB Rating</h1>
          <div className="movie__raing_icon">
            <FontAwesomeIcon icon={faStar} color="yellow" />
            <h2>{String(movie.vote_average).substring(0, 3)} / 10</h2>
          </div>

          <h3>{movie.vote_count}</h3>
        </div>
        {/* <div className="movie__Rating">
          <h1>My Rating</h1>
          <form className="movie__myRating">
            {!myRating ? (
              <h1>Rate Now</h1>
            ) : (
              <>
                <input type="number" />
                <button className="movie__ratingSubmit">Submit</button>
              </>
            )}
          </form>
        </div> */}
      </div>
      <h2>
        Movie <span>{movie.name}</span>
      </h2>
      <div className="movie__genres">
        <h2>Genres </h2>
        {loading && renderGenres()}
      </div>
      <div className="movie__creators">
        <h2>Created By</h2>{" "}
      {loading &&
        (movie?.created_by?.length > 0 ? (
            movie.created_by.map((creator) => (
              <h3 key={creator.id}>{creator.name}</h3>
            ))
            ) : (
              <h3 style={{ color: "#19d250" }}>N / A</h3>
              ))}
              </div>
      <div className="movie__producedBy">
        <h2>Production Companies</h2>
        {loading &&
          (movie.production_companies.length > 0 ? (
            renderProducers()
          ) : (
            <h3 style={{ color: "#19d250" }}>N / A</h3>
          ))}
      </div>
      <div className="movie__availableOn">
        <h2>Available On </h2>
        {loading &&
          (movie?.networks?.length > 0 ? (
            renderPlatforms()
          ) : (
            <h3 style={{ color: "#19d250" }}>N / A</h3>
          ))}
      {/* {loading && (movie?.networks.length > 0 ? 
        renderPlatforms()
          ): (
            <h3 style={{ color: "#19d250" }}>N / A</h3>
          )} */}
        </div>
    </div>
  );
};

export default MovieScreen;
