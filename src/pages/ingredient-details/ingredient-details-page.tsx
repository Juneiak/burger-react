import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { IngredientDetails } from '../../components/ingredient-details/ingredient-details';
import styles from './ingredient-details-page.module.css';
import { useDispatch, useSelector } from '../../services/hooks';
import { selectIngredient } from '../../services/actions/index';

export function IngredientDetailsPage() {
  const { ingredientsList, ingredientListIsLoaded: listIsLoaded, ingredientListIsError: listIsError } = useSelector((store) => ({
    ingredientsList: store.index.ingredientsList,
    ingredientListIsLoaded: store.index.ingredientListIsLoaded,
    ingredientListIsError: store.index.ingredientListIsError,
  }));
  const history = useHistory();
  const { id } = useParams<{id: string}>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (ingredientsList.length > 0) dispatch(selectIngredient(id));
  }, [ingredientsList]);

  if (!listIsLoaded) return null;

  if (listIsLoaded && (listIsError || ingredientsList.length === 0)) history.goBack();

  return (
    <main className={styles.main}>
      <IngredientDetails />
    </main>
  );
}
