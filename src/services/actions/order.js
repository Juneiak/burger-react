import { CLEAR_CONSTRUCTOR } from "./index";
import { checkResponse, apiUrl } from "../../utils/apiUtils";
import { getCookie } from "../../utils/cookieUtils";

export const SET_ORDERS_LIST = 'SET_ORDERS_LIST';
export const SET_ORDERS_LIST_IS_LOADING = 'SET_ORDERS_IS_LOADING';
export const SET_ORDERS_LIST_IS_ERROR = 'SET_ORDERS_IS_ERROR';

export const SELECT_ORDER = 'SELECT_ORDER';
export const REMOVE_SELECTED_ORDER = 'REMOVE_SELECTED_ORDER';

export const SET_ORDER_DETAILS = 'GET_ORDER_DETAILS';
export const CLEAR_ORDER_DETAILS = 'CLEAR_ORDER_DETAILS';

export const clearOrder = () => dispatch => {
  dispatch({type: CLEAR_CONSTRUCTOR})
  dispatch({type: CLEAR_ORDER_DETAILS})
}

export function getOrderDetails(orderList) {
  return function (dispatch) {
    fetch(`${apiUrl}/orders`, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + getCookie('Atoken')
      },
      body: JSON.stringify({
        "ingredients": orderList
      })
    })
      .then(checkResponse)
      .then(data => {
          dispatch({type: SET_ORDER_DETAILS, orderDetails: data})
      })
      .catch(err => console.error(err))
  }
}

// export const  getOrdersInfo = () => async (dispatch) => {
//   const response = await fetch('https://norma.nomoreparties.space/orders/all', {
//     method: "GET"
//   })
// }
