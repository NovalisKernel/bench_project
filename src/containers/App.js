import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { withLayout } from "../hoc/WithLayout";
import { history } from "../redux/store";
import { alertActions } from "../actions/alertActions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginComponent from "../containers/login/LoginContainer";
import EmployeesList from "../containers/employeesList/EmployeesListContainer";
import NewEmployeeComponent from "../components/NewEmployee/NewEmployeeComponent";
import EditEmployeeComponent from "../containers/employeesList/EditEmployeeContainer";

function App(props) {
  const { dispatch } = props;
  history.listen((location, action) => {
    dispatch(alertActions.clear());
  });
  return (
    <React.Fragment>
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
  isAuthenticate: state.authentification.isAuthenticate
});

export default connect(mapStateToProps)(App);
