import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Request";
import Row from "../Row";
const HomeScreen = () => {
  return (
    <div className="homescreen">
      {/* nav */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* row */}

      <Row
        title="PRIME VIDEO SHOWS"
        fetchUrl={requests.fetchPrimeOriginals}
        isLargeRow
        isTv
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        isTv
      />
      <Row
        title="DISNEY+ TV SHOWS"
        fetchUrl={requests.fetchDisneyShows}
        isLargeRow
        isTv
      />
      <Row
        title="HULU ORIGINALS"
        fetchUrl={requests.fetchHuluOriginals}
        isLargeRow
        isTv
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
