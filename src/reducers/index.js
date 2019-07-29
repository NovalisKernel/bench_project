import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./AuthReducer";
import alertReducer from "./AlertReducer";

export default history =>
  combineReducers({
    authentification: authReducer,
    router: connectRouter(history),
    alert: alertReducer
  });
