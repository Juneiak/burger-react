import { checkResponse, apiUrl } from '../../utils/api-utils';
import { AppThunk, AppDispatch } from '../types/index';
import {
  SET_INGREDIENTS_LIST,
  SET_INGREDIENTS_LIST_IS_LOADING,
  SET_INGREDIENTS_LIST_IS_ERROR,
  SELECT_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
  UPDATE_SELECTED_INGREDIENT,
  ADD_INGREDIENT_INTO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from '../constants/index';

export interface ISetIngredientsList {
  readonly type: typeof SET_INGREDIENTS_LIST;
  readonly data: any;
}

export interface ISetIngredientsListIsLoading {
  readonly type: typeof SET_INGREDIENTS_LIST_IS_LOADING;
}

export interface ISetIngredientsListIsError {
  readonly type: typeof SET_INGREDIENTS_LIST_IS_ERROR;
}

export interface ISelectIngredient {
  readonly type: typeof SELECT_INGREDIENT;
  readonly id: string;
}

export interface IRemoveSelectedIngredient {
  readonly type: typeof REMOVE_SELECTED_INGREDIENT;
}

export interface IUpdateSelectedIngredient {
  readonly type: typeof UPDATE_SELECTED_INGREDIENT;
  readonly toRemoveIndex: number;
  readonly toInsertIndex: number;
}

export interface IAddIngredientIntoConstructor {
  readonly type: typeof ADD_INGREDIENT_INTO_CONSTRUCTOR;
  readonly id: string;
  readonly ingredientType: string;
}

export interface IRemoveIngredientFromConstructor {
  readonly type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  readonly index: number;
}

export interface IClearConstructor {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TIndexActions =
| ISetIngredientsList
| ISetIngredientsListIsLoading
| ISetIngredientsListIsError
| ISelectIngredient
| IRemoveSelectedIngredient
| IUpdateSelectedIngredient
| IAddIngredientIntoConstructor
| IRemoveIngredientFromConstructor
| IClearConstructor

export const setIngredientsList = (data: any): ISetIngredientsList => ({
  type: SET_INGREDIENTS_LIST,
  data,
});

export const setIngredientsListIsLoading = (): ISetIngredientsListIsLoading => ({
  type: SET_INGREDIENTS_LIST_IS_LOADING,
});

export const setIngredientsListIsError = (): ISetIngredientsListIsError => ({
  type: SET_INGREDIENTS_LIST_IS_ERROR,
});

export const selectIngredient = (id: string): ISelectIngredient => ({
  type: SELECT_INGREDIENT,
  id,
});

export const removeSelectedIngredient = (): IRemoveSelectedIngredient => ({
  type: REMOVE_SELECTED_INGREDIENT,
});

export const updateSelectedIngredient = (
  toRemoveIndex: number,
  toInsertIndex: number,
): IUpdateSelectedIngredient => ({
  type: UPDATE_SELECTED_INGREDIENT,
  toRemoveIndex,
  toInsertIndex,
});

export const addIngredientIntoConstructor = (
  id: string,
  ingredientType: string,
): IAddIngredientIntoConstructor => ({
  type: ADD_INGREDIENT_INTO_CONSTRUCTOR,
  id,
  ingredientType,
});

export const removeIngredientFromConstructor = (
  index: number,
): IRemoveIngredientFromConstructor => ({
  type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  index,
});

export const clearConstructor = (): IClearConstructor => ({
  type: CLEAR_CONSTRUCTOR,
});

export const getIngredientsList: AppThunk = () => (
  function (dispatch: AppDispatch) {
    dispatch(setIngredientsListIsLoading());
    return fetch(`${apiUrl}/ingredients`)
      .then(checkResponse)
      .then((data) => {
        dispatch(setIngredientsList(data.data));
        return data;
      })
      .catch((err) => {
        console.error(err);
        dispatch(setIngredientsListIsError());
        return Promise.reject('ingredients loading error');
      });
  }
);
