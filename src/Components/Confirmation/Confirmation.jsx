import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { timedRedirect } from './actions';

export default class Waiting extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('inside componentDidMount');
    const { dispatch } = this.props;
    if (this.props.token) {
      console.log('inside componentDidMount if');
      setTimeout(function () {
        dispatch(timedRedirect(true))
      }, 3000)
    }
  }

  render() {
    if (this.props.direct) {
      return <Redirect push to="/waiting" />
    }

    return (
      <div>
        <h1>Successful registration. Logging in now!</h1>
      </div>
    )
  }
};