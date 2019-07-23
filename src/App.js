import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { withLayout } from "./hoc/WithLayout";
import store from "./redux/store";
import LoginComponent from "./containers/login/LoginContainer";
import EmployeesList from "./components/Employees/EmployeesList";
import NewEmployeeComponent from "./components/NewEmployee/NewEmployeeComponent";
import EditEmployeeComponent from "./components/EditEmployee/EditEmployeeComponent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={withLayout(EmployeesList)} />
          <Route path="/login" component={withLayout(LoginComponent)} />
          <Route
            path="/new-employee"
            component={withLayout(NewEmployeeComponent)}
          />
          <Route path="/edit/:id" component={withLayout(EditEmployeeComponent)} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
