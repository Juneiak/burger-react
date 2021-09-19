import {
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED
} from '../actions/ws-actions';

const initialState = {
  wsConnected: false,
  ordersInfo: {},
  error: ''
}

const wsReducer = (state=initialState, action) => {
  switch (action.type) {
    case  WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload.message,
        wsConnected: false
      }
    
    case  WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: ' '
      }

    case WS_GET_ORDERS: 
      return {
        ...state,
        wsConnected: true,
        error: '',
        ordersInfo: action.payload
      }
    
    case WS_CONNECTION_CLOSED: 
      return {
        wsConnected: false,
        error: ''
      }

    default:
      return state
  }
}

export default wsReducer;