import React, { Component } from 'react';
import { postLogin } from './actions';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(postLogin({email: 'string@rick.com', password: 'password'}));
  }

  render() {
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
