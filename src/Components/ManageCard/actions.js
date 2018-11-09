import axios from 'axios';

export function getCards() {
    return {
      type: 'GET_CARDS_FOR_GAME',
      payload: axios.get('/api/cards')
        .then(({ data }) => data)
    }
  }

