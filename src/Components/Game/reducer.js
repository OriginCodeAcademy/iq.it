const initialState = {
  started: false,
  activeCard: null,
  cards: [],
  selectedAnswer: null,
  history: []
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
      //find result inside of history array where the result matches the card about to be active
      const historyItem = state.history.find(singleHistoryItem => singleHistoryItem.cardId === payload.id)
      //find their answer inside of the active card, and get the index of it
      let index = null;
      if (historyItem) {
        index = payload.answers.findIndex(answer => answer.title === historyItem.selected.title);
      }
      return {
        ...state,
        activeCard: payload,
        selectedAnswer: index
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
    //need conditional to determine whether to write new object to store OR update existing with new answer,
      return {
        ...state,
        selectedAnswer: null,
        activeCard: null,
        history: [...state.history, payload.data]
            
      }
    }
    default:
      return state;
  }
}

// state.history = [{
//   points: 1,
//   selected: {
//     title: '== checks for loose equality while === checks for strict equality',
//     isCorrect: false
//   },
//   id: '5be9d87843767a68852d1c5d',
//   cardId: '5be210b3d383190a92b8d6ba',
//   playerId: '5be1ef81d383190a92b8d6b3',
//   gameId: '5be1f10bd383190a92b8d6b4'
// }]

// payload = {
//   id: '5be210b3d383190a92b8d6ba',
//   points: 1,
//   question: 'What is the difference between = and === ?',
//   answers: [
//     {
//       title: '= assigns while === compares'
//     },
//     {
//       title: '== checks for loose equality while === checks for strict equality'
//     },
//     {
//       title: '=== assigns while == compares'
//     },
//     {
//       title: '=== checks for loose equality while == checks for strict equality'
//     }
//   ]
// }