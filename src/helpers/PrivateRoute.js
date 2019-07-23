import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticate ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
