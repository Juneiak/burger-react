import { combineReducers } from 'redux';
import indexReducer from './reducers/index-reducer.js';
import authReducer from './reducers/auth-reducer.js';
import orderReducer from './reducers/order-reduсer.js';
import wsReducer from './reducers/ws-reducer.js';

const rootReducer = combineReducers({
  index: indexReducer,
  auth: authReducer,
  order: orderReducer,
  ws: wsReducer,
});

export default rootReducer;
