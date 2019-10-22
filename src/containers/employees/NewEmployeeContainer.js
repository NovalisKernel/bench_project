import { connect } from "react-redux";
import { addEmployee } from "../../actions/EmployeesActions";
import { getTechSkills, getSoftSkills } from "../../actions/skillsActions";
import { getGroups } from "../../actions/groupsAction";
import NewEmployeeComponent from "../../components/NewEmployee/NewEmployeeComponent";

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: values => {
      dispatch(addEmployee(values));
    },
    getTechSkills: () => {
      dispatch(getTechSkills());
    },
    getSoftSkills: () => {
      dispatch(getSoftSkills());
    },
    getGroups: () => {
      dispatch(getGroups());
    }
  };
};

const mapStateToProps = state => ({
  role: state.authentification.role,
  copy: state.copy,
  technicalSkills: state.skills.technicalSkills,
  softSkills: state.skills.softSkills,
  groups: state.groups.groups
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEmployeeComponent);
