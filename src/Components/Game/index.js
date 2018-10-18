import { connect } from 'react-redux';
import Game from './Game';

function mapStateToProps(store) {
  return {
    user: store.user,
    token: store.loginReducer.token,
    isAdmin: store.user.isAdmin,
    cards: store.game.cards,
    active: store.game.activeCard
  }
}

export default connect(mapStateToProps)(Game);
