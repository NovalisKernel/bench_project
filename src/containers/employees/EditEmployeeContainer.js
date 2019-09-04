import { connect } from "react-redux";
import {
  getEmployeeDetails,
  deleteEmployee,
  editEmployee,
  copyEmployee
} from "../../actions/EmployeesActions";
import { getTechSkills, getSoftSkills } from "../../actions/skillsActions";
import EditEmployeeComponent from "../../components/EditEmployee/EditEmployeeComponent";

const mapStateToProps = state => ({
  employee: state.employee.employee,
  isLoading: state.employee.isLoading,
  role: state.authentification.role,
  technicalSkills: state.skills.technicalSkills,
  softSkills: state.skills.softSkills
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
      dispatch(editEmployee(id, values));
    },
    copyEmployee: values => {
      dispatch(copyEmployee(values));
    },
    getTechSkills: () => {
      dispatch(getTechSkills());
    },
    getSoftSkills: () => {
      dispatch(getSoftSkills());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmployeeComponent);
