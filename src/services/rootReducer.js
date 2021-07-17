import { combineReducers } from "redux";
import { indexReducer } from './reducers/reducers.js';

const rootReducer = combineReducers({
  index: indexReducer
})

export default rootReducer;