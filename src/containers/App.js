import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withLayout, withFooter, withoutFooter } from "../hoc";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginComponent from "../containers/login/LoginContainer";
import EmployeesList from "../containers/employees/EmployeesListContainer";
import NewEmployeeComponent from "../containers/employees/NewEmployeeContainer";
import EditEmployeeComponent from "../containers/employees/EditEmployeeContainer";
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
          component={withoutFooter(NewEmployeeComponent)}
          isAuthenticate={props.isAuthenticate}
        />
        <PrivateRoute
          path="/edit/:id"
          component={withoutFooter(EditEmployeeComponent)}
          isAuthenticate={props.isAuthenticate}
        />
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
