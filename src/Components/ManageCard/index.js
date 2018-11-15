import { connect } from 'react-redux';
import ManageCard from './ManageCard';

function mapStateToProps(store) {
  return {
    user: store.user,
    token: store.user.token,
    isAdmin: store.user.admin,
    cards: store.game.cards
  }
}

export default connect(mapStateToProps)(ManageCard);
