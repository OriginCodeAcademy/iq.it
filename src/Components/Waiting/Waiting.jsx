import React, { Component } from 'react';
import { setWaitingStatus } from './actions';
import { Redirect } from 'react-router';

export default class Waiting extends Component {
  componentDidMount() {
    const { dispatch, userId } = this.props;

    if (userId) {
      dispatch(setWaitingStatus(true));
    }
  }
  render() {
    if (!this.props.userId) {
      return <Redirect push to="/" />
    }

    return (
      <div id="waiting">
        <svg className="spin" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        <h1>Waiting!</h1>
      </div>
    )
  }
}
