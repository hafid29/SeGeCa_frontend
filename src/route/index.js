import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

import {
  HomeView,
  Login,
  Register,
  FormDataUser,
  ViewDashboard,
  ViewDashboardUser,
  TambahGedung,
  UserAbout,
  UserContact,
  UserGedung,
  UserCatering
} from "../view";
const Routes = () => {
  return (
    // Mendaftarkan router ke redux
    <Provider store={store}>
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
        <Route path="/formdatauser">
          <FormDataUser></FormDataUser>
        </Route>
        <Route path="/tambahgedung">
          <TambahGedung></TambahGedung>
        </Route>
        <Route path="/userabout">
          <UserAbout></UserAbout>
        </Route>
        <Route path="/usercontact">
          <UserContact></UserContact>
        </Route>
        <Route path="/usergedung">
          <UserGedung></UserGedung>
        </Route>
        <Route path="/usercatering">
          <UserCatering></UserCatering>
        </Route>
      </Switch>
    </Provider>
  );
};
export default Routes;
