import {OrderCardList} from "../order-card-list/order-card-list";
import { useDispatch, useSelector } from "../../services/hooks";
import React from "react";
import {wsConnectionStart} from '../../services/actions/ws-actions';
import {getCookie} from '../../utils/cookie-utils';

export function OrderHistory() {
  const dispatch = useDispatch()
  const aToken = getCookie('Atoken')
  React.useEffect(() => {
    dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${aToken}`))
  }, [])
  const {ordersInfo: {orders=[]}} = useSelector(store =>({ordersInfo: store.ws.ordersInfo}))
  const reversedOrders = (Array.from(orders).reverse())
  return (
    orders.length > 0 && <OrderCardList orders={reversedOrders} statusBar={true} />
  )
}