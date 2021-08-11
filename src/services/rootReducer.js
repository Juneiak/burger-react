import { combineReducers } from "redux";
import indexReducer  from './reducers/indexReducer.js';
import authReducer from "./reducers/authReducer.js";

const rootReducer = combineReducers({
  index: indexReducer,
  auth: authReducer
})

export default rootReducer;