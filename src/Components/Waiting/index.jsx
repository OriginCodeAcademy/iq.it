import { connect } from 'react-redux';
import Waiting from './Waiting';

function mapStateToProps(store) {
  return {
    userId: store.user.userId,
    isAdmin: store.user.admin,
    gameStarted: store.game.started,
  }
}

export default connect(mapStateToProps)(Waiting);
