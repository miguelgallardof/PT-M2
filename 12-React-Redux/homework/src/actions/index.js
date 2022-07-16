const API_KEY = "bd9ea259";

const ADD_MOVIE_FAVOURITE = "ADD_MOVIE_FAVORITE";
const GET_MOVIES = "GET_MOVIES";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVOURITE, payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=` + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function addMovieFavourite(movie) {
    return { type: ADD_MOVIE_FAVOURITE, payload: movie  }
}
​
