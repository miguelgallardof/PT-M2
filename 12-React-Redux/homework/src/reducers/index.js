import { GET_MOVIES, ADD_MOVIE_FAVOURITE } from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE_FAVOURITE:
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: [
          ...JSON.parse(JSON.stringify(state.moviesFavourites)),
          payload,
        ],
      };
    case GET_MOVIES: {
      return {
        ...JSON.parse(JSON.stringify(state)),
        moviesLoaded: payload.Search,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
