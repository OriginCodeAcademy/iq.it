export const login = () =>
({
  type: 'LOGIN',
  payload: new Promise(resolve => resolve({ token: '1234' }))
});
