import React, { Component } from 'react';
import { register } from './actions';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(register())
  }

  render() {
    return (
      <div>Register!</div>
    )
  }
}
