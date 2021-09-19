import {
  SET_INGREDIENTS_LIST,
  SELECT_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
  ADD_INGREDIENT_INTO_CONSTRUCTOR,
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
  UPDATE_SELECTED_INGREDIENT,
  SET_INGREDIENTS_LIST_IS_LOADING,
  SET_INGREDIENTS_LIST_IS_ERROR
} from '../actions/index.js';
import indexReducer from './index-reducer.js';

const inititialIngredientsState = {
  ingredientsList: [],
  ingredientListIsLoaded: false,
  ingredientListIsError: false,
  selectedIngredient: {},
  constructorList: [],
  selectedBun: {}
}

describe('indexReducer', () => {
  it('should return initial state', () => {
    expect(indexReducer(undefined, {})).toEqual(inititialIngredientsState)
  })

  it('should handle SET_INGREDIENTS_LIST', () => {
    expect(indexReducer(inititialIngredientsState, {
      type: SET_INGREDIENTS_LIST,
      data: ['testData', 'testData']
    }))
    .toEqual({
      ...inititialIngredientsState,
      ingredientsList: ['testData', 'testData'],
      ingredientListIsLoaded: true,
      ingredientListIsError: false,
    })
  })

  it('should handle SELECT_INGREDIENT', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      ingredientsList: [{_id: 1, data: 'testData1'}, {_id: 2, data: 'testData2'}]
    }, {
      type: SELECT_INGREDIENT,
      id: 2
    }))
    .toEqual({
      ...inititialIngredientsState,
      ingredientsList: [{_id: 1, data: 'testData1'}, {_id: 2, data: 'testData2'}],
      selectedIngredient: {_id: 2, data: 'testData2'}
    })
  })
  
    it('should handle REMOVE_SELECTED_INGREDIENT', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      selectedIngredient: {_id: 2, data: 'testData2'}
    }, {
      type: REMOVE_SELECTED_INGREDIENT
    }))
    .toEqual({
      ...inititialIngredientsState,
      selectedIngredient: {}
    })
  })
  
  it('should handle ADD_INGREDIENT_INTO_CONSTRUCTOR with normal ingredient', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      ingredientsList: [{_id: 1, data: 'testData1', type: 'bun'}, {_id: 2, data: 'testData2', type: 'souce'}],
    }, {
      type: ADD_INGREDIENT_INTO_CONSTRUCTOR,
      ingredientType: 'souce',
      id: 2
    }))
    .toEqual({
      ...inititialIngredientsState,
      ingredientsList: [{_id: 1, data: 'testData1', type: 'bun'}, {_id: 2, data: 'testData2', type: 'souce'}],
      constructorList: [{_id: 2, data: 'testData2', type: 'souce'}],
      selectedBun: {}
    })
  })

  it('should handle ADD_INGREDIENT_INTO_CONSTRUCTOR with bun', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      ingredientsList: [{_id: 1, data: 'testData1', type: 'bun'}, {_id: 2, data: 'testData2', type: 'souce'}],
    }, {
      type: ADD_INGREDIENT_INTO_CONSTRUCTOR,
      ingredientType: 'bun',
      id: 1
    }))
    .toEqual({
      ...inititialIngredientsState,
      ingredientsList: [{_id: 1, data: 'testData1', type: 'bun'}, {_id: 2, data: 'testData2', type: 'souce'}],
      constructorList: [],
      selectedBun: {_id: 1, data: 'testData1', type: 'bun'}
    })
  })
  
  it('should handle REMOVE_INGREDIENT_FROM_CONSTRUCTOR', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      constructorList: [
        {_id: 1, data: 'testData1', type: 'bun'},
        {_id: 2, data: 'testData2', type: 'souce'},
        {_id: 3, data: 'testData3', type: 'main'}
      ]}, {
      type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
      index: 1
    }))
    .toEqual({
      ...inititialIngredientsState,
      constructorList: [{_id: 1, data: 'testData1', type: 'bun'}, {_id: 3, data: 'testData3', type: 'main'}],
    })
  })
  
  it('should handle CLEAR_CONSTRUCTOR', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      constructorList: [{_id: 1, data: 'testData1'}, {_id: 2, data: 'testData2'}],
      selectedBun: {_id: 1, data: 'testData1'}
    }, {
      type: CLEAR_CONSTRUCTOR
    }))
    .toEqual({
      ...inititialIngredientsState,
      constructorList: [],
      selectedBun: {}
    })
  })
  
  it('should handle UPDATE_SELECTED_INGREDIENT when to > from', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      constructorList: [
        {_id: 1, data: 'testData1', type: 'bun'},
        {_id: 2, data: 'testData2', type: 'souce'},
        {_id: 3, data: 'testData3', type: 'main'}
      ]}, {
      type: UPDATE_SELECTED_INGREDIENT,
      toInsertIndex: 2,
      toRemoveIndex: 0
    }).constructorList[2].data)
    .toEqual('testData1')
  })

  it('should handle UPDATE_SELECTED_INGREDIENT when to < from', () => {
    expect(indexReducer({
      ...inititialIngredientsState,
      constructorList: [
        {_id: 1, data: 'testData1', type: 'bun'},
        {_id: 2, data: 'testData2', type: 'souce'},
        {_id: 3, data: 'testData3', type: 'main'}
      ]}, {
      type: UPDATE_SELECTED_INGREDIENT,
      toInsertIndex: 0,
      toRemoveIndex: 1
    }).constructorList[0].data)
    .toEqual('testData2')
  })
  
  it('should handle SET_INGREDIENTS_LIST_IS_LOADING', () => {
    expect(indexReducer(inititialIngredientsState, {
      type: SET_INGREDIENTS_LIST_IS_LOADING
    }))
    .toEqual({
      ...inititialIngredientsState,
      ingredientListIsLoaded: false
    })
  })
  
  it('should handle SET_INGREDIENTS_LIST_IS_ERROR', () => {
    expect(indexReducer(inititialIngredientsState, {
      type: SET_INGREDIENTS_LIST_IS_ERROR
    }))
    .toEqual({
      ...inititialIngredientsState,
      ingredientListIsLoaded: true,
      ingredientListIsError: true
    })
  })
  
})