import {
  SELECT_ORDER,
  REMOVE_SELECTED_ORDER,
  SET_ORDER_DETAILS,
  CLEAR_ORDER_DETAILS,
} from '../constants/index';
import { TOrderActions } from '../actions/order';
import { TParsedOrder, TOrderDetails } from '../types/data/index';

type TInitialOrdersState = {
  orderDetails: TOrderDetails | {};
  selectedOrder: TParsedOrder | { _id?: string };
}

const inititialOrdersState: TInitialOrdersState = {
  orderDetails: {},
  selectedOrder: {},
};

const orderReducer = (state = inititialOrdersState, action: TOrderActions) => {
  switch (action.type) {
    case SELECT_ORDER: {
      return {
        ...state,
        selectedOrder: action.data,
      };
    }

    case REMOVE_SELECTED_ORDER: {
      return {
        ...state,
        selectedOrder: {},
      };
    }

    case SET_ORDER_DETAILS: {
      return {
        ...state,
        orderDetails: action.orderDetails,
      };
    }

    case CLEAR_ORDER_DETAILS: {
      return {
        ...state,
        orderDetails: {},
      };
    }

    default:
      return state;
  }
};

export default orderReducer;
