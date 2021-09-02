import React from 'react';
import styles from './FeedPage.module.css';
import OrderCard from '../../components/OrderCard/OrderCard.js';

function FeedPage() {

  const fetch = {
    "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c8",
          "60d3b41abdacab0026a733cc",
          "60d3b41abdacab0026a733d0",
          "60d3b41abdacab0026a733d1",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733ca",
          "60d3b41abdacab0026a733cb",
          "60d3b41abdacab0026a733cc",
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

  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} text text_type_main-large mb-5`}>Лента заказов</h1>
      <div className={styles.grid}>

        <section className={styles.feed}>
          <ul className={styles.list}>
            {orders.map((order, index) => (
              <OrderCard orderData={order} key={index} />
            ))}
          </ul>
        </section>

        <section className={styles.orders}>

              <div style={{width: '100px', height:'100px', margin: '0'}}>DETAILS</div>

        </section>

      </div>

    </main>
  )
}

export default FeedPage;