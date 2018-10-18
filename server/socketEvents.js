'use strict';

const eventHandler = (socket, event) => {
  socket.emit('event:ack', event);
};

const actionHandler = (socket, action, app) => {
  const { type, payload } = action;

  switch (type) {
    case 'SERVER_WAITING':
      socket.broadcast.emit('start_game', true);
      break;
    case 'SERVER_START_GAME_FULFILLED':
      socket.broadcast.emit('start_game', true);
      break;
    default:
      break;
  }
};

module.exports = {
  eventHandler,
  actionHandler,
};
