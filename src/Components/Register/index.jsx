import { connect } from 'react-redux';
import Register from './Register';

function mapStateToProps(store) {
  return {
    token: store.user.token,
    firstName: store.registerReducer.firstName,
    lastName: store.registerReducer.lastName,
    email: store.registerReducer.email,
    password: store.registerReducer.password,
    confirmPassword: store.registerReducer.confirmPassword,
    error: store.registerReducer.error
  }
}

export default connect(mapStateToProps)(Register)
