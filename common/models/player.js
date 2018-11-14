'use strict';

module.exports = function(Player) {
  Player.isAdmin = function(id, callback) {
    const { RoleMapping } = Player.app.models;
    RoleMapping.findOne({ where: {
      'principalType': 'PLAYER_COACH', 'principalId': id,
    }})
    .then(results => callback(null, !!results));
  };

  Player.remoteMethod('isAdmin', {
    description: 'Returns a boolean if Player is a player-coach',
    accepts: { arg: 'id', type: 'string' },
    http: { path: '/isAdmin', verb: 'get' },
    returns: { arg: 'data', type: 'boolean', root: true },
  });
};
