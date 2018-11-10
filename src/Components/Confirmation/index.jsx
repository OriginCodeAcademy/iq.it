import { connect } from 'react-redux';
import Confirmation from './Confirmation';

function mapStateToProps(store) {
  return {
    token: store.user.token,
    direct: store.confirmation.direct
  }
}

export default connect(mapStateToProps)(Confirmation);
