import {
  SET_ORDERS_LIST,
  SET_ORDERS_LIST_IS_LOADING,
  SET_ORDERS_LIST_IS_ERROR,
  SELECT_ORDER,
  REMOVE_SELECTED_ORDER,
  SET_ORDER_DETAILS,
  CLEAR_ORDER_DETAILS,
} from '../actions/order';

const inititialOrdersState = {
  orderDetails: {},
  selectedOrder: {},
  ordersList: {},
  userOrdersList: {},
  ordersListIsLoaded: false,
  ordersListIsError: false,
}

const orderReducer = (state=inititialOrdersState, action) => {
  switch (action.type) {

    case SELECT_ORDER: {
      return {
        ...state,
        selectedOrder: action.data
      }
    }

    case REMOVE_SELECTED_ORDER: {
      return {
        ...state,
        selectedOrder: {}
      }
    }

    case SET_ORDERS_LIST: {
      return {
        ...state,
        ordersList: action.data,
        ordersListIsLoaded: true,
        ordersListIsError: false
      }
    }

    case SET_ORDERS_LIST_IS_LOADING: {
      return {
        ...state,
        ordersListIsLoaded: false,
      }
    }

    case SET_ORDERS_LIST_IS_ERROR: {
      return {
        ...state,
        ordersListIsError: true,
        ordersListIsLoaded: true
      }
    }

    case SET_ORDER_DETAILS: {
      return {
        ...state,
        orderDetails: action.orderDetails
      }
    }

    case CLEAR_ORDER_DETAILS: {
      return {
        ...state,
        orderDetails: {}
      }
    }
  
    default:
      return state;
  }
}

export default orderReducer;