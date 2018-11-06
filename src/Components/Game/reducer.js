const initialState = {
  started: false,
  activeCard: null,
  cards: [],
  selectedAnswer: null
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

    case 'GET_CARDS_FOR_GAME_FULFILLED': {
      return {
        ...state,
        cards: payload.map(card => ({...card, used: false}))
      }
    }
      
    case 'SERVER_SET_ACTIVE_CARD': { 
      return {
        ...state,
        activeCard: payload,
        cards: state.cards.map(card => card.id === payload.id ? { ...card, used: true } : card)
      }
    }
      
    case 'SERVER_REMOVE_ACTIVE_CARD': {
      return {
        ...state,
        activeCard: null 
      }
    }
      
    case 'SET_ACTIVE_CARD': { 
      return {
        ...state,
        activeCard: payload
      }
    }
      
    case 'REMOVE_ACTIVE_CARD': {
      return {
        ...state,
        activeCard: null 
      }
    }
    
    case 'CHOOSE_ANSWER': {
      return {
        ...state,
        selectedAnswer: payload
      }
    }
    case 'SUBMIT_ANSWER_FULFILLED': {
      return {
        ...state,
        selectedAnswer: null,
        activeCard: null
      }
    }
    default:
      return state;
  }
}
