const initialState = {}

export default function loginReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        token: payload.data
      }
    }
    default: {
      return state
    }
  }
}
