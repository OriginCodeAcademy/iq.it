import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from './Components/Login/reducer';
import registerReducer from './Components/Register/reducer';
import waitingReducer from './Components/Waiting/reducer';

const rootReducers = combineReducers({
  user: (state = {}) => (state),
  routing: routerReducer,
  loginReducer,
  registerReducer,
  waitingReducer
});

export default rootReducers;
