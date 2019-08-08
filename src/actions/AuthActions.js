import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./constants";
import { tokenHelper } from "../helpers/TokenHelper";
import setAuthHeader from "../helpers/AuthHeader";
import { alertActions } from "./alertActions";
import ajax from "../helpers/Axios";
import customAxios from "../helpers/AxiosRefreshToken";
import { push } from "connected-react-router";

export const loginUser = (username, password) => async dispatch => {
  dispatch(request({ username }));
  try {
    const response = await ajax.post("auth/token", {
      username,
      password
    });
    const { access_token, refresh_token } = response.data;
    tokenHelper.setAuthToken(access_token, refresh_token);
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    try {
      const userResponse = await customAxios.get("auth/profile");
      const user = userResponse.data;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(success(user));
      dispatch(alertActions.clear());
      dispatch(push("/"));
    } catch (error) {
      dispatch(failure(error));
      dispatch(alertActions.error(error));
    }
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      error.message = "You are not permitted for this";
    }
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }

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

export const logout = () => dispatch => {
  tokenHelper.clearAuthToken();
  localStorage.removeItem("user");
  dispatch(push("/login"));
  dispatch(alertActions.clear());
  dispatch({ type: LOGOUT });
};
