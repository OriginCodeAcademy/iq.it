'use strict';

module.exports = function(Player) {
  Player.getUserRole = function(id, callback) {
    const { RoleMapping } = Player.app.models;
    RoleMapping.findOne({ where: {
      'principalType': 'PLAYER_COACH', 'principalId': id,
    }})
    .then(results => callback(null, !!results));
  };

  Player.remoteMethod('getUserRole', {
    description: 'Returns a users role.',
    accepts: { arg: 'id', type: 'string' },
    http: { path: '/getUserRole', verb: 'get' },
    returns: { arg: 'data', type: 'object', root: true },
  });
};
