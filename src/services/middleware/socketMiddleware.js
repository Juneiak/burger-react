import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
  WS_SEND
} from '../actions/wsActions';

const socketMiddleware = () => store => {
  let socket = null;
  return next => action => {
    const {dispatch, getState} = store;
    const {type, payload} = action;

    if (type === WS_CONNECTION_START) {
      socket = new WebSocket(action.wsUrl);
    }
    if (socket) {
      socket.onopen = event => {
        dispatch({type: WS_CONNECTION_SUCCESS, payload: event})
      }

      socket.onerror = event => {
        dispatch({type: WS_CONNECTION_ERROR, payload: event})
      }

      socket.onclose = event => {
        dispatch({type: WS_CONNECTION_CLOSED, payload: event})
      }

      socket.onmessage = event => {
        const {data} = event
        const parsedData = JSON.parse(data)
        dispatch({type: WS_GET_ORDERS, payload: parsedData})
      }

      if (type === WS_SEND) {
        const message = payload
        socket.send(JSON.stringify(message))
      }
    }

    next(action);
  }
}

export default socketMiddleware;