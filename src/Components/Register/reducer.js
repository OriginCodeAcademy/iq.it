const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
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
    case 'REGISTER_INPUT': {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state
    }
  }`
}
