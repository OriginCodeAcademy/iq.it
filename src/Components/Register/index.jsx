import { connect } from 'react-redux';
import Register from './Register';

function mapStateToProps(store) {
  return {
    user: store.registerReducer.user
  }
}

export default connect(mapStateToProps)(Register)
