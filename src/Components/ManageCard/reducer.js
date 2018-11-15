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

      default: {
        return state
      }
    }
  }
  