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
      console.log('reg response: ', response);
      return response;
    })
    .catch((err) => {
      console.log('results err: ', err.message);
    })
});

export const registerInput = (name, value) =>
({
  type: 'REGISTER_INPUT',
  payload: {
    [name]: value
  }
});

