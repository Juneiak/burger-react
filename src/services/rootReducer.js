import { combineReducers } from "redux";
import { indexReducer } from './reducers/indexReducer.js';

const rootReducer = combineReducers({
  index: indexReducer
})

export default rootReducer;