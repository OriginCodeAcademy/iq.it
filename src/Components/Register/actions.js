import axios from 'axios';
import { postLogin } from '../Login/actions';

export const register = ( user, dispatch ) =>
({
  type: 'REGISTER',
  payload: axios.post('/api/players', {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password })
    .then(response => {
      dispatch( postLogin({ email: user.email, password: user.password }))
      return response;
    })
});

export const registerInput = (name, value) =>
({
  type: 'REGISTER_INPUT',
  payload: {
    [name]: value
  }
});

