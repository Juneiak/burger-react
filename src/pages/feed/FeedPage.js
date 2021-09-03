import OrderCardList from '../../components/OrderCardList/OrderCardList';
import styles from './FeedPage.module.css';
import {Route, useRouteMatch} from 'react-router-dom';

function FeedPage() {
  const fetch = {
    "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c8",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733d0",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733d2",
        ],
        "_id": "",
        "status": "done",
        "number": 34535,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733d2",
          "60d3b41abdacab0026a733d3",
          "60d3b41abdacab0026a733d4",
          "60d3b41abdacab0026a733c6"
        ],
        "_id": "",
        "status": "done",
        "number": 34535,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      },
      {
        "ingredients": [
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733cc"
        ],
        "_id": "",
        "status": "done",
        "number": 34535,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      }
    ],
    "total": 1,
    "totalToday": 1
  } 

  const {orders} = fetch
  const {path} = useRouteMatch()

  return (
    <>
    <main className={styles.main}>
      <h1 className={`${styles.title} text text_type_main-large mb-5`}>Лента заказов</h1>
      <div className={styles.grid}>

        <section>
          <div className={styles.orderList}>
          <OrderCardList orders={orders} />
          </div>
        </section>

        <section className={styles.ordersInfo}>

          <div className={`${styles.statusLists} mb-15`}>
              <ul className={styles.statusList}>
                <p className='text text_type_main-medium mb-6'>Готовы:</p>
                <li className={`${styles.orderId} text text_type_digits-default`} style={{color: '#00CCCC'}}>034533</li>
                <li className={`${styles.orderId} text text_type_digits-default`} style={{color: '#00CCCC'}}>034533</li>
                <li className={`${styles.orderId} text text_type_digits-default`} style={{color: '#00CCCC'}}>034533</li>
                <li className={`${styles.orderId} text text_type_digits-default`} style={{color: '#00CCCC'}}>034533</li>
              </ul>
              <ul className={styles.statusList}>
                <p className='text text_type_main-medium mb-6'>В работе:</p>
                <li className={`${styles.orderId} text text_type_digits-default`}></li>
                <li className={`${styles.orderId} text text_type_digits-default`}>034533</li>
                <li className={`${styles.orderId} text text_type_digits-default`}>034533</li>
                <li className={`${styles.orderId} text text_type_digits-default`}>034533</li>
              </ul>
          </div>

          <div className={`${styles.stats} mb-6`}>
            <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
            <p className={`${styles.number} text text_type_digits-large`}>28 752</p>
          </div>

          <div className={styles.stats}>
            <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
            <p className={`${styles.number} text text_type_digits-large`}>138</p>
          </div>

        </section>

      </div>

    </main>

    <Route exact path={`${path}/:id`}>
      
    </Route>

    </>
  )
}

export default FeedPage;