import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { addCard, addCardInput } from './actions';
//import { Redirect } from 'react-router';

export default class AddCard extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const { dispatch } = this.props;
    const { name, value, type, checked } = event.target;
    if ( type === 'checkbox') {
        dispatch(addCardInput(name, checked));
    } else {dispatch(addCardInput(name, value))}
    
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newCard, token, dispatch } = this.props;
    dispatch(addCard(newCard, token));
  }

  render() {
    const { newCard, isAdmin } = this.props;
    if (!isAdmin) {
      return <Redirect push to="/" />
    }
   
    return (
      <div className='addCard-container'>
        <div className='heading'>
          <h1>Add a card</h1>
        </div>
        <hr></hr>
          <div>
            <p><a href="#/game">Back to Game</a></p>
            <p><a href="#/manageCard">Manage Cards</a></p>
          </div>
        <form onSubmit={this.handleSubmit} name='addCard' className='addCard-form'>
       

          <label className='question-label'>Question: </label>
          <input onChange={this.handleChange} value={newCard.question} name='question' type='textarea' required/>

          <label className='points-label'>Points: </label>
          <input onChange={this.handleChange} value={newCard.points} name='points' type='number' required />

          <label className='difficulty-label'>Difficulty: </label>
          <input onChange={this.handleChange} value={newCard.difficulty} name='difficulty' type='number' required />

          <label className='catagory-label'>Category: </label>
          <input onChange={this.handleChange} value={newCard.category} name='category' type='text' required />
           
          <label className='answer1-label'>Answer 1: </label>
          <input onChange={this.handleChange} value={newCard.answerTitle1} name='answerTitle1' type='text' required />

          <label className='isCorrect-label'>Correct? :</label>
          <input onChange={this.handleChange} checked={newCard.isCorrect1} type='checkbox' name='isCorrect1' />
          
          <label className='answer2-label'>Answer 2: </label>
          <input onChange={this.handleChange} value={newCard.answerTitle2} name='answerTitle2' type='text' required />

          <label className='isCorrect2-label'>Correct? :</label>
          <input onChange={this.handleChange} checked={newCard.isCorrect2} type='checkbox' name='isCorrect2' />
          
          <label className='answer3-label'>Answer 3: </label>
          <input onChange={this.handleChange} value={newCard.answerTitle3} name='answerTitle3' type='text' required />

          <label className='isCorrect3-label'>Correct? :</label>
          <input onChange={this.handleChange} checked={newCard.isCorrect3} type='checkbox' name='isCorrect3'/>
          
          <label className='answer4-label'>Answer 4: </label>
          <input onChange={this.handleChange} value={newCard.answerTitle4} name='answerTitle4' type='text' required />

          <label className='isCorrect4-label'>Correct? :</label>
          <input onChange={this.handleChange} checked={newCard.isCorrect4} type='checkbox' name='isCorrect4'/>
      

          <button className='button submit' type='submit'>Add Card</button>
        </form>
      </div>
    )
  }
}
