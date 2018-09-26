import { connect } from 'react-redux';
import Register from './Register';

function mapStateToProps(store) {
  return {
    firstName: store.registerReducer.firstName,
    lastName: store.registerReducer.lastName,
    email: store.registerReducer.email,
    password: store.registerReducer.password,
    confirmPassword: store.registerReducer.confirmPassword
  }
}

export default connect(mapStateToProps)(Register)
