import axios from 'axios';

export function getCards(token) {
    return {
      type: 'GET_CARDS_FOR_GAME',
      payload: axios.get('/api/cards', { headers: { 'Content-Type': 'application/json', 'Authorization': token } })
        .then(({ data }) => data)
    }
  }

