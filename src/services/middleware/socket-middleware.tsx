import {
  wsConnectionError,
  wsConnectionSuccess,
  wsGetOrders,
  wsConnectionClosed,
} from '../actions/ws-actions';

import { WS_CONNECTION_START, WS_SEND } from '../constants/index';

const socketMiddleware = () => (store: any) => {
  let socket: any = null;
  return (next: any) => (action: any) => {
    const { dispatch } = store; // here is a getState
    const { type, payload } = action;

    if (type === WS_CONNECTION_START) {
      socket = new WebSocket(action.wsUrl);
    }
    if (socket) {
      socket.onopen = (event: any) => {
        dispatch(wsConnectionSuccess(event));
      };

      socket.onerror = (event: any) => {
        dispatch(wsConnectionError(event));
      };

      socket.onclose = (event: any) => {
        dispatch(wsConnectionClosed(event));
      };

      socket.onmessage = (event: any) => {
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
