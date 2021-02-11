import axios from "axios";

//# initialState - redux needs to know what to set its state to when it starts
const initialState = {
  movies: [],
  loading: false,
};
//# action types - tells the action builders where to go in your reducer
const GET_MOVIES = "GET_MOVIES";
// const GET_ONE_MOVIE = "GET_ONE_MOVIE";
//# action builders - functions you give to your components to interact with redux.  THEY ALWAYS RETURN AN OBJECT WITH TYPE AND PAYLOAD KEYS - THIS IS CALLED AN ACTION
export function getMovies() {
  const data = axios.get("/api/movies").then((res) => {
    return res.data;
  });
  return {
    type: GET_MOVIES,
    payload: data,
  };
}

//# reducer - tells redux state what to do
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES + "_PENDING":
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES + "_REJECTED":
      return {
        ...state,
        loading: false,
      };
    case GET_MOVIES + "_FULFILLED":
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    // case GET_ONE_MOVIE:
  }
}
