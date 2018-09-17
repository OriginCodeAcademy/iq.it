import React, { Component } from 'react';
import { postLogin } from './actions';
import { Redirect } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  submitLogin() {
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
        Login!
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
