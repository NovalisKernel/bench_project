import { connect } from "react-redux";
import { loginUser } from "../../actions/AuthActions";
import LoginComponent from "../../components/Login/LoginComponent";

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (username, password) => {
      dispatch(loginUser(username, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginComponent);
