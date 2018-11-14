import { connect } from 'react-redux';
import AddCard from './AddCard';

function mapStateToProps(store) {
  return {
    token: store.user.token,
    isAdmin: store.user.admin,
    newCard: store.addCard
  }
}

export default connect(mapStateToProps)(AddCard);