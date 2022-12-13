import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "../components/home";
import Questions from "../components/questions";
import Contact from "../components/contact";
import { useSelector } from "react-redux";

export default function Routers() {
  const disabled = useSelector((state) => state.home.disableTab);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {!disabled ? (
          <Route path="/questions">
            <Questions />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </>
  );
}
