import React from 'react';
import ConstructorStyles from './ConstructorPage.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';
import Modal from '../../components/Modal/Modal';
import {getIngredientsList, REMOVE_SELECTED_INGREDIENT, CLEAR_ORDER_DETAILS} from '../../services/actions/index.js'
import { useDispatch, useSelector } from 'react-redux';

function ConstructorPage() {

  const dispatch = useDispatch()
  
  const {selectedIngredient, orderDetails} = useSelector(store => ({
    selectedIngredient: store.index.selectedIngredient,
    orderDetails: store.index.orderDetails
  }))

  React.useEffect(() => {
    dispatch(getIngredientsList())
  }, [])


  function handleCloseModal() {
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
    dispatch({type: CLEAR_ORDER_DETAILS})
    
  }
    

  return (
    <>
      <main className={ConstructorStyles.main}>
        <BurgerIngredients/>
        <BurgerConstructor />
      </main>

      {orderDetails.success && <Modal isOpen={orderDetails.success ? true : false} onClose={handleCloseModal}><OrderDetails /></Modal>}
      {selectedIngredient._id && <Modal isOpen={selectedIngredient ? true : false} onClose={handleCloseModal}><IngredientDetails /></Modal>}
    </>
  );
}

export default ConstructorPage;
