import { checkResponse, apiUrl } from "../../utils/apiUtils";

export const SET_INGREDIENTS_LIST = 'GET_INGREDIENTS_DATA';

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const REMOVE_SELECTED_INGREDIENT = 'REMOVE_SELECTED_INGREDIENT';
export const UPDATE_SELECTED_INGREDIENT = 'UPDATE_SELECTED_INGREDIENT';

export const SET_ORDER_DETAILS = 'GET_ORDER_DETAILS';
export const CLEAR_ORDER_DETAILS = 'CLEAR_ORDER_DETAILS';

export const ADD_INGREDIENT_INTO_CONSTRUCTOR = 'ADD_INGREDIENT_INTO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';


export function getIngredientsList() {
  return function (dispatch) {
    return fetch(`${apiUrl}/ingredients`)
      .then(checkResponse)
      .then(data => {
          dispatch({type: SET_INGREDIENTS_LIST, data: data.data})
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
      .then(data => {
          dispatch({type: SET_ORDER_DETAILS, orderDetails: data})
      })
      .catch(err => console.error(err))
  }
}



