import React, { Component } from 'react';
import { setWaitingStatus } from './actions';

export default class Waiting extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(setWaitingStatus(true));
  }
  render() {
    return (
      <div>Waiting!</div>
    )
  }
}
