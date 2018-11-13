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

export function setActiveCard(card) {
  // axios call to query the players results for answer of cardId?
  return {
    type: 'SET_ACTIVE_CARD',
    payload: card
  } 
}

export function removeActiveCard() {
  return {
    type: 'REMOVE_ACTIVE_CARD'
  }
}
export function chooseAnswer(index) {
  return {
    type: 'CHOOSE_ANSWER',
    payload: index
  }
}
export function submitAnswer(data) {
  // if the card/answer exist in state for the player, 
  // PUT the new answer in the existing result
  return {
    type: 'SUBMIT_ANSWER',
    payload: axios.post(`/api/games/${data.gameId}/results`, data)
  }
}