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

const mapStateToProps = state => ({
  isLoading: state.authentification.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
