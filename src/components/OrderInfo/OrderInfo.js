import styles from './OrderInfo.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderInfo() {
  const {ingredientName, image, number, orderName, status, orderTotalPrice, ingredientPrice, ingredientAmount, createdTime} = {
    number: '034533',
    orderName: 'Black Hole Singularity острый бургер',
    status: 'Выполнен',
    orderTotalPrice: '510',
    ingredientPrice: '20',
    createdTime: 'Вчера, 13:50 i-GMT+3',
    ingredientAmount: 2,
    ingredientName: 'Флюоресцентная булка R2-D3',
    image: 'https://code.s3.yandex.net/react/code/meat-03.png'
  }
  return (
    <div className={styles.content}>
      <p className='text text_type_digits-default mb-10'>{`#${number}`}</p>
      <div className={styles.about}>
        <h3 className='text text_type_main-medium mb-3'>{orderName}</h3>
        <p style={{color: '#00CCCC'}} className='text text_type_main-default mb-15'>{status}</p>
        <p className='text text_type_main-medium mb-6'>Состав:</p>
      </div>
      

      <ul className={styles.ingredientsList}>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
            <p className={`${styles.total} text text_type_digits-default`}>{`${ingredientAmount} x ${ingredientPrice}`}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.info}>
            <img src={image} className={styles.image}></img>
            <p className='text text_type_main-default ml-4'>{ingredientName}</p>
          </div>
          <div className={`${styles.price} ml-4`}>
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