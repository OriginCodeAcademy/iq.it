import axios from 'axios';


export const addCard = ( newCard ) =>
({ 
  type: 'ADDCARD',
  payload: axios.post('/api/cards', {
    question: newCard.question,
    points: newCard.points,
    difficulty: newCard.difficulty,
    category: newCard.category,
    answers: [{
        title: newCard.answerTitle1,
        isCorrect: newCard.isCorrect1
    },
    {   title: newCard.answerTitle2,
        isCorrect: newCard.isCorrect2
    },
    {   title: newCard.answerTitle3,
        isCorrect: newCard.isCorrect3
    },
    {   title: newCard.answerTitle4,
        isCorrect: newCard.isCorrect4
    }]
  }).then(response => {
        return response;
  })
});

export const addCardInput = (name, value) => {
    if (name === 'points' || name === 'difficulty') {
        value = +value
    }
    return {
        type: 'ADDCARD_INPUT',
        payload: {
          [name]: value
        }
    }
};

