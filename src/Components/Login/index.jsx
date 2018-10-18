import { connect } from 'react-redux';
import Login from './Login';

function mapStateToProps(store) {
  return {
    userId: store.user.userId,
    token: store.user.token,
    email: store.loginReducer.email,
    password: store.loginReducer.password
  }
}

export default connect(mapStateToProps)(Login);
