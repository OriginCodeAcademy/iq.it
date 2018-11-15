import React, { Component } from 'react';
import AdminGame from '../AdminGame';
import { chooseAnswer, submitAnswer } from './actions';
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.chooseAnswer = this.chooseAnswer.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  chooseAnswer(e) {
    const { dispatch } = this.props;
    dispatch(chooseAnswer(e.target.dataset.index));
  }
  submitAnswer() {
    const { dispatch, selectedAnswer, active, user, token, game, history } = this.props;

    dispatch(submitAnswer({
      "points": active.points,
      "selected": active.answers[selectedAnswer],
      "cardId": active.id,
      "playerId": user.userId,
      "gameId": game.id
    }, history, token
    ));
  }
  render() {
    const { user, active, selectedAnswer } = this.props;
    if (user.admin) {
      return <AdminGame />;
    }
    return (
      <div className="master">
        <h1>Game page</h1>
        <div className="card-container">
          <div className="card-sections">
            {
              !active ? <div>Waiting For Card</div>
                : <div>
                  <h2>Active Question</h2>
                  <div className="card">
                    <p>{active.question}</p>
                    <ol>
                      {
                        active.answers.map((answer, index) =>
                          <li className={selectedAnswer == index ? 'selected' : '' } key={active.id + index} data-index={index} onClick={this.chooseAnswer} >
                            {answer.title}
                          </li>
                        )
                      }
                    </ol>
                    <button onClick={this.submitAnswer}>Submit Answer</button>
                  </div>
                </div>
            }
              </div>
            </div>
      </div>
    )
  }
}


