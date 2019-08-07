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

export default connect(
  null,
  mapDispatchToProps
)(NewEmployeeComponent);
