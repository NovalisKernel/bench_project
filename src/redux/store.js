import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

export const history = createBrowserHistory();

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const thunkMiddleware = applyMiddleware(thunk);
const router = applyMiddleware(routerMiddleware(history));

export default createStore(
  rootReducer(history),
  composeEnhancers(thunkMiddleware, router)
);
