import React from "react";
import axios from "axios";

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    axios
      .get(`/api/movie/${this.props.match.params.id}`)
      .then((res) => this.setState({ movie: res.data }));
  }

  render() {
    return (
      <div>
        <h1>Movie title: {this.state.movie.title}</h1>
        <h2>Movie rating: {this.state.movie.rating}/10</h2>
        <img style={{ maxHeight: "60vh" }} src={this.state.movie.image} />
      </div>
    );
  }
}

export default Movie;
