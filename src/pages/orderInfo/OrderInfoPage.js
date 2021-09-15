import OrderInfo from '../../components/OrderInfo/OrderInfo';
import styles from './OrderInfoPage.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {SELECT_ORDER} from '../../services/actions/order';
import {WS_CONNECTION_START} from  '../../services/actions/wsActions';
import {useParams, useRouteMatch} from 'react-router-dom';
import {getCookie} from '../../utils/cookieUtils'
import React from 'react';

function OrderInfoPage() {
  const dispatch = useDispatch()
  const match = useRouteMatch('/feed/:id')

  const ingredientsList = useSelector(store => store.index.ingredientsList)
  const selectedOrder = useSelector(store => store.order.selectedOrder)
  const {ordersInfo: {orders=[]}} = useSelector(store => ({ordersInfo: store.ws.ordersInfo}))
  
  const {id} = useParams()
  React.useEffect(() => {
    if (!selectedOrder._id) {
      if (match) dispatch({type:WS_CONNECTION_START, wsUrl: 'wss://norma.nomoreparties.space/orders/all'})
      else {
        const aToken = getCookie('Atoken')
        dispatch({type:WS_CONNECTION_START, wsUrl: `wss://norma.nomoreparties.space/orders?token=${aToken}`})
      }
    }
  }, [])

  if (!selectedOrder._id && orders.length > 0) {
    const order = orders.find(order => order._id === id)
    const {ingredients, name, number, _id, status, createdAt} = order
    const createdTime =  new Date(Date.parse(createdAt)).toDateString()
    const selectedIngredients = ingredientsList.filter((ingredient) => ingredients.includes(ingredient._id))
    const totalPrice = selectedIngredients.reduce((sum, ingredient) => (sum + ingredient.price), 0)
    dispatch({type: SELECT_ORDER, data: {totalPrice, selectedIngredients, name, number, _id, status, createdTime}})
  }

  return (
    <main className={styles.main}>
      {selectedOrder._id && <OrderInfo />}
    </main>
  )
}

export default OrderInfoPage;