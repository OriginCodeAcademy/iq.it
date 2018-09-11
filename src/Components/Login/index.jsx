import { connect } from 'react-redux';
import Login from './Login';

function mapStateToProps(store) {
  return {
    user: store.loginReducer.user
  }
}

export default connect(mapStateToProps)(Login)
