'use strict';

module.exports = (app) => {
  const { Player, Role, RoleMapping } = app.models;
  Player.findOrCreate({
    where: {
      username: 'Coach',
    },
  },
    {
      'username': 'Coach',
      'email': 'john@doe.com',
      'firstName': 'Sponge',
      'lastName': 'Bob',
      'password': 'opensesame',
    },
    (err, player) => {
      if (err) console.log(err);
      Role.findOrCreate({
        where: {
          name: 'PLAYER_COACH',
        },
      },
        {
          name: 'PLAYER_COACH',
        },
        (err, role) => {
          if (err) console.log(err);
          RoleMapping.findOrCreate({
            where: {
              principalType: 'PLAYER_COACH',
              principalId: player.id,
            },
          },
            {
              principalType: 'PLAYER_COACH',
              principalId: player.id,
            }, (error, mapping) => {
              if (err) console.log(err);
            });
        });
    });
};
