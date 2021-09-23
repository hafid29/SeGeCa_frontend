import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeView, Login, Register } from "../view";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView></HomeView>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
    </Switch>
  );
};
export default Routes;
