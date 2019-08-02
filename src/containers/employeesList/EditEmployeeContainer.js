import { connect } from "react-redux";
import { getEmployeeDetails } from "../../actions/EmployeesActions";
import EditEmployeeComponent from "../../components/EditEmployee/EditEmployeeComponent";

const mapStateToProps = state => ({
  employee: state.employee.employee,
  isLoading: state.employee.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    editUser: id => {
      dispatch(getEmployeeDetails(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmployeeComponent);
