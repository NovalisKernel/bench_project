import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
import { alertActions } from "./alertActions";
import axios from "axios";
import customAxios from "../helpers/AxiosRefreshToken";
import { push } from "connected-react-router";

export const loginUser = (username, password) => dispatch => {
  dispatch(request({ username }));
  axios
    .post("https://morning-brushlands-61529.herokuapp.com/auth/token", {
      username,
      password
    })
    .then(
      response => {
        const { access_token, refresh_token } = response.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        customAxios
          .get("https://morning-brushlands-61529.herokuapp.com/auth/profile")
          .then(
            response => {
              const user = response.data;
              dispatch(success(user));
              dispatch(push("/"));
            },
            error => {
              dispatch(failure(error));
              dispatch(alertActions.error(error));
            }
          );
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
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
