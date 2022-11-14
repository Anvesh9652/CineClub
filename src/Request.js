// const API_KEY = "629d680220c02b5b7aeaa877fcf1d4e3";
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchPrimeOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  fetchHuluOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=453`,
  fetchDisneyShows: `/discover/tv?api_key=${API_KEY}&with_networks=2739`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres-28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres-10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=629d680220c02b5b7aeaa877fcf1d4e3&language=en-US
