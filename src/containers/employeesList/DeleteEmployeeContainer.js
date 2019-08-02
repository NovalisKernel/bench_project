import { connect } from "react-redux";
import { deleteEmployee } from "../../actions/EmployeesActions";
import EditEmployeeComponent from "../../components/EditEmployee/EditEmployeeComponent";

const mapDispatchToProps = dispatch => {
    return {
        deleteEmployee: id => {
        dispatch(deleteEmployee(id));
      }
    };
  };

export default connect(null,mapDispatchToProps)(EditEmployeeComponent);