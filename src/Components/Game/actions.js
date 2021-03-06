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

export function checkGameStatus(token) {
  return {
    type: 'CHECK_GAME_STATUS',
    payload: axios.get('/api/games?filter[where][status]=open', { headers: { 'Content-Type': 'application/json', 'Authorization': token } })
      .then(({ data }) => data[0] || 'closed')
  }
}

export function setActiveCard(card) {
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

export function submitAnswer(data, history, token) {
  const historyItem = history.find(singleHistoryItem => singleHistoryItem.cardId === data.cardId)
  if (historyItem) {
    return {
      type: 'SUBMIT_ANSWER',
      payload: axios.put(`/api/results/${historyItem.id}`, data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } })
    }
  } else {
      return {
        type: 'SUBMIT_ANSWER',
        payload: axios.post(`/api/games/${data.gameId}/results`, data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } })
      }
    } 
}
