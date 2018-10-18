const initialState = {
  started: false,
  cards: [],
  activeCard: null
}

export default function gameReducer(state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case 'SERVER_START_GAME_FULFILLED': {
      return {
        ...state,
        started: true,
        id: payload.data.id
      }
    }
      
    case 'GAME_STARTED': {
      return {
        ...state,
        started: true
      }
    }
      
    case 'CHECK_GAME_STATUS_FULFILLED': {

      if (payload === 'closed') {
        return {
          ...state,
          started: false
        }
      }

      return {
        ...state,
        started: true,
        id: payload.id
      }
    }
      
    case 'SET_ACTIVE_CARD': { 
      return {
        ...state,
        activeCard: payload,
        cards: state.cards.map(card => card.id === payload.id ? { ...card, used: true } : card)
      }
    }
      
    case 'GET_CARDS_FOR_GAME_FULFILLED': {
      return {
        ...state,
        cards: payload.map(card => ({...card, used: false}))
      }
    }
      
    case 'REMOVE_ACTIVE_CARD': {
      return {
        ...state,
        activeCard: null 
      }
    }
    
    default:
      return state;
  }
}
