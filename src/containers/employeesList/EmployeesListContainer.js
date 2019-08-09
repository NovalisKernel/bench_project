import { connect } from "react-redux";
import { getEmployees } from "../../actions/EmployeesActions";
import EmployeesList from "../../components/Employees/EmployeesList";

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: (query) => {
      dispatch(getEmployees(query));
    }
  };
};

const mapStateToProps = state => ({
  employees: state.employeesList.employees,
  isLoading: state.employeesList.isLoading,
  skills: state.skills.skills
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
