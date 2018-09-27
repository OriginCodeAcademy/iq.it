import React, { Component } from 'react';
import { register, registerInput } from './actions';
import { Redirect } from 'react-router';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { name, value } = event.target;
    dispatch(registerInput(name, value));
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.confirmPassword === this.props.password) {
      const { dispatch, firstName, lastName, email, password } = this.props;
      dispatch(register({ firstName, lastName, email, password }, dispatch ))
    } else {
      alert('Passwords do not match');
    }
  }

  render() {
    if (this.props.token) {
      return <Redirect push to="/waiting" />
    }

    return (
      <div className='registration-container'>
        <div class='heading'>
          <h1>Register!</h1>
        </div>
        <hr></hr>
        <form onSubmit={this.handleSubmit} className='registration-form'>

          <label htmlFor='first-name' className='first-name-label'>First Name: </label>
          <input onChange={this.handleChange} name='firstName' type='text' required/>

          <label htmlFor='last-name' className='last-name-label'>Last Name: </label>
          <input onChange={this.handleChange} name='lastName' type='text' required />

          <label htmlFor='email' className='email-label'>E-Mail: </label>
          <input onChange={this.handleChange} name='email' type='email' required />

          <label htmlFor='password' className='password-label'>Create Password: </label>
          <input onChange={this.handleChange} name='password' type='text' required />

          <label htmlFor='password-confirm' className='password-confirmation-label'>Confirm Password: </label>
          <input onChange={this.handleChange} name='confirmPassword' type='text' required />

          <button className='button submit' type='submit'>Register</button>
        </form>
      </div>
    )
  }
}
