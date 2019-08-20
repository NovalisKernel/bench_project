import { connect } from "react-redux";
import { addEmployee } from "../../actions/EmployeesActions";
import NewEmployeeComponent from "../../components/NewEmployee/NewEmployeeComponent";

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: values => {
      dispatch(addEmployee(values));
    }
  };
};

const mapStateToProps = state => ({
  role: state.authentification.role,
  copy: state.copy
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEmployeeComponent);
