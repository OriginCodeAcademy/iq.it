'use strict';

const eventHandler = (socket, event) => {
  socket.emit('event:ack', event);
};

const actionHandler = (socket, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SERVER_WAITING':
      console.log('cLiEnT HAS DiSpATchED WaItInG');
      break;
    default:
      break;
  }
};

module.exports = {
  eventHandler,
  actionHandler,
};
