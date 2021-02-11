import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovies } from "../redux/reducer";

class Landing extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    let mappedMovies = [];
    if (this.props.movies) {
      mappedMovies = this.props.movies.map((element) => {
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
    }

    return (
      <div>
        <h1>Welcome to my movie app!</h1>
        <div>{mappedMovies}</div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  //# whatever we return here gets put on the props of Landing
  return reduxState;
};

export default connect(mapStateToProps, { getMovies })(Landing);
