import React from 'react';
import ConstructorPageStyles from './ConstructorPage.module.css';
import {BurgerIngredients}from '../../components/burgerIngredients/BurgerIngredients';
import {BurgerConstructor} from '../../components/burgerConstructor/BurgerConstructor';
import {OrderDetails} from '../../components/OrderDetails/OrderDetails';
import {Modal} from '../../components/modals/Modal/Modal';
import {REMOVE_SELECTED_INGREDIENT} from '../../services/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {clearOrder} from '../../services/actions/order';

export function ConstructorPage() {

  const dispatch = useDispatch()
  const orderDetails = useSelector(store => store.order.orderDetails)

  React.useEffect(() => {
    dispatch({type: REMOVE_SELECTED_INGREDIENT})
  }, [])


  function handleCloseModal() {
    dispatch(clearOrder())
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