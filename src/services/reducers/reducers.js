import {
  SET_INGREDIENTS_LIST,
  SELECT_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
  SET_ORDER_DETAILS,
  ADD_INGREDIENT_INTO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR
} from '../actions/index.js';

const inititialIngredientsState = {
  ingredientsList: [],
  selectedIngredient: {},
  constructorList: [],
  orederDetails: {}
}

export const indexReducer = (state=inititialIngredientsState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS_LIST: {
      return {
        ...state,
        ingredientsList: action.data
      }
    }

    case ADD_INGREDIENT_INTO_CONSTRUCTOR : {
      return {
        ...state,
        constructorList: [...state.constructorList, state.ingredientsList.filter(ingredient => ingredient.id === action.id)]
      }
    }

    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR : {
      return {
        ...state,
        constructorList: state.constructorList.filter(ingredient => ingredient.id !== action.id)
      }
    }

    case SET_ORDER_DETAILS: {
      return {
        ...state,
        orederDetails: action.orederDetails
      }
    }

    case SELECT_INGREDIENT : {
      return {
        ...state,
        selectedIngredient: state.ingredientsList.filter(ingredient => ingredient.id === action.id)
      }
    }

    case REMOVE_SELECTED_INGREDIENT : {
      return {
        ...state,
        selectedIngredient: {}
      }
    }

    default: {
      return state
    }
  }
}

// const inititialConstructorState = {
//   constructorList: []
// }

// export const constructorReducer = (state=inititialConstructorState, action) => {
//   switch (action.type) {
//     case ADD_INGREDIENT_INTO_CONSTRUCTOR : {
//       return {
//         ...state,
//         constructorList: [...state.constructorList, action.ingredient]
//       }
//     }
//     case REMOVE_INGREDIENT_FROM_CONSTRUCTOR : {

//     }
//     default: {
//       return state
//     }
//   }
// }

// const inititialOrderState = {
//   oreder: {}
// }

// export const orderReducer = (state=inititialOrderState, action) => {
//   switch (action.type) {
//     case : {

//     }
//     default: {
//       return state
//     }
//   }
// }









