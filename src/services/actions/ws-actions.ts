import {
  WS_CONNECTION_START,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_CONNECTION_CLOSED,
  WS_SEND,
} from '../constants';

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly wsUrl: string;
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload?: any;
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload?: any;
}

export interface IWsGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  readonly payload: any;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload?: any;
}

export interface IWsSend {
  readonly type: typeof WS_SEND;
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
