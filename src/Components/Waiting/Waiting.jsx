import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { checkGameStatus, startGame } from '../Game/actions';
import { generateActionForCheckingAdmin } from './actions';

export default class Waiting extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { token, dispatch, userId } = this.props;

    if (userId) {
      dispatch(generateActionForCheckingAdmin(userId, token));
      dispatch(checkGameStatus(token));
    }
  }

  handleClick() { 
    const { dispatch } = this.props;
    dispatch(startGame())
  }

  render() {
    if (!this.props.userId) {
      return <Redirect push to="/" />
    }
    if (this.props.gameStarted) {
      return <Redirect push to="/game"/>
    }

    return (
      <div id="waiting">
        <svg className="spin" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        <h1>Waiting!</h1>
        {this.props.isAdmin && <button onClick={ this.handleClick }>Start Game</button>}
      </div>
    )
  }
};
