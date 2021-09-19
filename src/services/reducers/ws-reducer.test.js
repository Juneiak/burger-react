import wsReducer from "./ws-reducer";
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

describe('wsReducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_ERROR,
      payload: {message: 'error'}
    }))
    .toEqual({
      ...initialState,
      error: 'error',
      wsConnected: false
    })
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_SUCCESS
    }))
    .toEqual({
      ...initialState,
      error: '',
      wsConnected: true
    })
  })

  it('should handle WS_GET_ORDERS', () => {
    expect(wsReducer(initialState, {
      type: WS_GET_ORDERS,
      payload: {data: 'parsedData'}
    }))
    .toEqual({
      ...initialState,
      error: '',
      wsConnected: true,
      ordersInfo: {data: 'parsedData'}
    })
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(wsReducer(initialState, {
      type: WS_CONNECTION_CLOSED
    }))
    .toEqual({
      ...initialState,
      error: '',
      wsConnected: false
    })
  })


})