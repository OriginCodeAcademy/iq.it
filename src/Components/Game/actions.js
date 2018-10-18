import axios from 'axios';

export function startGame() {
  return {
    type: 'SERVER_START_GAME',
    payload: axios.post('/api/games', { status: 'open' })
  }
}

export function gameStarted() {
  return {
    type: 'GAME_STARTED',
    payload: true
  }
}

export function checkGameStatus() {
  return {
    type: 'CHECK_GAME_STATUS',
    payload: axios.get('/api/games?filter[where][status]=open')
      .then(({ data }) => data[0] || 'closed')
  }
}

export function getCards() {
  return {
    type: 'GET_CARDS_FOR_GAME',
    payload: axios.get('/api/cards')
      .then(({ data }) => data)
  }
}

export function setActiveCard(card) {
  return {
    type: 'SET_ACTIVE_CARD',
    payload: card
  }
}
export function deactivateCard() {
  return {
    type: 'REMOVE_ACTIVE_CARD'
  }
}
