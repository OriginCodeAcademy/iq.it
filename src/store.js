import { createHashHistory } from 'history';
import { routerActions, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import createSocketIoMiddleware from 'redux-socket.io';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import rootReducer from './rootReducer';
import storeEvents from './storeEvents';

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
  storeEvents(socket, store);

  return store;
};

export { configureStore, history };
