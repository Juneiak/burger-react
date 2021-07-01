
import Modal from "../Modal/Modal";
import OrderDetailsStyles from './OrderDetails.module.css';
import doneImage from '../../images/done.png';
import propTypes from 'prop-types';

function OrderDetails(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={OrderDetailsStyles.content}>
        <p className={`${OrderDetailsStyles.orderNumber} text text_type_digits-large mb-8 mt-20`}>132313</p>
        <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
        <img src={doneImage} className={`${OrderDetailsStyles.done} mb-15`} alt='done icon' />
        <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive mb-15'>Дождитесь готовности на орбитальной станции</p>
      </div>
    </Modal>
  )
}

OrderDetails.propTypes = {
  onClose: propTypes.func
}

export default OrderDetails;