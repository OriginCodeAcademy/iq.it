const initialState = {}

export default function loginReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case 'POST_LOGIN_FULFILLED': {
      return {
        ...state,
        token: payload.id,
        id: payload.userId
      }
    }
    case 'POST_LOGIN_REJECTED': {
      return {
        ...state,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}
