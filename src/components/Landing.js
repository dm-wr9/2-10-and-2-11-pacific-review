import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
    .get("/api/movies").then((res) => {
      this.setState({
        movies: res.data,
      });
    });
  }

  render() {
    const mappedMovies = this.state.movies.map((element) => {
      return (
        <div
          key={element.id}
          style={{
            border: "1px solid black",
          }}
        >
          <Link to={`/movie/${element.id}`}>
            <h2>{element.title}</h2>
            <p>{element.rating}/10</p>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <h1>Welcome to my movie app!</h1>
        <div>{mappedMovies}</div>
      </div>
    );
  }
}

export default Landing;
