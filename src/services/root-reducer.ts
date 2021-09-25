import { combineReducers } from 'redux';
import indexReducer from './reducers/index-reducer';
import authReducer from './reducers/auth-reducer';
import orderReducer from './reducers/order-reduсer';
import wsReducer from './reducers/ws-reducer';

const rootReducer = combineReducers({
  index: indexReducer,
  auth: authReducer,
  order: orderReducer,
  ws: wsReducer,
});

export default rootReducer;
