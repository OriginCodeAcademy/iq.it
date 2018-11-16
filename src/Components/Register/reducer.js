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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
  }
}
