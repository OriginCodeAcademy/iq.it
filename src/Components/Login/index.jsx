import { connect } from 'react-redux';
import Login from './Login';

function mapStateToProps(store) {
  return {
    userId: store.loginReducer.userId,
    token: store.loginReducer.token,
    email: store.loginReducer.email,
    password: store.loginReducer.password
  }
}

export default connect(mapStateToProps)(Login)
