import axios from 'axios';

export function getCards() {
  return {
    type: 'GET_CARDS_FOR_GAME',
    payload: axios.get('/api/cards')
      .then(({ data }) => data)
  }
}

export function serverSetActiveCard(card) {
  return {
    type: 'SERVER_SET_ACTIVE_CARD',
    payload: card
  }
}
export function serverRemoveActiveCard() {
  return {
    type: 'SERVER_REMOVE_ACTIVE_CARD'
  }
}
