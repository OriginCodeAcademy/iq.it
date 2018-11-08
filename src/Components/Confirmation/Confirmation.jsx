import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { postLogin } from '../Login/actions';

export default class Waiting extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch, email, password } = this.props;
    // dispatch(postLogin({ email, password }));
  }

  render() {
    if (this.props.token) {
      return <Redirect push to="/waiting" />
    }

    return (
      <div>
        <h1>Successful registration. Logging in now!</h1>
      </div>
    )
  }
};