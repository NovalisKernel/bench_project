import { connect } from "react-redux";
import { logout } from "../../actions/AuthActions";
import Header from "../../components/common/Header";

const mapStateToProps = state => ({
  isAuthenticate: state.authentification.isAuthenticate,
  user: state.authentification.user
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
