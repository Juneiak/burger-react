import OrderCard from './OrderCard'
import styles from './OrderCardList.module.css'

function OrderCardList({orders}) {

  return (
    <ul className={styles.list}>
      {orders.map((order, index) => (
        <OrderCard orderData={order} key={index} />
      ))}
    </ul>
  )
}

export default OrderCardList;