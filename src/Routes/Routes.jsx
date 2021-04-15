import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AuthLogin from "../Pages/AuthLogin";
import AuthRegister from "../Pages/AuthRegister";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import InnerPage from "../Pages/InnerPage";
import InputTask from "../Pages/InputTask";
import PrivateRoute from "../Components/PrivateRoute";
import { TimeSheets } from "../MainApp/AppPages/TimeSheets";
import NavBarLogin from "../Components/NavBarLogin";
export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
          <Footer />
          {/* <h1>Wow</h1> */}
        </Route>
        <PrivateRoute path="/timesheets" exact>
          <NavBarLogin />
          <TimeSheets />
          <Footer />
          {/* <h1>Wow</h1> */}
        </PrivateRoute>
        <Route path="/auth-login" exact>
          <AuthLogin />
          <Footer />
        </Route>
        <Route path="/auth-register" exact>
          <NavBar />
          <AuthRegister />
          <Footer />
        </Route>
        <PrivateRoute path="/inner-page" exact>
          <NavBarLogin />
          <InnerPage />
        </PrivateRoute>
        <PrivateRoute path="/input-page" exact>
          <NavBarLogin />
          <InputTask />
          <Footer />
        </PrivateRoute>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}
