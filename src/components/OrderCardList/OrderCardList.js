import {OrderCard} from './OrderCard';
import styles from './OrderCardList.module.css'

export function OrderCardList({orders, statusBar}) {

  return (
    <ul className={styles.list}>
      {orders.map((order, index) => (
        <OrderCard orderData={order} key={index} statusBar={statusBar} />
      ))}
    </ul>
  )
}
