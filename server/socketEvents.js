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
    case 'SERVER_SET_ACTIVE_CARD': {
      socket.broadcast.emit('active_card', {
        id: payload.id,
        points: payload.points,
        question: payload.question,
        answers: payload.answers.map(answer => ({ title: answer.title })),
      });
      break;
    }
    case 'SERVER_REMOVE_ACTIVE_CARD':
      socket.broadcast.emit('remove_card');
      break;
    default:
      break;
  }
};

module.exports = {
  eventHandler,
  actionHandler,
};
