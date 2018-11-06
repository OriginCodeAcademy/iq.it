import { connect } from 'react-redux';
import Game from './Game';

function mapStateToProps(store) {
  return {
    user: store.user,
    game: store.game,
    active: store.game.activeCard,
    selectedAnswer: store.game.selectedAnswer
  }
}

export default connect(mapStateToProps)(Game);
