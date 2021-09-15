import OrderCardList from "../orderCardList/OrderCardList";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {WS_CONNECTION_START} from '../../services/actions/wsActions';
import {getCookie} from '../../utils/cookieUtils';

function OrderHistory() {
  const dispatch = useDispatch()
  const aToken = getCookie('Atoken')
  React.useEffect(() => {
    dispatch({type: WS_CONNECTION_START, wsUrl: `wss://norma.nomoreparties.space/orders?token=${aToken}`})
  }, [])
  const {ordersInfo: {orders=[]}} = useSelector(store =>({ordersInfo: store.ws.ordersInfo}))
  const reversedOrders = (Array.from(orders).reverse())
  return (
    orders.length > 0 && <OrderCardList orders={reversedOrders} statusBar={true} />
  )
}

export default OrderHistory;