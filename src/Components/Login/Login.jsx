import React, { Component } from 'react';
import { postLogin, updateEmail, updatePassword } from './actions';
import { Redirect } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleEmail(e) {
    const { dispatch } = this.props;
    dispatch( updateEmail( e.target.value ) );
  }

  handlePassword(e) {
    const { dispatch } = this.props;
    dispatch( updatePassword( e.target.value ) );
  }

  submitLogin(e) {
    e.preventDefault();
    const { dispatch, email, password } = this.props;
    dispatch(postLogin({ email, password }));
  }

  render() {
    if (this.props.token) {
      return <Redirect push to="/waiting" />
    }

    return (
      <div>
        <nav>
          <ul>
            <li><a href="#/register">Register</a></li>
            <li><a href="#/waiting">Waiting</a></li>
          </ul>
        </nav>
        <h1>Login!</h1>
        <form onSubmit={ this.submitLogin }>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={this.handleEmail} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handlePassword} />
          <button type="submit" id="submit">Login</button>
        </form>
      </div>
    )
  }
}
