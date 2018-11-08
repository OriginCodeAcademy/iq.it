import { connect } from 'react-redux';
import Confirmation from './Confirmation';

function mapStateToProps(store) {
  return {
    token: store.user.token,
    email: store.registerReducer.email,
    password: store.registerReducer.password
  }
}

export default connect(mapStateToProps)(Confirmation);
