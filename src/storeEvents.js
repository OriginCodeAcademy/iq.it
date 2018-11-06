import { removeActiveCard, gameStarted, setActiveCard } from './Components/Game/actions';

export default (socket, store) => {
  socket.on('connect_timeout', () => store.dispatch({ type: 'DISCONNECT' }));
  socket.on('connect_error', () => store.dispatch({ type: 'DISCONNECT' }));
  socket.on('reconnect_error', () => store.dispatch({ type: 'DISCONNECT' }));
  socket.on('reconnect', () => store.dispatch({ type: 'RECONNECT' }));
  socket.on('start_game', () => store.dispatch(gameStarted()));
  socket.on('active_card', (card) => store.dispatch(setActiveCard(card)))
  socket.on('remove_card', () => store.dispatch(removeActiveCard()))
}