import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
  WS_SEND,
} from '../constants';

export interface IWsConnectionStart {
  type: typeof WS_CONNECTION_START;
  wsUrl: string;
}

export interface IWsConnectionError {
  type: typeof WS_CONNECTION_ERROR;
  payload?: any;
}

export interface IWsConnectionSuccess {
  type: typeof WS_CONNECTION_SUCCESS;
  payload?: any;
}

export interface IWsGetOrders {
  type: typeof WS_GET_ORDERS;
  payload: any;
}

export interface IWsConnectionClosed {
  type: typeof WS_CONNECTION_CLOSED;
  payload?: any;
}

export interface IWsSend {
  type: typeof WS_SEND;
}

export type TWsActions =
| IWsConnectionStart
| IWsConnectionError
| IWsConnectionSuccess
| IWsGetOrders
| IWsConnectionClosed
| IWsConnectionClosed
| IWsSend

export const wsConnectionStart = (wsUrl: string): IWsConnectionStart => ({
  type: WS_CONNECTION_START,
  wsUrl,
});

export const wsConnectionError = (payload: any): IWsConnectionError => ({
  type: WS_CONNECTION_ERROR,
  payload,
});

export const wsConnectionSuccess = (payload: any): IWsConnectionSuccess => ({
  type: WS_CONNECTION_SUCCESS,
  payload,
});

export const wsGetOrders = (parsedData: any): IWsGetOrders => ({
  type: WS_GET_ORDERS,
  payload: parsedData,
});

export const wsConnectionClosed = (payload: any): IWsConnectionClosed => ({
  type: WS_CONNECTION_CLOSED,
  payload,
});

export const wsSend = (): IWsSend => ({
  type: WS_SEND,
});
