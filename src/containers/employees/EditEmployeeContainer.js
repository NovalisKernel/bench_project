import { connect } from "react-redux";
import {
  getEmployeeDetails,
  deleteEmployee,
  editEmployee,
  copyEmployee
} from "../../actions/EmployeesActions";
import EditEmployeeComponent from "../../components/EditEmployee/EditEmployeeComponent";

const mapStateToProps = state => ({
  employee: state.employee.employee,
  isLoading: state.employee.isLoading,
  role: state.authentification.role,
  skills: state.skills.skills
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
    },
    copyEmployee: (values) => {
      dispatch(copyEmployee(values))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmployeeComponent);
