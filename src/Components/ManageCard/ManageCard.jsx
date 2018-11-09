import React, { Component } from 'react';
import { getCards } from './actions';

export default class ManageCard extends Component {
  constructor(props) {
    super(props);
    this.selectCard = this.selectCard.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCards());
  }

  selectCard(e) { 
    const { dispatch, cards } = this.props;
    let card = cards.find(card => card.id === e.target.dataset.cardid);
    card = {...card, used: true  }
    dispatch(serverSetActiveCard(card));
  }

  deleteCard() {
    const { dispatch } = this.props;
    console.log('make a delete function')
    //dispatch(serverRemoveActiveCard())
  } 

  render() {
    const { cards } = this.props;
    return (
      <div className="master">
        <h1>Manage Cards</h1>
        <div className="cards">
          <div>
            <p>
              <a href="#/addCard">Add Cards</a>
            </p>
            <p>
              <a href="#/game">Back to Game</a>
            </p>
          </div>
          <div className="card-container">
            <div className="card-sections">
              <h2>All Cards</h2>
              {
                cards.map(card => (
                  <div key={card.id} className="card">
                    <p>{card.question}</p>
                    <button data-cardid={card.id}>Delete</button>
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


