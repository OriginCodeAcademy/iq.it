import axios from 'axios';
import { postLogin } from '../Login/actions';

export const register = ( user, dispatch ) =>
({
  type: 'REGISTER',
  payload: axios.post('/api/players', {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email.toLowerCase(),
    password: user.password,
    emailVerified: false
   })
    .then(response => {
      dispatch( postLogin({ email: user.email, password: user.password }));
      return response;
    })
    .catch((error) => {
      if (error.response.data.error.message.includes('Email already exists')) {
        alert('Email already exists. Use a different email address.')
      } else { alert('Unknown error.') };
      throw error
    })
  });
  
  export const registerInput = (name, value) =>
  ({
    type: 'REGISTER_INPUT',
    payload: {
      [name]: value
    }
  });

  export const clearError = (value) =>
  ({
    type: 'CLEAR_ERROR',
    payload: value
  });