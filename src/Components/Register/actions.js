export const register = () =>
({
  type: 'REGISTER',
  payload: new Promise(resolve => resolve({ firstName: 'Reggie', lastName: 'Registration' }))
});
