import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT
} from "../actions/constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? {
      user: user,
      isAuthenticate: true,
      isLoading: false,
      role: user.position
    }
  : { user: {}, isAuthenticate: false, isLoading: false, role: "" };

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isAuthenticate: false,
        user: action.user,
        isLoading: true,
        role: ""
      };
    case LOGIN_SUCCESS:
      return {
        isAuthenticate: true,
        user: action.user,
        isLoading: false,
        role: action.user.position
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {
        isAuthenticate: false,
        user: {},
        isLoading: false,
        role: ""
      };
    default:
      return state;
  }
}
