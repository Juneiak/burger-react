import { combineReducers } from "redux";
import indexReducer  from './reducers/indexReducer.js';
import authReducer from "./reducers/authReducer.js";
import orderReducer from "./reducers/orderReduсer.js";
import wsReducer from "./reducers/wsReducer.js";

const rootReducer = combineReducers({
  index: indexReducer,
  auth: authReducer,
  order: orderReducer,
  ws: wsReducer
})

export default rootReducer;