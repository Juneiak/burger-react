export const SET_INGREDIENTS_LIST = 'GET_INGREDIENTS_DATA';

export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export const REMOVE_SELECTED_INGREDIENT = 'REMOVE_SELECTED_INGREDIENT';

export const SET_ORDER_DETAILS = 'GET_ORDER_DETAILS';

export const ADD_INGREDIENT_INTO_CONSTRUCTOR = 'ADD_INGREDIENT_INTO_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'REMOVE_INGREDIENT_FROM_CONSTRUCTOR';



export function getIngredientsList() {
  return function (dispatch) {
    fetch(apiUrl)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`error: ${res.status}`)
    } )
    .then(ingredientsListData => dispatch({type: SET_INGREDIENTS_LIST, data: ingredientsListData}))
    .catch(err => console.error(err))
  }
}

export function getOrderDetail(orderList) {
  return function (dispatch) {
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": orderList
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`error: ${res.status}`)
      })
      .then(orderDetailData => {
        dispatch({type: SET_ORDER_DETAILS, data: orderDetailData})
      })
      .catch(err => {
        console.error(err);
      })
  }
}



