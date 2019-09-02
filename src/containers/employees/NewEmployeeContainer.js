import { connect } from "react-redux";
import { addEmployee, getSkills } from "../../actions/EmployeesActions";
import NewEmployeeComponent from "../../components/NewEmployee/NewEmployeeComponent";

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: values => {
      dispatch(addEmployee(values));
    },
    getSkills: () => {
      dispatch(getSkills());
    }
  };
};

const mapStateToProps = state => ({
  role: state.authentification.role,
  copy: state.copy,
  skills: state.skills.skills
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEmployeeComponent);
