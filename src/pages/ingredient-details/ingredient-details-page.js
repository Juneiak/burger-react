import React from "react";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details.js";
import styles from './ingredient-details-page.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {SELECT_INGREDIENT} from '../../services/actions/index.js';
import {useHistory} from 'react-router-dom';

export function IngredientDetailsPage () {
  const {ingredientsList, ingredientListIsLoaded: listIsLoaded, ingredientListIsError: listIsError} = useSelector(store => ({
    ingredientsList: store.index.ingredientsList,
    ingredientListIsLoaded: store.index.ingredientListIsLoaded,
    ingredientListIsError: store.index.ingredientListIsError
  }))
  const history = useHistory()
  const {id} = useParams()
  const dispatch = useDispatch()
  
  

  React.useEffect(() => {
    if (ingredientsList.length > 0) dispatch({type: SELECT_INGREDIENT, id})
  }, [ingredientsList])

  if (!listIsLoaded) return null

  if (listIsLoaded && (listIsError || ingredientsList.length === 0)) history.goBack()
  
  return (
    <main className={styles.main}>
      <IngredientDetails />
    </main>
  )
}