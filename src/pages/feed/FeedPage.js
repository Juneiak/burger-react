import {OrderCardList} from '../../components/orderCardList/OrderCardList';
import styles from './FeedPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {WS_CONNECTION_START} from '../../services/actions/wsActions'
import React from 'react';

export function FeedPage() {
  const dispatch = useDispatch()
  const [pendingOrders, setPendingOrders] = React.useState([])
  const [doneOrders, setDoneOrders] = React.useState([])

  React.useEffect(() => {
    dispatch({type: WS_CONNECTION_START, wsUrl: 'wss://norma.nomoreparties.space/orders/all'})
  }, [])

  const {ordersInfo: {orders=[], total=null, totalToday=null}} = useSelector(store =>({ordersInfo: store.ws.ordersInfo}))

  React.useEffect(() => { // распределение заказов по готовности, по 10шт
    let pendingOrdersNumber = []
    let doneOrdersNumber = []
    orders.forEach(order => {
      if (order.status === 'done' && doneOrdersNumber.length<10) doneOrdersNumber.push(order.number)
      else if (pendingOrdersNumber.length<10) pendingOrdersNumber.push(order.number)
    })
    setPendingOrders(pendingOrdersNumber)
    setDoneOrders(doneOrdersNumber)
  }, [])

  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} text text_type_main-large mb-5`}>Лента заказов</h1>
      <div className={styles.grid}>

        <section>
          <div className={styles.orderList}>
            {orders && <OrderCardList orders={orders} statusBar={false} />}
          </div>
        </section>

        <section className={styles.ordersInfo}>

          <div className={`${styles.statusLists} mb-15`}>
              <ul className={styles.statusList}>
                <p className='text text_type_main-medium mb-6'>Готовы:</p>
                {doneOrders.map((orderNumber, index) => (
                  <li key={index} className={`${styles.orderId} text text_type_digits-default`} style={{color: '#00CCCC'}}>{orderNumber}</li>
                ))}
              </ul>
              <ul className={styles.statusList}>
                <p className='text text_type_main-medium mb-6'>В работе:</p>
                {pendingOrders.map((orderNumber, index) => {
                  <li key={index} className={`${styles.orderId} text text_type_digits-default`}>{orderNumber}</li>
                })}
              </ul>
          </div>

          <div className={`${styles.stats} mb-6`}>
            <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
            <p className={`${styles.number} text text_type_digits-large`}>{total && total}</p>
          </div>

          <div className={styles.stats}>
            <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
            <p className={`${styles.number} text text_type_digits-large`}>{totalToday && totalToday}</p>
          </div>

        </section>

      </div>

    </main>
  )
}