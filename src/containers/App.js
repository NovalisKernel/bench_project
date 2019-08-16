import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withLayout } from "../hoc/WithLayout";
import { withFooter } from "../hoc/WithFooter";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginComponent from "../containers/login/LoginContainer";
import EmployeesList from "../containers/employeesList/EmployeesListContainer";
import NewEmployeeComponent from "../containers/employeesList/NewEmployeeContainer";
import EditEmployeeComponent from "../containers/employeesList/EditEmployeeContainer";
import NotFound from "../components/common/NotFound";
import ErrorSnackbar from "../containers/alerts/AlertContainer";

function App(props) {
  return (
    <React.Fragment>
      <ErrorSnackbar />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={withFooter(EmployeesList)}
          isAuthenticate={props.isAuthenticate}
        />
        <Route path="/login" component={withLayout(LoginComponent)} />
        <PrivateRoute
          path="/new-employee"
          component={withLayout(NewEmployeeComponent)}
          isAuthenticate={props.isAuthenticate}
        />
        <PrivateRoute path="/edit/:id" component={withLayout(EditEmployeeComponent)} />
        <Route component={withLayout(NotFound)} />
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
