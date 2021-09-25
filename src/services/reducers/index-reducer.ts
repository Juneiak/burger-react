import {
  SET_INGREDIENTS_LIST,
  SELECT_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
  ADD_INGREDIENT_INTO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
  UPDATE_SELECTED_INGREDIENT,
  SET_INGREDIENTS_LIST_IS_LOADING,
  SET_INGREDIENTS_LIST_IS_ERROR,
} from '../constants/index';
import { TIndexActions } from '../actions/index';
import { TIngredient } from '../types/data/index';

type TInititialIngredientsState = {
  ingredientsList: ReadonlyArray<TIngredient>,
  ingredientListIsLoaded: boolean,
  ingredientListIsError: boolean,
  selectedIngredient: TIngredient | undefined | {},
  constructorList: Array<TIngredient | undefined>,
  selectedBun: TIngredient | undefined | {},
};

const inititialIngredientsState: TInititialIngredientsState = {
  ingredientsList: [],
  ingredientListIsLoaded: false,
  ingredientListIsError: false,
  selectedIngredient: {},
  constructorList: [],
  selectedBun: {},
};
const indexReducer = (
  state = inititialIngredientsState,
  action: TIndexActions,
): TInititialIngredientsState => {
  switch (action.type) {
    case SET_INGREDIENTS_LIST: {
      return {
        ...state,
        ingredientsList: action.data,
        ingredientListIsLoaded: true,
        ingredientListIsError: false,
      };
    }

    case (SET_INGREDIENTS_LIST_IS_LOADING): {
      return {
        ...state,
        ingredientListIsLoaded: false,
      };
    }

    case (SET_INGREDIENTS_LIST_IS_ERROR): {
      return {
        ...state,
        ingredientListIsLoaded: true,
        ingredientListIsError: true,
      };
    }

    case ADD_INGREDIENT_INTO_CONSTRUCTOR: {
      if (action.ingredientType === 'bun') {
        return {
          ...state,
          selectedBun: state
            .ingredientsList
            .find((ingredient) => ingredient._id === action.id),
        };
      }
      return {
        ...state,
        constructorList: [
          ...state.constructorList,
          state
            .ingredientsList
            .find((ingredient) => ingredient._id === action.id)],
      };
    }

    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        constructorList: state
          .constructorList
          .filter((ingredient, ingredientIndex) => ingredientIndex !== action.index),
      };
    }

    case UPDATE_SELECTED_INGREDIENT: {
      const { constructorList } = state;
      const to = action.toInsertIndex;
      const from = action.toRemoveIndex;

      const ingredientToMove = constructorList[from];
      const increment = to < from ? -1 : 1;
      for (var index = from; index !== to; index += increment) {
        constructorList[index] = constructorList[index + increment];
      }
      constructorList[to] = ingredientToMove;
      return {
        ...state,
        constructorList: [...constructorList],
      };
    }

    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        constructorList: [],
        selectedBun: {},
      };
    }

    case SELECT_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: state
          .ingredientsList
          .find((ingredient) => ingredient._id === action.id),
      };
    }

    case REMOVE_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: {},
      };
    }

    default: {
      return state;
    }
  }
};

export default indexReducer;
