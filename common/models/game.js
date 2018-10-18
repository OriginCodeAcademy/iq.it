'use strict';

module.exports = function (Game) {

  Game.getPlayers = function (id, cb) {
    const {
      Player,
      Result
    } = Game.app.models;
    Result.find({
        where: {
          gameId: id
        }
      })
      .then((results) => {
        return Promise.all(results.map((result) => {
          return Player.findById(result.playerId)
            .then(player => player)
            .catch(error => console.log(error));
        }));
      })
      .then((allResults) => cb(null, allResults.filter(x => !!x)))
      .catch(err => console.log(err));
  };

  Game.remoteMethod('getPlayers', {
    description: 'Returns all players from a game.',
    accepts: {
      arg: 'id',
      type: 'number'
    },
    http: {
      path: '/getPlayers',
      verb: 'get'
    },
    returns: {
      arg: 'data',
      type: 'object',
      root: true
    },
  });
};
