import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withLayout } from "../hoc/WithLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginComponent from "../containers/login/LoginContainer";
import EmployeesList from "../containers/employeesList/EmployeesListContainer";
import NewEmployeeComponent from "../containers/employeesList/NewEmployeeContainer";
import EditEmployeeComponent from "../containers/employeesList/EditEmployeeContainer";
import ErrorSnackbar from "../containers/alerts/AlertContainer";

function App(props) {
  return (
    <React.Fragment>
      <ErrorSnackbar />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={withLayout(EmployeesList)}
          isAuthenticate={props.isAuthenticate}
        />
        <Route path="/login" component={withLayout(LoginComponent)} />
        <PrivateRoute
          path="/new-employee"
          component={withLayout(NewEmployeeComponent)}
          isAuthenticate={props.isAuthenticate}
        />
        <Route path="/edit/:id" component={withLayout(EditEmployeeComponent)} />
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  isAuthenticate: state.authentification.isAuthenticate
});

export default connect(
  mapStateToProps,
  null
)(App);
