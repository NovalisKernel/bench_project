import React from "react";
import { Route, Redirect } from "react-router-dom";
import fakeAuth from "../__mock__/fakeAuth";

const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticate === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
