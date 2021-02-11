import React from "react";
import { Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Landing from "./components/Landing";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/movie/:id" component={Movie} />
  </Switch>
);
