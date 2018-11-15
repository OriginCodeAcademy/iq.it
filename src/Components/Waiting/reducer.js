const initialState = {}

export default function waitingReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case 'WAITING': {
      return {
        ...state,
        waiting: payload
      }
    }
    
    default: {
      return state
    }
  }
}
