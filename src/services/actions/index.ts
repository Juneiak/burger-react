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
  type: typeof SET_INGREDIENTS_LIST;
  data: any;
}

export interface ISetIngredientsListIsLoading {
  type: typeof SET_INGREDIENTS_LIST_IS_LOADING;
}

export interface ISetIngredientsListIsError {
  type: typeof SET_INGREDIENTS_LIST_IS_ERROR;
}

export interface ISelectIngredient {
  type: typeof SELECT_INGREDIENT;
  id: string;
}

export interface IRemoveSelectedIngredient {
  type: typeof REMOVE_SELECTED_INGREDIENT;
}

export interface IUpdateSelectedIngredient {
  type: typeof UPDATE_SELECTED_INGREDIENT;
  toRemoveIndex: number;
  toInsertIndex: number;
}

export interface IAddIngredientIntoConstructor {
  type: typeof ADD_INGREDIENT_INTO_CONSTRUCTOR;
  id: string;
  ingredientType: string;
}

export interface IRemoveIngredientFromConstructor {
  type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  index: number;
}

export interface IClearConstructor {
  type: typeof CLEAR_CONSTRUCTOR;
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
