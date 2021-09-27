import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeView, Login, Register } from "../view";
import ViewDashboard from "../view/Dashboard";
import { ViewDashboardUser } from "../view";
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
      <Route path="/dashboard">
        <ViewDashboard></ViewDashboard>
      </Route>
      <Route path="/dashboarduser">
        <ViewDashboardUser></ViewDashboardUser>
      </Route>
    </Switch>
  );
};
export default Routes;
