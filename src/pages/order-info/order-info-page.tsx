import { useParams, useRouteMatch } from 'react-router-dom';
import React from 'react';
import { OrderInfo } from '../../components/order-info/order-info';
import styles from './order-info-page.module.css';
import { useSelector, useDispatch } from '../../services/hooks';
import { selectOrder } from '../../services/actions/order';
import { wsConnectionStart } from '../../services/actions/ws-actions';
import { getCookie } from '../../utils/cookie-utils';
import { TIngredient, TOrder } from '../../services/types/data';

export function OrderInfoPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch('/feed/:id');

  const ingredientsList = useSelector((store) => store.index.ingredientsList);
  const selectedOrder = useSelector((store) => store.order.selectedOrder);
  const { ordersInfo: { orders = [] } } = useSelector((store) => ({ ordersInfo: store.ws.ordersInfo }));

  const { id } = useParams<{id: string}>();
  React.useEffect(() => {
    if (!selectedOrder._id) {
      if (match) dispatch(wsConnectionStart('wss://norma.nomoreparties.space/orders/all'));
      else {
        const aToken = getCookie('Atoken');
        dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${aToken}`));
      }
    }
  }, []);

  if (!selectedOrder._id && orders.length > 0) {
    const order = orders.find((order: TOrder) => order._id === id);
    const {
      ingredients, name, number, _id, status, createdAt,
    } = order;
    const createdTime = new Date(Date.parse(createdAt)).toDateString();
    const selectedIngredients = ingredientsList.filter((ingredient: TIngredient) => ingredients.includes(ingredient._id));
    const totalPrice = selectedIngredients.reduce((sum: number, ingredient: TIngredient) => (sum + ingredient.price), 0);
    dispatch(selectOrder({
      totalPrice, selectedIngredients, name, number, _id, status, createdTime,
    }));
  }

  return (
    <main className={styles.main}>
      {selectedOrder._id && <OrderInfo />}
    </main>
  );
}
