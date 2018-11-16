const initialState = {
    direct: false
  }
  
  export default function confirmationReducer(state = initialState, action) {
    const { payload, type } = action;
  
    switch (type) {
      case 'TIMED_REDIRECT': {
        return {
          ...state,
          direct: payload
        }
      }
      
      default: {
        return state
      }
    }
  }