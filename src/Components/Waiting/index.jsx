import { connect } from 'react-redux';
import Waiting from './Waiting';

function mapStateToProps(store) {
  return {
    userId: store.loginReducer.userId
  }
}

export default connect(mapStateToProps)(Waiting)
