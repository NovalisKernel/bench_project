import { connect } from "react-redux";
import { getEmployees } from "../../actions/EmployeesActions";
import EmployeesList from "../../components/Employees/EmployeesList";

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => {
      dispatch(getEmployees());
    }
  };
};

const mapStateToProps = state => ({
  employees: state.employeesList.employees,
  isLoading: state.employeesList.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
