import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST
} from "../actions/constants";

const initialState = {
  user: {},
  isAuthenticate: false
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isAuthenticate: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        isAuthenticate: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}
