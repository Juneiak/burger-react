import { combineReducers } from "redux";
import { indexReducer } from './reducers/reducers.js';

export const rootReducer = combineReducers({
  index: indexReducer
})