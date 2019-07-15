import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginComponent from "./components/Login/LoginComponent";
import Header from "./components/common/Header";
import EmployeesList from "./components/Employees/EmployeesList";
import NewEmployeeComponent from "./components/NewEmployee/NewEmployeeComponent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={EmployeesList} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/new-employee" component={NewEmployeeComponent} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
