export const register = ( user ) =>
({
  type: 'REGISTER',
  payload: new Promise(resolve => resolve({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password }))
});

export const registerInput = (name, value) =>
({
  type: 'REGISTER_INPUT',
  payload: {
    [name]: value
  }
});

