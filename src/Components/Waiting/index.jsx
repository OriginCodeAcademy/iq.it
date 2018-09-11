import { connect } from 'react-redux';
import Waiting from './Waiting';

function mapStateToProps(store) {
  return {
    user: store.waitingReducer.user
  }
}

export default connect(mapStateToProps)(Waiting)
