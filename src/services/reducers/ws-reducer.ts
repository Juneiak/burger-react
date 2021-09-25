import {
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
} from '../constants/index';
import { TWsActions } from '../actions/ws-actions';
import { TOrdersInfo } from '../types/data/index';

type TInitialState = {
  readonly wsConnected: boolean;
  readonly ordersInfo: TOrdersInfo | {};
  readonly error: string;
}

const initialState: TInitialState = {
  wsConnected: false,
  ordersInfo: {},
  error: '',
};

const wsReducer = (state = initialState, action: TWsActions) => {
  switch (action.type) {
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload.message,
        wsConnected: false,
      };

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: '',
      };

    case WS_GET_ORDERS:
      return {
        ...state,
        wsConnected: true,
        error: '',
        ordersInfo: action.payload,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: '',
      };

    default:
      return state;
  }
};

export default wsReducer;
