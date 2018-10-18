import React, { Component } from 'react';
import { deactivateCard, getCards, setActiveCard } from './actions';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.selectCard = this.selectCard.bind(this);
    this.deactivateCard = this.deactivateCard.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCards());
  }

  selectCard(e) { 
    const { dispatch, cards } = this.props;
    let card = cards.find(card => card.id === e.target.dataset.cardid);
    card = {...card, used: true  }
    dispatch(setActiveCard(card));
  }

  deactivateCard() {
    const { dispatch } = this.props;
    dispatch(deactivateCard())
  } 

  render() {
    const { cards, active } = this.props;
    let unused = cards.filter(card => !card.used); 
    let used = cards.filter(card => card.used); 
    return (
      <div className="master">
        <h1>Game page</h1>
        <div className="cards">
          {
            active && 
            <div className="card-container">
              <div className="card-sections">
                <h2>Active Question</h2>
                <div className='card'>
                  <p>{active.question}</p>
                  <ol>
                    {
                      active.answers.map((answer, index) =>
                        <li key={active.id + index} className={answer.isCorrect ? 'correct' : 'incorrect'}>
                          {answer.title}
                        </li>
                      )
                    }
                  </ol>
                </div>
                <div>
                  <button onClick={ this.deactivateCard }>End Question</button>
                </div>
              </div>
            </div>
          }
          <div className="card-container">
            <div className="card-sections">
              <h2>Unused Cards</h2>
              {
                unused.map(card => (
                  <div key={card.id} className="card">
                    <p>{card.question}</p>
                    <button data-cardid={card.id} onClick={this.selectCard}>Select</button>
                  </div>
                ))
              }
            </div>
            <div className="card-sections">
              <h2>Used Cards</h2>
              {
                used.map(card => (
                  <div key={card.id} className="card">
                    <p>{card.question}</p>
                    <button data-cardid={card.id} onClick={this.selectCard}>Select</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}


