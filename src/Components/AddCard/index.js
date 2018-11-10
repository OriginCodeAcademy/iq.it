import { connect } from 'react-redux';
import AddCard from './AddCard';

function mapStateToProps(store) {
  return {
    newCard: store.addCard
  }
}

export default connect(mapStateToProps)(AddCard);