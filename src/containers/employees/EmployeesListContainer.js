import { connect } from "react-redux";
import { getEmployees } from "../../actions/EmployeesActions";
import { logout } from "../../actions/AuthActions";
import { getTechSkills, getSoftSkills } from "../../actions/skillsActions";
import EmployeesList from "../../components/Employees/EmployeesList";

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: query => {
      dispatch(getEmployees(query));
    },
    getTechSkills: () => {
      dispatch(getTechSkills());
    },
    getSoftSkills: () => {
      dispatch(getSoftSkills());
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

const mapStateToProps = state => ({
  employees: state.employeesList.employees,
  isLoading: state.employeesList.isLoading,
  techSkills: state.skills.technicalSkills,
  softSkills: state.skills.softSkills,
  isAuthenticate: state.authentification.isAuthenticate,
  user: state.authentification.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
