import React from 'react';
import ConstructorPageStyles from './ConstructorPage.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import Modal from '../../components/modals/Modal/Modal';
import {REMOVE_SELECTED_INGREDIENT, CLEAR_ORDER_DETAILS} from '../../services/actions/index.js'
import { useDispatch, useSelector } from 'react-redux';

function ConstructorPage() {

  const dispatch = useDispatch()
  const orderDetails = useSelector(store => store.index.orderDetails)

  React.useEffect(() => {
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
  }, [])


  function handleCloseModal() {
    dispatch({type: CLEAR_ORDER_DETAILS})
  }

  return (
    <>
      <main className={ConstructorPageStyles.main}>
        <BurgerIngredients/>
        <BurgerConstructor />
      </main>

      {orderDetails.success && <Modal isOpen={orderDetails.success ? true : false} onClose={handleCloseModal}><OrderDetails /></Modal>}
    </>
  );
}

export default ConstructorPage;
