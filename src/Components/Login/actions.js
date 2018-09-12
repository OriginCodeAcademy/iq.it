import axios from 'axios';

export const login = () => {
return {
  type: 'LOGIN',
  payload: new Promise(resolve => resolve({ token: '1234' }))
}};

export const postLogin = (userData) => {
  return {
    type: 'POST_LOGIN',
    payload: axios.post('api/players/login', userData)
      .then(response => response.data)
  }
};
