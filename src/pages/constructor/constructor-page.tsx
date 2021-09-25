import React from 'react';
import ConstructorPageStyles from './constructor-page.module.css';
import { BurgerIngredients } from '../../components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../../components/burger-constructor/burger-constructor';
import { OrderDetails } from '../../components/order-details/order-details';
import { Modal } from '../../components/modals/modal/modal';
import { removeSelectedIngredient } from '../../services/actions/index';
import { useDispatch, useSelector } from '../../services/hooks';
import { clearOrder } from '../../services/actions/order';

export function ConstructorPage() {
  const dispatch = useDispatch();
  const orderDetails = useSelector((store) => store.order.orderDetails);

  React.useEffect(() => {
    dispatch(removeSelectedIngredient());
  }, []);

  function handleCloseModal() {
    dispatch(clearOrder());
  }

  return (
    <>
      <main className={ConstructorPageStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>

      {orderDetails.success && <Modal isOpen={!!orderDetails.success} onClose={handleCloseModal}><OrderDetails /></Modal>}
    </>
  );
}
