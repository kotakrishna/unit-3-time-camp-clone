import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AuthLogin from "../Pages/AuthLogin";
import AuthRegister from "../Pages/AuthRegister";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import InnerPage from "../Pages/InnerPage";
import { TimeSheets } from '../MainApp/AppPages/TimeSheets';
export default function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
          {/* <h1>Wow</h1> */}
        </Route>
        <Route path="/auth-login" exact>
          <AuthLogin />
        </Route>
        <Route path="/auth-register" exact>
          <AuthRegister />
        </Route>
        <Route path="/inner-page" exact>
          <InnerPage />
        </Route>
        <Route path="/timesheets" exact>
          <TimeSheets />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
