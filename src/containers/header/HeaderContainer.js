import { connect } from "react-redux";
import Header from "../../components/common/Header";

const mapStateToProps = state => ({
  isAuthenticate: state.authentification.isAuthenticate
});

export default connect(
  mapStateToProps,
  null
)(Header);
