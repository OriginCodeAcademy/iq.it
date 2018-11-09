const initialState = {
     }
  
  export default function deleteCardReducer(state = initialState, action) {
    const { payload, type } = action;
  
    switch (type) {
      case 'DELETECARD_FULFILLED': {
        return {
        }
      }

      case 'DELETECARD_INPUT': {
        return {
          ...state,
          ...payload
        }
      }
     
      case 'DELETECARD_REJECTED': {
        return state
      }

      default: {
        return state
      }
    }
  }
  