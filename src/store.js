import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSocketIoMiddleware from 'redux-socket.io';
import promiseMiddleware from 'redux-promise-middleware';
import io from 'socket.io-client';
import rootReducer from './rootReducer';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'SERVER_');

const history = createHashHistory();
const isDevMode = process.env.NODE_ENV === 'development';

// userFromServer will be on the global window
const configureStore = (initialState = { user: userFromServer }) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(promiseMiddleware());

  if (isDevMode) {
    // Logging Middleware
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });
    middleware.push(logger);
  }

  // Redux Thunk Middleware
  middleware.push(thunk);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Socket Middleware
  middleware.push(socketIoMiddleware);

  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);
  return store;

  socket.on('connect_timeout', () => store.dispatch({ type: 'DISCONNECT' }));
  socket.on('connect_error', () => store.dispatch({ type: 'DISCONNECT' }));
  socket.on('reconnect_error', () => store.dispatch({ type: 'DISCONNECT' }));
  socket.on('reconnect', () => store.dispatch({ type: 'RECONNECT' }));

};

export { configureStore, history };
