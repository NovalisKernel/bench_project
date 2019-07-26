import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
import authHeader from "../helpers/AuthHeader";
import axios from "axios";
import customAxios from "../helpers/AxiosRefreshToken";
import { push } from "connected-react-router";

const fakeLoginRequest = username =>
  new Promise((resolve, reject) =>
    username === "Admin" ? resolve({ user: username }) : reject("No user")
  );

export const loginUser = (username, password) => dispatch => {
  dispatch(request({ username }));
  fakeLoginRequest(username).then(
    user => {
      dispatch(success(user));
      dispatch(push("/"));
    },
    error => {
      dispatch(failure(error.toString()));
    }
  );
  // customAxios.post("http://localhost:5000/login", { username, password }).then(
  //   user => {
  //     dispatch(success(user));
  //   },
  //   error => {
  //     dispatch(failure(error.toString()));
  //   }
  // );
  function request(user) {
    return { type: LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error };
  }
};
