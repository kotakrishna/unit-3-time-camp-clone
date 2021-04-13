import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AuthLogin from "../Pages/AuthLogin";
import AuthRegister from "../Pages/AuthRegister";
export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth-login" exact>
          <AuthLogin />
        </Route>
        <Route path="/auth-register" exact>
          <AuthRegister />
        </Route>
      </Switch>
    </div>
  );
}
