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
  orderDetails: {}
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
        constructorList: [...state.constructorList, state.ingredientsList.find(ingredient => ingredient._id === action.id)]  
      }
    }

    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR : {
      return {
        ...state,
        constructorList: state.constructorList.filter(ingredient => ingredient._id !== action.id)
      }
    }

    case SET_ORDER_DETAILS: {
      console.log(action.orderDetails);
      return {
        ...state,
        orderDetails: action.orderDetails
      }
    }

    case SELECT_INGREDIENT : {
      return {
        ...state,
        selectedIngredient: state.ingredientsList.find(ingredient => ingredient._id === action.id)
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








