import {
  wsConnectionError,
  wsConnectionSuccess,
  wsGetOrders,
  wsConnectionClosed,
} from '../actions/ws-actions';

import { WS_CONNECTION_START, WS_SEND } from '../constants/index';

const socketMiddleware = () => (store) => {
  let socket = null;
  return (next) => (action) => {
    const { dispatch } = store; // here is a getState
    const { type, payload } = action;

    if (type === WS_CONNECTION_START) {
      socket = new WebSocket(action.wsUrl);
    }
    if (socket) {
      socket.onopen = (event) => {
        dispatch(wsConnectionSuccess(event));
      };

      socket.onerror = (event) => {
        dispatch(wsConnectionError(event));
      };

      socket.onclose = (event) => {
        dispatch(wsConnectionClosed(event));
      };

      socket.onmessage = (event) => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        dispatch(wsGetOrders(parsedData));
      };

      if (type === WS_SEND) {
        const message = payload;
        socket.send(JSON.stringify(message));
      }
    }

    next(action);
  };
};

export default socketMiddleware;
