import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../root-reducer';
import socketMiddleware from '../middleware/socket-middleware';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware()));

const initStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  return store;
};

export default initStore;

// const initStore = (initialState = {}) => {
//   const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware, socketMiddleware()))
//   )
//   return store
// }

// export default initStore;
