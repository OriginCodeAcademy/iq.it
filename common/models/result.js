'use strict';

module.exports = function(Result) {

  Result.observe('before save', function(ctx, next) {
    const result = ctx.instance;
    Result.app.models.Card.findById(result.cardId)
      .then(card => {
        console.log(card);
        const correct = card.answers.filter(element => element.isCorrect)[0];
        console.log(correct);
        console.log(result.selected);
        if (result.selected.title === correct.title) {
          result.selected.isCorrect = true;
        }
        else {
          result.selected.isCorrect = false;
        }
        next();
        // find answer inside of card
        // if result.selected.title === answer.title
          // result.selected.isCorrect = true
        // else false
      })
    return;
  });
};

// {
//   "points": 1,
//   "selected": {
//       "title": "== checks for loose equality while === checks for strict equality",
//   },
//   "cardId": "1",
//   "playerId": "1",
//   "gameId": "1"
// }
