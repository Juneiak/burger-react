import { checkResponse, apiUrl } from "../../utils/apiUtils";

export const SET_INGREDIENTS_LIST = 'SET_INGREDIENTS_LIST';
export const SET_INGREDIENTS_LIST_IS_LOADING = 'SET_INGREDIENTS_LIST_IS_LOADING';
export const SET_INGREDIENTS_LIST_IS_ERROR = 'SET_INGREDIENTS_LIST_IS_ERROR';

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const REMOVE_SELECTED_INGREDIENT = 'REMOVE_SELECTED_INGREDIENT';
export const UPDATE_SELECTED_INGREDIENT = 'UPDATE_SELECTED_INGREDIENT';

export const ADD_INGREDIENT_INTO_CONSTRUCTOR = 'ADD_INGREDIENT_INTO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';


export function getIngredientsList() {
  return function (dispatch) {
    dispatch({type: SET_INGREDIENTS_LIST_IS_LOADING})
    return fetch(`${apiUrl}/ingredients`)
      .then(checkResponse)
      .then(data => {
          
          dispatch({type: SET_INGREDIENTS_LIST, data: data.data})
          return data
      })
      .catch(err => {
        console.error(err)
        dispatch({type: SET_INGREDIENTS_LIST_IS_ERROR})
        return Promise.reject('ingredients loading error')
      })
  }
}




