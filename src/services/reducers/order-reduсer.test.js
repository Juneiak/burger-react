import {
  SELECT_ORDER,
  REMOVE_SELECTED_ORDER,
  SET_ORDER_DETAILS,
  CLEAR_ORDER_DETAILS,
} from '../constants/index';
import orderReducer from './order-reduсer';

const inititialOrdersState = {
  orderDetails: {},
  selectedOrder: {}
};

describe('orderReducer', () => {
  it('should return initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(inititialOrdersState);
  });

  it('should handle SELECT_ORDER', () => {
    expect(orderReducer(inititialOrdersState, {
      type: SELECT_ORDER,
      data: { testData: 'testData' },
    }))
      .toEqual({
        ...inititialOrdersState,
        selectedOrder: { testData: 'testData' },
      });
  });

  it('should handle REMOVE_SELECTED_ORDER', () => {
    expect(orderReducer({
      ...inititialOrdersState,
      selectedOrder: { data: 'testData' },
    }, {
      type: REMOVE_SELECTED_ORDER,
    }))
      .toEqual({
        ...inititialOrdersState,
        selectedOrder: {},
      });
  });

  it('should handle SET_ORDER_DETAILS', () => {
    expect(orderReducer(inititialOrdersState, {
      type: SET_ORDER_DETAILS,
      orderDetails: { testData: 'testData' },
    }))
      .toEqual({
        ...inititialOrdersState,
        orderDetails: { testData: 'testData' },
      });
  });

  it('should handle CLEAR_ORDER_DETAILS', () => {
    expect(orderReducer({
      ...inititialOrdersState,
      orderDetails: { data: 'testData' },
    }, {
      type: CLEAR_ORDER_DETAILS,
    }))
      .toEqual({
        ...inititialOrdersState,
        orderDetails: {},
      });
  });
});
