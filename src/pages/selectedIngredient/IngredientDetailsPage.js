import React from "react";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails.js";
import styles from './IngredientDetailsPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {SELECT_INGREDIENT, getIngredientsList} from '../../services/actions/index.js';

function IngredientDetailsPage () {

  const [isLoaded, setIsLoaded] = React.useState(false)
  const {id} = useParams()
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(getIngredientsList())
      .then(data => dispatch({type: SELECT_INGREDIENT, id}))
    
    setIsLoaded(true)
  }, [])

  return (
    <main className={styles.main}>
      <IngredientDetails />
    </main>
  )
}

export default IngredientDetailsPage;