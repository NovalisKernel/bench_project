import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withLayout } from "../hoc/WithLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginComponent from "../containers/login/LoginContainer";
import EmployeesList from "../containers/employeesList/EmployeesListContainer";
import NewEmployeeComponent from "../components/NewEmployee/NewEmployeeComponent";
import EditEmployeeComponent from "../containers/employeesList/EditEmployeeContainer";
import ErrorSnackbar from "../components/common/ErrorSnackbar";

function App(props) {
  return (
    <React.Fragment>
      <ErrorSnackbar error={props.alert} />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={withLayout(EmployeesList)}
          isAuthenticate={props.isAuthenticate}
        />
        <Route path="/login" component={withLayout(LoginComponent)} />
        <Route
          path="/new-employee"
          component={withLayout(NewEmployeeComponent)}
        />
        <Route path="/edit/:id" component={withLayout(EditEmployeeComponent)} />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isAuthenticate: state.authentification.isAuthenticate,
  alert: state.alert
});

export default connect(mapStateToProps)(App);
