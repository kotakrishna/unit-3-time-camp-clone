import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PrivateRoute({
  children,
  path,
  redirectPath = "auth-login",
  exact = false,
}) {
  const isAuth = useSelector((state) => state.isAuth);
  return isAuth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );
}
