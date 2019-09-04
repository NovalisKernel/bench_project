import React from "react";
import "reset.css";
import "typeface-roboto";
import { Provider } from "react-redux";
import store, { history } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";
import AppContainer from "./containers/App";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
