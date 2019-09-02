import { connect } from "react-redux";
import { getEmployees } from "../../actions/EmployeesActions";
import { logout } from "../../actions/AuthActions";
import EmployeesList from "../../components/Employees/EmployeesList";

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: (query) => {
      dispatch(getEmployees(query));
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

const mapStateToProps = state => ({
  employees: state.employeesList.employees,
  isLoading: state.employeesList.isLoading,
  skills: state.skills.skills,
  isAuthenticate: state.authentification.isAuthenticate,
  user: state.authentification.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
