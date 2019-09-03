import { connect } from "react-redux";
import { addEmployee } from "../../actions/EmployeesActions";
import { getTechSkills, getSoftSkills } from "../../actions/skillsActions";
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
    }
  };
};

const mapStateToProps = state => ({
  role: state.authentification.role,
  copy: state.copy,
  technicalSkills: state.skills.technicalSkills,
  softSkills: state.skills.softSkills
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEmployeeComponent);
