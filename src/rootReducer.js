import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import gameReducer from './Components/Game/reducer';
import confirmationReducer from './Components/Confirmation/reducer';
import loginReducer from './Components/Login/reducer';
import registerReducer from './Components/Register/reducer';
import waitingReducer from './Components/Waiting/reducer';
import userReducer from './userReducer';


const rootReducers = combineReducers({
  
  user: userReducer,
  routing: routerReducer,
  game: gameReducer,
  confirmation: confirmationReducer,
  loginReducer,
  registerReducer,
  waitingReducer

});

export default rootReducers;
