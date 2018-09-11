const initialState = {
  user: null
}

export default function registerReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        user: payload
      }
    }
    default: {
      return state
    }
  }
}
