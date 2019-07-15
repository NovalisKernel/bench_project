import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
import authHeader from "../helpers/AuthHeader";
import axios from "axios";

export const loginUser = (username, password) => dispatch => {
  //TODO: Action for login
  axios.post("http://localhost:5000/users");
};
