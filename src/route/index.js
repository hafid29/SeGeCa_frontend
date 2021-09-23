import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeView, Login } from "../view";
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
        <h1>Ini Halaman Register</h1>
      </Route>
    </Switch>
  );
};
export default Routes;
