import { checkResponse } from "../../utils/apiUtils";

export const SET_INGREDIENTS_LIST = 'GET_INGREDIENTS_DATA';

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const REMOVE_SELECTED_INGREDIENT = 'REMOVE_SELECTED_INGREDIENT';

export const SET_ORDER_DETAILS = 'GET_ORDER_DETAILS';
export const CLEAR_ORDER_DETAILS = 'CLEAR_ORDER_DETAILS';

export const ADD_INGREDIENT_INTO_CONSTRUCTOR = 'ADD_INGREDIENT_INTO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';

const apiUrl = 'https://norma.nomoreparties.space/api';

export function getIngredientsList() {
  return function (dispatch) {
    fetch(`${apiUrl}/ingredients`)
    .then(checkResponse)
    .then(res => {
      if (res.success) {
        dispatch({type: SET_INGREDIENTS_LIST, data: res.data})
      }
      return Promise.reject('server error')
      
    })
    .catch(err => console.error(err))
  }
}

export function getOrderDetails(orderList) {
  return function (dispatch) {
    fetch(`${apiUrl}/orders`, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": orderList
      })
    })
      .then(checkResponse)
      .then(res => {
        if (res.success) {
          dispatch({type: SET_ORDER_DETAILS, orderDetails: res})
        }
        return Promise.reject('server error')
        
      })
      .catch(err => {
        console.error(err);
      })
  }
}



