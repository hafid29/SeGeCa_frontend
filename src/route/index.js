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
  TambahCatering,
  UserAbout,
  UserContact,
  UserGedung,
  UserCatering,
  AdminGedung,
  AdminCatering,
  HalamanOrderGedung1,
  HalamanOrderCatering1,
  PemesananUser,
  InfoOrder
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
        <Route path="/tambahcatering">
          <TambahCatering></TambahCatering>
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
        <Route path="/admingedung">
          <AdminGedung></AdminGedung>
        </Route>
        <Route path="/admincatering">
          <AdminCatering></AdminCatering>
        </Route>
        <Route path="/halamanordergedung1">
          <HalamanOrderGedung1></HalamanOrderGedung1>
        </Route>
        <Route path="/halamanordercatering1">
          <HalamanOrderCatering1></HalamanOrderCatering1>
        </Route>
        <Route path="/pemesananuser">
          <PemesananUser></PemesananUser>
        </Route>
        <Route path="/infoorder">
          <InfoOrder></InfoOrder>
        </Route>
      </Switch>
    </Provider>
  );
};
export default Routes;
