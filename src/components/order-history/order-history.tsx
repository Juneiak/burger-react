import React from 'react';
import { OrderCardList } from '../order-card-list/order-card-list';
import { useDispatch, useSelector } from '../../services/hooks';
import { wsConnectionStart } from '../../services/actions/ws-actions';
import { getCookie } from '../../utils/cookie-utils';

export function OrderHistory() {
  const dispatch = useDispatch();
  const aToken = getCookie('Atoken');
  React.useEffect(() => {
    dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${aToken}`));
  }, []);
  const { ordersInfo: { orders = [] } } = useSelector((store) => ({ ordersInfo: store.ws.ordersInfo }));
  const reversedOrders: any = (Array.from(orders).reverse());
  return (
    orders.length ? <OrderCardList orders={reversedOrders} statusBar /> : null
  );
}
