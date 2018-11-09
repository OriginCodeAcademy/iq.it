import { connect } from 'react-redux';
import ManageCard from './ManageCard';

function mapStateToProps(store) {
  return {
    user: store.user,
    token: store.loginReducer.token,
    isAdmin: store.user.isAdmin,
    cards: store.game.cards
  }
}

export default connect(mapStateToProps)(ManageCard);
