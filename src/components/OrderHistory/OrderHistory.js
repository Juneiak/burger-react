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
  const {ordersInfo: {orders=[], total=null, totalToday=null}} = useSelector(store =>({ordersInfo: store.ws.ordersInfo}))

  return (
    orders.length > 0 && <OrderCardList orders={orders} statusBar={true} />
  )
}

export default OrderHistory;