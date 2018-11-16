import { connect } from 'react-redux';
import Game from './Game';

function mapStateToProps(store) {
  return {
    user: store.user,
    token: store.user.token,
    game: store.game,
    active: store.game.activeCard,
    selectedAnswer: store.game.selectedAnswer,
    history: store.game.history
  }
}

export default connect(mapStateToProps)(Game);
