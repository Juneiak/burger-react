import styles from './OrderDetails.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderInfo() {
  const {image, number, orderName, status, orderTotalPrice, ingredientPrice, ingredientAmount, createdTime} = {
    number: '034533',
    orderName: 'Black Hole Singularity острый бургер',
    status: 'Выполнен',
    orderTotalPrice: '510',
    ingredientPrice: '20',
    createdTime: 'Вчера, 13:50 i-GMT+3',
    ingredientAmount: 2,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png'
  }
  return (
    <div className={styles.content}>
      <p className={styles.orderNumber}>{`#${number}`}</p>
      <h3 className='text text_type_main-medium'>{orderName}</h3>
      <p className='text text_type_main-default'>{status}</p>
      <p className='text text_type_main-medium'>Состав:</p>

      <ul>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default'></p>
          </div>
          <div className={styles.price}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>

      <div className={styles.footer}>
          <p className='text text_type_main-default text_color_inactive'>{createdTime}</p>
          <div className={styles.price}>
            <p className={`${styles.total} text text_type_digits-default`}>{orderTotalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
    </div>
  )
}

export default OrderInfo;