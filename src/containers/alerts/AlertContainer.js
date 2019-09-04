import { connect } from "react-redux";
import { alertActions } from "../../actions/alertActions";
import ErrorSnackbar from "../../components/common/ErrorSnackbar";

const mapStateToProps = state => ({
  isAuthenticate: state.authentification.isAuthenticate,
  alert: state.alert
});

const mapDispatchToProps = dispatch => {
  return {
    clearAlert: () => {
      dispatch(alertActions.clear());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorSnackbar);
