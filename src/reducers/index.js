import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./AuthReducer";

export default history =>
  combineReducers({
    authentification: authReducer,
    router: connectRouter(history)
  });
