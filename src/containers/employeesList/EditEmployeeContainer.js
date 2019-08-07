import { connect } from "react-redux";
import {
  getEmployeeDetails,
  deleteEmployee,
  editEmployee
} from "../../actions/EmployeesActions";
import EditEmployeeComponent from "../../components/EditEmployee/EditEmployeeComponent";

const mapStateToProps = state => ({
  employee: state.employee.employee,
  isLoading: state.employee.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getEmployeeDetails: id => {
      dispatch(getEmployeeDetails(id));
    },
    deleteEmployee: id => {
      dispatch(deleteEmployee(id));
    },
    editEmployee: (id, values) => {
      dispatch(editEmployee(id, values))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmployeeComponent);
