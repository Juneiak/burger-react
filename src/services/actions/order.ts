import { clearConstructor } from './index';
import { checkResponse, apiUrl } from '../../utils/api-utils';
import { getCookie } from '../../utils/cookie-utils';
import { AppThunk, AppDispatch } from '../types/index';
import {
  SELECT_ORDER,
  REMOVE_SELECTED_ORDER,
  SET_ORDER_DETAILS,
  CLEAR_ORDER_DETAILS,
} from '../constants';

export interface ISelectOrder {
  readonly type: typeof SELECT_ORDER;
  readonly data: any;
}

export interface IRemoveSelectedOrder {
  readonly type: typeof REMOVE_SELECTED_ORDER;
}

export interface ISetOrdersDetails {
  readonly type: typeof SET_ORDER_DETAILS;
  readonly orderDetails: any;
}

export interface IClearOrderDetails {
  readonly type: typeof CLEAR_ORDER_DETAILS;
}

export type TOrderActions =
| ISelectOrder
| IRemoveSelectedOrder
| ISetOrdersDetails
| IClearOrderDetails

export const selectOrder = (data: any): ISelectOrder => ({
  type: SELECT_ORDER,
  data,
});

export const removeSelectedOrder = (): IRemoveSelectedOrder => ({
  type: REMOVE_SELECTED_ORDER,
});

export const setOrdersDetails = (data: any): ISetOrdersDetails => ({
  type: SET_ORDER_DETAILS,
  orderDetails: data,
});

export const clearOrderDetails = (): IClearOrderDetails => ({
  type: CLEAR_ORDER_DETAILS,
});

export const clearOrder: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(clearConstructor());
  dispatch(clearOrderDetails());
};

export const getOrderDetails: AppThunk = (orderList) => (
  function (dispatch: AppDispatch) {
    fetch(`${apiUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('Atoken')}`,
      },
      body: JSON.stringify({
        ingredients: orderList,
      }),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(setOrdersDetails(data));
      })
      .catch((err) => console.error(err));
  }
);
