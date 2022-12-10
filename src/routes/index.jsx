import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/home";
import Questions from "../components/questions";
import Contact from "../components/contact";

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}
